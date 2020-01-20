const desiredSuccessRate = 0.75;
const D = 1;

function changeQuestion(user, j, win) {
    window.answerToQuestion.push({question: j, win: win});

    var cpt = 0 ;
    window.questionDataset.forEach((question)=>{if(question.fallacy) cpt++});

    if (length(window.answerToQuestion) === cpt) {
        user.estimateTheta(window.answerToQuestion);
        window.answerToQuestion = [];
        return true;
    } else {
        return predictNextQuestion(user, j);
    }
}

function predictNextQuestion(j){
    var best = window.questionDataset[0];

    window.questionDataset.forEach((question) => {
        if (question !== j && 
            question.fallacy === j.fallacy && 
            Math.abs(probS(window.theta, question.Delta)-desiredSuccessRate) < Math.abs(probS(window.theta, best.Delta)-desiredSuccessRate)){
            best = question;
        }
    });

    return best;
}

function predictFirstQuestion(fallacy) {
    var best;
    window.questionDataset.forEach((question) => {
        if (question.Fallacy === fallacy) {
            best = question;
        }
    })

    window.questionDataset.forEach((question) => {
        if (
            question.Fallacy === fallacy && 
            Math.abs(probS(window.theta, question.Delta) - desiredSuccessRate) < Math.abs(probS(window.theta, best.Delta) - desiredSuccessRate)
        )
        {
            best = question;
        }
    });
    return best;
}

function probS(theta, Delta){
    console.log("prob " + 1/(1+Math.exp(-D*(theta - Delta))))
    return 1/(1+Math.exp(-D*(theta - Delta)));
}
function estimateTheta() {
    var newTheta = 1;

    window.answerToQuestion.forEach(answer => {
        if( answer.win ){
            newTheta *= (probS(window.theta - answer.question.Delta))
        } else {
            newTheta *= (1-probS(window.theta - answer.question.Delta))
        }
    });
    console.log("nTheta")
    console.log(newTheta)
    window.theta = newTheta
}
export {predictFirstQuestion, predictNextQuestion, probS, changeQuestion, estimateTheta}
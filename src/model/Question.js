const desiredSuccessRate = 0.75;

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

function predictNextQuestion(user, j){
    var best = window.questionDataset[0];

    window.questionDataset.forEach((question) => {
        if (question !== j && 
            question.fallacy === j.fallacy && 
            Math.abs(probS(user.theta, question.Delta)-desiredSuccessRate) < Math.abs(probS(user.theta, best.Delta)-desiredSuccessRate)){
            best = question;
        }
    });

    return best;
}

function predictFirstQuestion(user, fallacy) {
    var best;
    window.questionDataset.forEach((question) => {
        if (question.Fallacy === fallacy) {
            best = question;
        }

    })

    window.questionDataset.forEach((question) => {
        console.log(question.Fallacy);
        console.log(fallacy);
        if (
            question.Fallacy === fallacy && 
            Math.abs(probS(user.theta, question.Delta) - desiredSuccessRate) < Math.abs(probS(user.theta, best.Delta) - desiredSuccessRate)
        )
        {
            best = question;
        }
        console.log(probS(user.theta, question.Delta));
    });
    console.log(best)
    return best;
}

function probS(theta, Delta){
    const D = 1;
    return 1/(1+Math.exp(-D*(theta - Delta)));
}
function checkAnswer(a1,a2) {
    return a1 === a2 ? true: false;
}

export {predictFirstQuestion, predictNextQuestion, probS, checkAnswer, changeQuestion}
const questionDataset = []; 
const desiredSuccessRate = 0.75;
const D = 1;

var answerToQuestion = [];

function changeQuestion(user, j, win) {
    answerToQuestion.push([j,win]);

    var cpt = 0 ;
    questionDataset.forEach((question)=>{if(question.fallacy) cpt++});

    if (length(answerToQuestion) === cpt) {
        user.estimateTheta(answerToQuestion);
        return true;
    } else {
        nextQuestion = predictNextQuestion(theta, j);
        return false;
    }
}

function predictNextQuestion(theta, j){
    var best = questionDataset[0];

    questionDataset.forEach((question) => {
        if (question !== j && 
            question.fallacy == j.fallacy && 
            Math.abs(ProbS(theta, question)-desiredSuccessRate) < Math.abs(ProbS(theta, best)-desiredSuccessRate)){
            best = question;
        }
    });

    return best;
}

function ProbS(theta, j){
    return 1/(1+Math.exp(-D(theta.lvl - j.delta)));
}
function checkAnswer(a1,a2) {
    return a1 == a2 ? true: false;
}
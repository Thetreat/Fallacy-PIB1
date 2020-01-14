const questionDataset = []; 
const desiredSuccessRate = 0.75;
const D = 1;

var answerToQuestion = [];
/* eslint-disable */
function changeQuestion(user, j, win) {
    answerToQuestion.push({question: j, win: win});

    var cpt = 0 ;
    questionDataset.forEach((question)=>{if(question.fallacy) cpt++});

    if (length(answerToQuestion) === cpt) {
        user.estimateTheta(answerToQuestion);
        answerToQuestion = [];
        return true;
    } else {
        return predictNextQuestion(user, j);
    }
}

function predictNextQuestion(user, j){
    var best = questionDataset[0];

    questionDataset.forEach((question) => {
        if (question !== j && 
            question.fallacy === j.fallacy && 
            Math.abs(probS(user.theta, question.delta)-desiredSuccessRate) < Math.abs(probS(user.theta, best.delta)-desiredSuccessRate)){
            best = question;
        }
    });

    return best;
}

function predictFirstQuestion(user, fallacy) {
    var best = window.questionDataset[0];

    window.questionDataset.forEach((question) => {
        if (question.fallacy === fallacy && 
            Math.abs(probS(user.theta, question.delta)-desiredSuccessRate) < Math.abs(probS(user.theta, best.delta)-desiredSuccessRate)){
            best = question;
        }
    });
    return best;
}

function probS(theta, delta){
    return 1/(1+Math.exp(-D(theta - delta)));
}
function checkAnswer(a1,a2) {
    return a1 === a2 ? true: false;
}

export {predictFirstQuestion, predictNextQuestion, probS, checkAnswer, changeQuestion}
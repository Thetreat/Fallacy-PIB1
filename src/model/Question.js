const desiredSuccessRate = 0.75;
const D = 1;

function getQuestionFromTheSameAcabit(j) {
  for (const question of window.questionDataset) {
      if (question.Fallacy === j.Fallacy && question !== j) {
      return  question;
    }
  };
}

function predictNextQuestion(j) {
  var best = getQuestionFromTheSameAcabit(j);

    for(const question of window.questionDataset) {
    if (
      question !== j &&
      question.Fallacy === j.Fallacy &&
      Math.abs(probS(window.theta, question.Delta) - desiredSuccessRate) <
        Math.abs(probS(window.theta, best.Delta) - desiredSuccessRate)
    ) {
      best = question;
    }
  };

  return best;
}

function predictFirstQuestion(fallacy) {
  var best = getQuestionFromTheSameAcabit({ "Fallacy": fallacy });

    for (const question of window.questionDataset){
    if (
      question.Fallacy === fallacy &&
      Math.abs(probS(window.theta, question.Delta) - desiredSuccessRate) <
        Math.abs(probS(window.theta, best.Delta) - desiredSuccessRate)
    ) {
      best = question;
    }
  };
  return best;
}

function probS(theta, Delta) {
//   console.log("theta " + theta);
//   console.log("delta " + Delta);
//   console.log("prob " + 1 / (1 + Math.exp(-D * (theta - Delta))));
  return 1 / (1 + Math.exp(-D * (theta - Delta)));
}
function probToTheta(prob) {
    return Math.log(1/prob -1)
}
function estimateTheta() {
    var oTheta = 1;
    for (const answer of window.answerToQuestion) {
    if (answer.win) {
      oTheta *= probS(window.theta, answer.question.Delta);
    } else {
      oTheta *= 1 - probS(window.theta, answer.question.Delta);
    }
    };
    window.theta = probToTheta(oTheta);
}
export {
  predictFirstQuestion,
  predictNextQuestion,
  probS,
  estimateTheta
};

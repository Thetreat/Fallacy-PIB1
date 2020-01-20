import { probS } from "./Question"

class User {
    constructor(name){
        this.name = name;
        this.theta = -3;
    }

    estimateTheta(answerToQuestion) {
        var newTheta = 1;

        answerToQuestion.forEach(answer => {
            if( answer.win ){
                newTheta *= (probS(this.theta - answer.question.delta))
            } else {
                newTheta *= (1-probS(this.theta - answer.question.delta))
            }
        });
        this.theta = newTheta
    }
    // toString() {
    //     return this.name + " " + this.theta
    // }
}

export default User
# When the user answer
"""
We define :
theta : an object representing the user
theta.lvl is the level of the user
j : an object representing the question which has been answered
j.delta is the difficulty of the question
win : a boolean which is True when the answer to the question was right and False otherwise
nextQuestion : the next question that we will present to the learner

questionDataset is an array containing 
"""

from math import e

desiredSuccessRate = 0.75
D = 1

oTheta = theta
Theta.lvl = newThetaLvl(theta,j,win) # Update the level of the user
j.delta = newDifficultyQuestion(oTheta,j,win) # Update the difficulty of the question
nextQuestion = predictNext(theta, j) # predicts the next question

def predictNext(theta, j):
    best = questionDataset[0]
    for question in questionDataset:
        if question != j and abs(ProbS(theta, question)-desiredSuccessRate) < abs(ProbS(theta, best)-desiredSuccessRate):
            best = question
    return best

def ProbS(theta, j):
    return 1+(1+e**(-D(theta.lvl - j.delta)))
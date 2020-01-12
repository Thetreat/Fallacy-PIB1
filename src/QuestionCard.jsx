import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { styled } from "@material-ui/core/styles"
import { Grid, CardActions, Checkbox, FormGroup, FormControlLabel, Button, withStyles } from "@material-ui/core"

import "./model/Question"
import "./model/User"

class QuestionCard extends React.Component {

	constructor(props) {
		super(props);

		this.question = {
			id: 0,
			fallacy: "Cherry Picking",
			type: "txt",
			wording: "Which one of these fallacies is a cherry picking ?",
			image: "",
			answers: ["Maxime said analysis classes are hard. I find mine hard too. Therefore all analysis classes must be hard.",
				"I like chocolate donuts. Therefore all chocolate donuts are good.",
				"Spider-Man was bitten by a spider. If a spider bites me, I will become Spider-Man."
			],
			solution: [0],
			delta: 0.1
		};

		this.Card = styled(Card)({
			background: '#FF8E53 30%',
			borderRadius: 3,
			color: 'white',
		});

        this.Checkbox = withStyles({
            root: {
              color: "#FFFFFF",
              '&$checked': {
                color: "#FFFFFF",
              },
            },
            checked: {},
        })(props => <Checkbox color="default" {...props} />);

        this.userAnswer = [];
    }

    constructAnswers() {
        var i = 0;
        var answers = [];
        this.question.answers.forEach(answer => {
            answers.push(<FormControlLabel control={
                <this.Checkbox color="default" value={i} onChange={(event, isChecked) => {
                    if (isChecked) {
                        this.userAnswer.push(parseInt(event.target.value,10));
                    } else {
                        this.userAnswer.splice(this.userAnswer.indexOf(parseInt(event.target.value,10)),1);
                    }
                    this.userAnswer.sort();
                }}/>
                }
                label={answer}
                key={i}
                style={{margin:5}}
            />);
            i++
        });
        return answers;
    }

	constructImage() {
		if (this.question.image !== "") {
			return <img src={this.question.image} alt="The problem" />
		}
	}

	render() {
		return (
			<Grid item sm={5} md={4}>
					<div>
						<this.Card>
							<CardContent>
								<h3 style={{marginTop: 0}}>
									{this.question.fallacy}
								</h3>
								<p>
									{this.question.wording}
								</p>
								{
									this.constructImage()
								}
							</CardContent>
							<CardActions style={{ marginTop: -30 }}>
								<FormGroup>
									{
										this.constructAnswers()
									}
									<Button variant="contained" style={{ marginTop: 5 }}>Validate</Button>
								</FormGroup>
							</CardActions>
						</this.Card>
					</div>
			</Grid>
		);
	};
}

export default QuestionCard
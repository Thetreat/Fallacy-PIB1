import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { styled } from "@material-ui/core/styles"
import { Grid, CardActions, Checkbox, FormGroup, FormControlLabel, Button, withStyles } from "@material-ui/core"

import {predictFirstQuestion} from "./model/Question"
// import {} from "./model/User"

class QuestionCard extends React.Component {

	constructor(props) {
		super(props);
		
		if (this.props.hasOwnProperty("index")){
			this.question = window.questionDataset[this.props.index];
		} else {
			this.question = predictFirstQuestion(window.user,props.name)
			console.log(this.question)
		}

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
		if (this.question.type === "txt"){
			var i = 0;
			var answers = [];
			this.question.Answers.forEach(answer => {
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
		} else if (this.question.type === "img") {
			
		}
    }

	constructImage() {
		if (this.question.image !== "") {
			return <img src={window.location.origin + "/questions/" + this.question.image} alt="The problem" />
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
									<Button variant="contained" onClick={
										() => {

										}
									} style={{ marginTop: 5 }}>Validate</Button>
								</FormGroup>
							</CardActions>
						</this.Card>
					</div>
			</Grid>
		);
	};
}

export default QuestionCard
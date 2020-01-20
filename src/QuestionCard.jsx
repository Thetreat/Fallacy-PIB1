import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { styled } from "@material-ui/core/styles"
import { Grid, CardActions, Checkbox, FormGroup, FormControlLabel, Button, withStyles, CardMedia } from "@material-ui/core"

import {predictFirstQuestion} from "./model/Question"
// import {} from "./model/User"

class QuestionCard extends React.Component {

	constructor(props) {
		super(props);
		
		if (this.props.hasOwnProperty("index")){
			this.state = {question : window.questionDataset[this.props.index], answered: false};
		} else {
			this.state = {question : predictFirstQuestion(window.user,props.name), answered: false};
		}

		this.Card = styled(Card)({
			position: "relative",
			top: "52%", left: "50%",
			transform: "translate(-50%)",
			background: '#FF8E53 30%',
			borderRadius: 3,
			color: 'white',
			width: "fit-content",
			margin:20,
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
		if (this.state.question.Type === "txt"){
			var i = 0;
			var answers = [];
			this.state.question.Answers.forEach(answer => {
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
	}

	constructImage() {
		if (this.state.question.Image !== "") {
			return <CardMedia>
					<img style={{ margin: 20, borderRadius: 5 }} src={window.location.origin + "/questions/" + this.state.question.Image} alt="The problem"
					onClick={
						(e) => {
							var rect = e.target.getBoundingClientRect();
							console.log("X:" + (e.clientX - rect.x) + " Y:" + (e.clientY - rect.y));
						}
					}/>
				</CardMedia>
		}
	}

	dispAnswer() {
		if (this.state.answered) {
			return "Next"
		} else {
			return "Validate"
		}
	}

	render() {
		return (
			<Grid item sm={5} md={4}>
				<div>
					<this.Card>
						
						{
							this.constructImage()
						}
						
						<CardContent style={{marginTop:-10}}>
							<h3 style={{marginTop: 0}}>
								{this.state.question.Fallacy}
							</h3>
							<p>
								{this.state.question.Wording}
							</p>
							<p>{this.showAnswers}</p>
						</CardContent>
						<CardActions style={{ marginTop: -30 }}>
							<FormGroup>
								{
									this.constructAnswers()
								}
								<Button variant="contained" onClick={
									() => {
										if (this.state.question.Type === "txt"){
											if (this.userAnswer.toString() === this.state.question.Solution.toString()) {
												console.log("bien joué")
											} else {
												console.log("mal joué")
											}
										}
										this.setState({answered : true});
									}
								} style={{ marginTop: 5 }}>
									{
										this.dispAnswer()
									}
								</Button>
							</FormGroup>
						</CardActions>
					</this.Card>
				</div>
			</Grid>
		);
	};
}

export default QuestionCard
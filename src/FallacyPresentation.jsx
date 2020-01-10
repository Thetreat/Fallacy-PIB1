import React from "react"
import { styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import { Grid } from "@material-ui/core"

class FallacyPresentation extends React.Component {

	fallacyDesc = {
		"Cherry Picking": {
			"Description": `Cherry picking is when you selectively pick out the evidence that backs up your point of view while disregarding the data that doesn’t.
            For example is the above picture we can see that in order to get more vote one of the politician 
            purposefully selected the part of the curve showing that the unemployment was down.`,
			"Example": `A classical example of a cherry picking fallacy: Global climate warming. 
            Studying the last 20 years, we see not real augmentation in the global temperature, but looking at the last 100 years it is obvious.`
		},
	};

	constructor(props) {
		super(props);
		this.description = this.fallacyDesc[this.props.name].Description;
		this.example = this.fallacyDesc[this.props.name].Example;

		this.Card = styled(Card)({
			background: '#FF8E53 30%',
			borderRadius: 3,
			color: 'white',
		})
			;
	};


	render() {
		return (
			<Grid item sm={5} md={4}>
				<this.Card>
					<CardContent>
						<h3 style={{marginTop: 0}}>
							{this.props.name}
						</h3>
						<p>
							{this.description}
						</p>
						<div>
							<p style={{ textDecoration: "underline" }}>Example :</p>
							<p>{this.example}</p>
						</div>
					</CardContent>
					<CardActions style={{ marginTop: -20 }}><Button variant="contained">Choose</Button></CardActions>
				</this.Card>
			</Grid>
		)
	};
}

export default FallacyPresentation
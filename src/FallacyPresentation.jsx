import React from "react"
import { styled } from "@material-ui/core/styles"
import Button  from "@material-ui/core/Button" 
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
            "Example" : `A classical example of a cherry picking fallacy: Global climate warming. 
            Studying the last 20 years, we see not real augmentation in the global temperature, but looking at the last 100 years it is obvious.`
        },
    };

    constructor (props) {
        super(props);
        this.description = this.fallacyDesc[this.props.name].Description;
        this.example = this.fallacyDesc[this.props.name].Example;

        this.Card = styled(Card)({
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            color: 'white',
            // width: "35%",
        })
        ;
    };


    render () {
    return (
    <Grid item xs>
        <this.Card>
            <CardContent>
                <h3>
                {this.props.name}
                </h3>
                <p>
                {this.description}
                </p>
                <br />
                <div>
                    <p style={{"textDecoration":"underline"}}>Example :</p>
                    <p>{this.example}</p>
                </div>
            </CardContent>
            <CardActions><Button variant="contained">Choose</Button></CardActions>
        </this.Card>
    </Grid>
        )
    };
}

export default FallacyPresentation
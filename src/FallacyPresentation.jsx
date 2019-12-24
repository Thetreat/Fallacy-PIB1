import React from "react"
import {Button} from "@material-ui/core" 
class FallacyPresentation extends React.Component {
    fallacyDesc = {
        "Cherry Picking": {
            "Description": `Cherry Picking is about chosing very specific values inside a whole data, 
                because the part you chose reinforce out argument, despite the fact that if you consider the whole, 
                it says the exact opposite.`,
            "Example" : `A governement chosing a specific month to convince that their politics decreased unemployement, 
                despite the fact that every other part of the year, unemployement is increasing, is Cherry Picking.`
        },
    };

    constructor (props) {
        super(props);
        this.description = this.fallacyDesc[this.props.name].Description;
        this.example = this.fallacyDesc[this.props.name].Example;
    };

    render () {
        return (
            <div className="QuestionCard">
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
                <Button variant="contained">Choose</Button>
            </div>
        )
    };
}

export default FallacyPresentation
import React from "react"
import Draggable from "react-draggable"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { styled } from "@material-ui/core/styles"
import { orange } from '@material-ui/core/colors';
import { Grid, CardActions, Checkbox, FormGroup, FormControlLabel, Button, withStyles } from "@material-ui/core"

class QuestionCard extends React.Component {

    constructor(props){
        super(props);

        this.question = {
            id: 0,
            fallacy : "Cherry Picking",
            type : "txt",
            wording: "Which one of these fallacies is a cherry picking ?",
            image : "",
            answers : ["Maxime said analysis classes are hard. I find mine hard too. Therefore all analysis classes must be hard.",
                        "I like chocolate donuts. Therefore all chocolate donuts are good.",
                        "Spider-Man was bitten by a spider. If a spider bites me, I will become Spider-Man."
            ],
            solution: [0],
            difficulty: 0.1
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
    }

    constructAnswers() {
        var i = 0;
        var answers = [];
        this.question.answers.forEach(answer => {
            answers.push(<FormControlLabel control={
                <this.Checkbox color="default" value={"checked"+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i]}/>
                }
                label={answer}
                key={i}/>);
            i++
        });
        return answers;
    }

    render() {
      return (
        <Grid item xs={3}>
        <Draggable>
            <div>
                <this.Card>
                    <CardContent>
                        <h3>
                            {this.question.fallacy}
                        </h3>
                        <p>
                            {this.question.wording}
                        </p>
                    </CardContent>
                    <CardActions>
                        <FormGroup>
                            {
                                this.constructAnswers()
                            }
                        <Button variant="contained">Validate</Button>
                        </FormGroup>
                    </CardActions>
                </this.Card>
            </div>
        </Draggable>
        </Grid>
        );
    };
  }

export default QuestionCard
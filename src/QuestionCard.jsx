import React from "react"
import Draggable from "react-draggable"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { styled } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"

class QuestionCard extends React.Component {

    constructor(props){
        super(props);

        this.Card = styled(Card)({
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            color: 'white',
        });
    }
    render() {
      return (
        <Grid item xs>
        <Draggable>
            <div>
                <this.Card>
                    <CardContent>
                        <h3>
                            {this.props.name}
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam at commodo turpis. Mauris eu neque consectetur nunc mollis bibendum non ut mi.
                            Curabitur vitae dolor non orci auctor dapibus. Vestibulum imperdiet sodales hendrerit.
                            Proin hendrerit elit felis, sed maximus ipsum fermentum sit amet.
                            Aliquam et dolor pretium, malesuada sapien ut, pellentesque tellus.
                            Nam molestie congue mauris, et commodo elit pretium ut.
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Sed facilisis imperdiet sapien vel viverra. Vestibulum lacinia pretium scelerisque.
                            Fusce nec urna mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean vitae nunc accumsan, vulputate urna nec, facilisis ex.
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                        <ul>
                            <li>This is true</li>
                            <li>This is false</li>
                        </ul>
                        <p><span style={{ "textDecoration": "underline" }}>Difficulty</span> : 0.5</p>
                    </CardContent>
                </this.Card>
            </div>
        </Draggable>
        </Grid>
        );
    };
  }

export default QuestionCard
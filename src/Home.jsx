import React from 'react';
import { Grid, Typography } from "@material-ui/core"
import FallacyPresentation from "./FallacyPresentation"
class Home extends React.Component {
    render () {
        return (
            <div>
                <Typography variant="h4" style={{margin:25}}>Choose a fallacy to start with:</Typography>
                <Grid container direction="row" justify="space-around" alignItems="center" spacing={1} >
                    <FallacyPresentation name="Cherry Picking" />
                    <FallacyPresentation name="Post hoc ergo propter hoc" />
                </Grid>
            </div>
        );
    }
}

export default Home
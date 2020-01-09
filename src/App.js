import React from 'react';
import './App.css';

import Grid from "@material-ui/core/Grid"

import QuestionCard from "./QuestionCard"
import FallacyPresentation from "./FallacyPresentation"

/* eslint-disable */
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="Body">
					<h1 id="title">Fallacier</h1>
					<div>
						<h2>Choose a fallacy to start with:</h2>
						<Grid container direction="row" justify="space-around" alignItems="center" spacing={1} >
							<FallacyPresentation name="Cherry Picking" />
							<QuestionCard name="Simpson's paradox" />
							{/* <QuestionCard name="Slippery Slope" /> */}
						</Grid>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;

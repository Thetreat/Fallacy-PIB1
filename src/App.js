import React from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

import QuestionCard from "./QuestionCard";
import Home from "./Home";
import { Grid, IconButton, AppBar, Toolbar, Typography, TextField, Button, withStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const CssTextField = withStyles({
	root: {
	  color: "white",
	  '& label.Mui-focused': {
		color: 'white',
	  },
	  '& .MuiInput-underline:after': {
		borderBottomColor: 'white',
	  },
	  '& .MuiOutlinedInput-root': {
		'& fieldset': {
		  borderColor: 'white',
		},
		'&:hover fieldset': {
		  borderColor: 'white',
		},
		'&.Mui-focused fieldset': {
		  borderColor: 'white',
		},
	  },
	},
})(TextField);

class Login extends React.Component {
	constructor(props) {
		super(props);
		if (window.name) {
			this.state = { isLoggedIn: true };
			window.theta = parseFloat(localStorage.getItem(window.name));
		} else {
			this.state = { isLoggedIn: false};
		}
	}

	log() {		
		window.name = document.getElementById("loginText").value;
		if (localStorage.getItem(window.name) === null) {
			localStorage.setItem(window.name, -3);
		}
		window.theta = parseFloat(localStorage.getItem(window.name));
	}

	render() {
		if (this.state.isLoggedIn) {
			return (<Grid item><Typography>You are logged in as {window.name}</Typography></Grid>);
		} else {
			return (
				[<Grid item key={0}>
				<CssTextField label="User name" variant="outlined" id="loginText"/>
				</Grid>,
				<Grid item key={1}>
				<Button color="inherit" onClick={() => {
					this.log()
					this.setState({ isLoggedIn: true, });
				}}>Login</Button>
				</Grid>]
			);
		}
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		
		window.questionDataset =
			[
				{
					"ID": "0",
					"Fallacy": "Cherry Picking",
					"Type": "img",
					"Wording": "You are the proud owner of a Donut Business. But your sales have been going down due to people wanting to be more healthy. Based of the cherry picking principle, choose the part of the graph that allows you to state “Donuts make you lose weight”.",
					"Image": "0.png",
					"Answers": "",
					"Solution": [{ "x": 183, "y": 425 }, { "x": 340, "y": 334 }, { "x": 480, "y": 432 }],
					"Delta": -1.5
				},
				{
					"ID": "1",
					"Fallacy": "Cherry Picking",
					"Type": "txt",
					"Wording": "Which one of these fallacies is a cherry picking ?",
					"Image": "",
					"Answers": ["Maxime said analysis classes are hard. I find mine hard too. Therefore all analysis classes must be hard.", "I like chocolate donuts. Therefore all chocolate donuts are good.", "Spider-Man was bitten by a spider. If a spider bites me, I will become Spider-Man."],
					"Solution": [0],
					"Delta": -2.4
				},
				{
					"ID": "2",
					"Fallacy": "Cherry Picking",
					"Type": "txt",
					"Wording": "Identify the following fallacy : My 80-yo grandpa smoked all his life a cigarette a day and doesn’t have lung cancer. Therefore smoking isn’t what causes it.",
					"Image": "",
					"Answers": ["Ad Hoc", "Cherry Picking", "No True Scotsman", "Post Hoc"],
					"Solution": [1],
					"Delta": -2.1
				},
				{
					"ID": "3",
					"Fallacy": "Cherry Picking",
					"Type": "img",
					"Wording": "Identify the CP zone in this graph :",
					"Image": "3.png",
					"Answers": "",
					"Solution": [{ "x": 160, "y": 70 }],
					"Delta": -2.1
				},
				{
					"ID": "4",
					"Fallacy": "Cherry Picking",
					"Type": "img",
					"Wording": "Here is a graphic of the anomaly of the sea-ice extent. The climate warming is obviously shown on it. But you’re here to lie and deceive the world. Select two points to use in order to become Donald.",
					"Image": "4.png",
					"Answers": "",
					"Solution": [[{ "x": 179, "y": 154 }, { "x": 256, "y": 174 }], [{ "x": 427, "y": 127 }, { "x": 452, "y": 116 }]],
					"Delta": 2.4
				},
				{
					"ID": "5",
					"Fallacy": "Cherry Picking",
					"Type": "img",
					"Wording": "Now you wish to become the Prime Minister of the UK. But you need to make your people believe that unemployment is diminishing in order to collect votes. ",
					"Image": "5.png",
					"Answers": "",
					"Solution": [{ "x": 675, "y": 140 }],
					"Delta": -1.8
				},
				{
					"ID": "6",
					"Fallacy": "Cherry Picking",
					"Type": "txt",
					"Wording": "Complete this Cherry Picking fallacy :Interviewer : In your resume you say have quite the professional experience, have done a few stages abroad and are very motivated for this work.Alice : That's right Sir.Interviewer : ....",
					"Image": "",
					"Answers": ["Do you have anything you wish to add for this interview ?", "I spoke to your teacher. He said you were usually slacking off and have had trouble with others there. Mind telling me more ?", "Can you prove how motivated you are ?", "It's a shame you're a woman.", "Now get out."],
					"Solution": [1],
					"Delta": -1.2
				},
				{
					"ID": "7",
					"Fallacy": "Cherry Picking",
					"Type": "txt",
					"Wording": "Identify the following fallacy : I will vote for Donald Trump again. Since he came in function, unemployment rate has dropped drastically, and the working conditions have generally improved. Therefore he is a great president.",
					"Image": "",
					"Answers": ["Cherry Picking", "Post Hoc", "Ad Hominen", "Red Herring"],
					"Solution": [0],
					"Delta": -1.5
				},
				{
					"ID": "8",
					"Fallacy": "Cherry Picking",
					"Type": "txt",
					"Wording": "Identify the following fallacy : Some say McDonald's make people fatter. Well I'll have you know my cousin has been eating there three times a week for years and she's still as thin as a leaf.",
					"Image": "",
					"Answers": ["Red Herring", "Gambler", "Cherry Picking", "Ad Hoc"],
					"Solution": [2],
					"Delta": -2.4
				},
				{
					"ID": "9",
					"Fallacy": "Cherry Picking",
					"Type": "txt",
					"Wording": "Is this a Cherry Picking ? All Asians are good musicians.",
					"Image": "",
					"Answers": ["True", "False"],
					"Solution": [1],
					"Delta": -2.4
				},
				{
					"ID": "10",
					"Fallacy": "Post Hoc Ergo Propter hoc",
					"Type": "",
					"Wording": "Which one of these sentences is post hoc?",
					"Image": "",
					"Answers": "After drinking a glass of frog spit I got better from my cold, therefore frog spit is an efficient treatment against colds,I saw a black cat so now I have bad luck,I lost a football game so I need new sneakers",
					"Solution": [0],
					"Delta": -1
				},
				{
					"ID": "11",
					"Fallacy": "Post Hoc Ergo Propter hoc",
					"Type": "",
					"Wording": "Now look at this graph. You are a news anchor and you need some spicy information for the next broadcast. Use this graph to give realistic news to people who beleive whatever you say in a post hoc way. This graph shows that:",
					"Image": "",
					"Answers": "Ice cream sales are increased as a result of the increase of shark attacks,In the summer, people who eat ice cream are attacked by sharks,Shark attacks and ice cream sales have an important correlation rate,Ice cream protects you from being attacked by a shark",
					"Solution": [2],
					"Delta": -1.8
				},
				{
					"ID": "12",
					"Fallacy": "Post Hoc Ergo Propter hoc",
					"Type": "",
					"Wording": "Now back on the global warming topic we have this graph: This graph demonstrates that:",
					"Image": "",
					"Answers": "Becoming a Pirate helps fighting global warming,There’s a strong correlation between the two,The disparition of pirates is what causes global warming,You can’t deduce anything from it",
					"Solution": [1],
					"Delta": -1.8
				},
				{
					"ID": "13",
					"Fallacy": "Post Hoc Ergo Propter hoc",
					"Type": "",
					"Wording": "Is this a Post Hoc fallacy?“Blake broke a mirror and afterward his parents divorced, breaking the mirror is what lead to the divorce”",
					"Image": "",
					"Answers": "True,False",
					"Solution": [0],
					"Delta": -2.4
				},
				{
					"ID": "14",
					"Fallacy": "Post Hoc Ergo Propter hoc",
					"Type": "",
					"Wording": "Is this a Post Hoc fallacy?“Wen played a football game without his lucky jersey and that’s why his team lost”",
					"Image": "",
					"Answers": "True,False",
					"Solution": [1],
					"Delta": -2.4
				}
			];
		window.answerToQuestion = [];
		window.appSession = this;
	} 


	render() {
		return (
			<div className="App">
				<header className="App-header">
				<Router>
				<AppBar position="static" style={{background:"#FF8E53 30%"}} id="Appbar">
					<Toolbar>
					<IconButton edge="start" aria-label="back" onClick={()=>{window.location.pathname = "/"}}>
					<ArrowBackIcon style={{color:"#FFFFFF"}}/>
					</IconButton>
					<Typography variant="h6" style={{flex:1}}>
					Fallacyer
					</Typography>
					<Grid container style={{flex:1}} justify="flex-end" alignItems="center">
						<Login></Login>
					</Grid>
				</Toolbar>
				</AppBar>
					<Switch>
						<Route path="/Cherry-Picking">
							<Grid container justify="center">
								<QuestionCard name="Cherry Picking" />
							</Grid>
						</Route>
						<Route path="/Post-hoc-propter-hoc">
							<Grid container justify="center">
								<QuestionCard name="Post Hoc Ergo Propter Hoc" />
							</Grid>
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
				</header>
			</div>
		);
	}}

export default App;

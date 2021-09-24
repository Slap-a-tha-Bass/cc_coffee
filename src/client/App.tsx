import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Private from './components/Private';
import Edit from './views/Edit';
import Home from './views/Home';
import Invalid from './views/Invalid';
import Login from './views/Login';
import Orders from './views/Orders';
import Profile from './views/Profile';
import Register from './views/Register';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/orders">
					<Orders />
				</Route>
				<Route exact path="/:id/edit">
					<Edit />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/invalid">
					<Invalid />
				</Route>
				<Private exact path="/profile">
					<Profile />
				</Private>
				<Route exact path="/register">
					<Register />
				</Route>
			</Switch>
		</BrowserRouter>
	)
};

interface AppProps { }

export default App;

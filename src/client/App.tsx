import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Edit from './views/Edit';
import Home from './views/Home';
import Orders from './views/Orders';

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
			</Switch>
		</BrowserRouter>
	)
};

interface AppProps { }

export default App;

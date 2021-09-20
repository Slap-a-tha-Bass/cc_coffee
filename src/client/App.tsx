import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Orders from './views/Orders';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/orders">
					<Orders />
				</Route>
			</Switch>
		</BrowserRouter>
	)
};

interface AppProps { }

export default App;

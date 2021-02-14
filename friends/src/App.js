import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsPage from './components/FriendsPage';
import AddFriend from './components/AddFriend';

function App() {
	return (
		<div className="App">
			<NavLink to="/friends">Friends</NavLink> <br/>		
			<Route path="/" exact component={LoginPage}/>
			<ProtectedRoute path="/friends" component={FriendsPage} exact />
			<ProtectedRoute path="/friends/add" component={AddFriend} exact />
			<NavLink to="/friends/add">Add Friend</NavLink>
		</div>
	);
}

export default App;

import React, { Component } from 'react';
import '../App.css';
import Popular from './Popular.js';

class App extends Component {
	render() {
		return (
			<div className="container  center">
				<div className="header">
					<h1 className="title">Erica Miller</h1>
				</div>

				<Popular />
			</div>
		);
	}
}

export default App;
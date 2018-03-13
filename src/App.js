import React, { Component } from 'react';
import './App.css';
import Chart from './components/Charts';

class App extends Component {
	constructor(){
		super();
		this.state = {
			chartData: {}
		};
	}
	componentWillMount(){
		this.getChartData();
	}
	getChartData(){
		// Ajax calls here
		this.setState({
			chartData:{
				labels: ['Deadlift','Squat','Bench','Clean','Jerk','Snatch'],
				datasets:[
					{
						label:'Weights',
						data:[
							505,
							365,
							265,
							245,
							235,
							185
						],
						backgroundColor:[
							'rgba(29,14,70,0.7)',
							'rgba(103,2,112,0.7)',
							'rgba(176,0,84,0.7)',
							'rgba(226,0,12,0.7)',
							'rgba(255,90,0,0.7)',
							'rgba(255,205,77,0.7)'
						]   

					}
				]
			}
		});
	}

	render() {
		return (
			<div className="App">
				<Chart chartData={this.state.chartData}/>
			</div>
		);
	}
}

export default App;

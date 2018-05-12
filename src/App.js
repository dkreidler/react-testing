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
						label:'December',
						data:[
							455,
							315,
							225,
							215,
							195,
							165
						],
						backgroundColor:[
							'rgba(29,14,70,0.7)',
						]   

					},
					{
						label:'January',
						data:[
							515,
							375,
							275,
							255,
							245,
							225
						],
						backgroundColor:[
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

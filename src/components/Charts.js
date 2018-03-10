import React, {Component} from 'react';
import {Polar} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        };
    }

    static defaultProps =  {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'top'

		};
	


    render() {
        return (
            <div className="chart">
                <Polar
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: true,
                        title:{
                            display:this.props.displayTitle,
                            text:'Strong AF',
                            fontSize:25,
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
            </div>    
        )
    }

}

export default Chart;
import React, {Component} from 'react';
import {Radar} from 'react-chartjs-2';
<script src="C:\Batcave\react-testing\node_modules\chartjs-heatmap-master"></script>


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
                <Radar
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
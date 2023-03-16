import React from "react";
import { Line } from 'react-chartjs-2';



function Chart({chartdata}){
 

    return<Line data={chartdata} options={{
                                        chart: {
                                        id: 'realtime',
                                        height: 350,
                                        type: 'line',
                                        animations: {
                                        enabled: true,
                                        easing: 'linear',
                                        dynamicAnimation: {
                                            speed: 1000
                                        }
                                        },}}}/>;




    
}
export default Chart;
import React from 'react';
import { VictoryBar, VictoryChart, VictoryScatter} from 'victory';
import "./css/StatisticsDataGraphs.css";


const data = [
    {quarter: 1, earnings: 1},
    {quarter: 2, earnings: 1},
    {quarter: 3, earnings: 40},
    {quarter: 4, earnings: 9}
  ];
  
  const Main = () => {
      return (
          <div>
             
        <VictoryChart horizontal
        domainPadding={{ x: 10 }}
      >
        <VictoryBar
          style={{
            data: { fill: "#c43a31" }
          }}
          data={data.quarter}
        />
        <VictoryScatter
          data={data.earnings}
        />
      </VictoryChart>
      </div>
      )
  }
  

export default Main;
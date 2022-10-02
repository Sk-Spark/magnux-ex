import React from 'react';
import logo from './logo.svg';
import { Line, Bar } from 'react-chartjs-2';
import { dischargeCycles } from './data/data';
import { getDischargeData, getDischargeCycle } from './helper';
import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {

  getDischargeData(dischargeCycles);
  let key=1;
  const disCycle = getDischargeCycle(dischargeCycles);
  const chartData = {
    labels : disCycle.map(dc=> dc[0] ),
    datasets:[
      {
        label:'km',
        data: disCycle.map(dc=> dc[1]),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  };

  console.log('chartData:', chartData);
  return (
    <div className="App">     
      <Bar 
        data={chartData}
      />
    </div>
  );
}

export default App;

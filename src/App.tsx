import React, { useState, useEffect } from 'react';
import ClassBased from './DriverStandings/ClassBased';
import WithoutHooks from './DriverStandings/WithoutHooks';
import WithHooks from './DriverStandings/WithHooks';


function App() {
  const [data, setData] = useState([
    {name: 'Lewis Hamilton', points: 100, firstName: 'Lewis', lastName: 'Hamilton', age: 38, country: 'United Kingdom'},
    {name: 'Max Verstappen', points: 120, firstName: 'Max', lastName: 'Verstappen', age: 26, country: 'Netherlands'},
    {name: 'Charles Leclerc', points: 80, firstName: 'Charles', lastName: 'Leclerc', age: 25, country: 'Monaco'},
    {name: 'Sergio Perez', points: 90, firstName: 'Sergio', lastName: 'Perez', age: 33, country: 'Mexico'},
  ])

  useEffect(()=> {
    setInterval(() => {
      setData([...data])
    },1000)
  },[])

  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassBased data={data}/> */}
        <WithHooks data={data}/>
        {/* <WithoutHooks data={data}/> */}
      </header>
    </div>
  );
}

export default App;

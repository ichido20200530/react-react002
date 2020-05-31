import React from 'react';
import './App.css';
import Display from './Components/Display'

function App() {
  function createData(itemA, itemB, itemC) {
    return { itemA, itemB, itemC };
  }
  const data = [
    createData(10, 20, 30),
    createData(40, 50, 60)
  ];
  console.log('data = ', data);
  // const data = [{ itemA: 10 }, { itemB: 20 }, { itemC: 30 }];
  return (
    <div>
      <Display data={data} />
    </div>
  );
}

export default App;

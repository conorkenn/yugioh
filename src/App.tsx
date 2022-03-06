import React from 'react';
import './App.css';
import YugiohCard from './components/YugiohCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <YugiohCard name='Blue Eyes Ultimate Dragon' img='https://ms.yugipedia.com//8/87/BlueEyesUltimateDragon-LDS2-EN-UR-1E.png' atk='4500' def='3800'/>
      </header>
    </div>
  );
}

export default App;

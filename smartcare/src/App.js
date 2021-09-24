import './App.css';
import Profile from './Profile'
import Sensor from './Sensor'
import Alarm from './Alarm';
import TH from './TH'
import { useState } from 'react';

function App() {
  const [times, setTimes] = useState('')
  return (
    <div className="App">
      <header className='header'><h2>Smart care</h2></header>
      <main>
        <article className='widget'>
          <Profile />
        </article>
        <article className='widget'>
          <Sensor times={times} setTimes={setTimes} />
        </article>
        <article className='widget' >
          <Alarm times={times} setTimes={setTimes} />
        </article>
        <article className='widget'>
          <TH title='Living room' />
        </article>
        <article className='widget'>
          <TH title='Room' />
        </article>
        <article className='widget'>

        </article>
      </main>
    </div>
  );
}

export default App;

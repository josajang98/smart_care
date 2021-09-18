import './App.css';
import Profile from './Profile'
import Sensor from './Sensor'
import Alarm from './Alarm';
import TH from './TH'

function App() {
  return (
    <div className="App">
      <header className='header'><h2>Smart care</h2></header>
      <main>
        <article className='widget'>
          <Profile />
        </article>
        <article className='widget'>
          <Sensor />
        </article>
        <article className='widget'>
          <Alarm />
        </article>
        <article className='widget'>
          <TH title='Living room' />
        </article>
        <article className='widget'>
          <TH title='Room' />
        </article>
      </main>
    </div>
  );
}

export default App;

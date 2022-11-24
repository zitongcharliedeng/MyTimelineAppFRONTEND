import './App.css';
import BasicSpeedDial from './components/BasicSpeedDial';
import ColorsTimeline from './components/Timeline/ColorsTimeline';
import PersistentDrawerRight from './components/Timeline/PersistentDrawerRight';

function App() {
  return (
    <div className="App">
      <PersistentDrawerRight />
      < BasicSpeedDial />
      < ColorsTimeline />
    </div>
  );
}

export default App;

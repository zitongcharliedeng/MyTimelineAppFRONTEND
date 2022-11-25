import './App.css';
import ColorsTimeline from './components/Timeline/ColorsTimeline';
import PersistentDrawerRight from './components/Timeline/PersistentDrawerRight';

function App() {
  return (
    <div className="App">
      <PersistentDrawerRight />
      < ColorsTimeline />
    </div>
  );
}

export default App;

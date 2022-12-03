import * as React from 'react';
import './App.css';
import EventTimeline from './AppComponents/EventTimeline';
import Header from './AppComponents/Header';
import SignUpPage from './AppComponents/SignUpPage';

function App() {
  const [sessionId, setSessionId] = React.useState(undefined);
  const [view, setView] = React.useState('signUp');

  const page = () => {
    if (view === 'signUp') {
      return(
        <SignUpPage />
      )
    } else {
      return( 
        <div className="signedIn">
          <Header sessionId={sessionId} setSessionId={setSessionId} setView={setView}/>
          < EventTimeline sessionId={sessionId} setSessionId={setSessionId}/>
        </div>
      )
    }
  }
  
  return (
    <div className="signedIn">
      <Header sessionId={sessionId} setSessionId={setSessionId} setView={setView}/>
      {page()}
    </div>
    
  );
}

export default App;

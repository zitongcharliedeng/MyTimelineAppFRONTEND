import * as React from 'react';
import './App.css';
import ContactUsPage from './AppComponents/ContactUsPage';
import EventTimeline from './AppComponents/EventTimeline';
import Header from './AppComponents/Header';
import SignUpPage from './AppComponents/SignUpPage';

function App() {
  const [currentUser, setCurrentUser] = React.useState({id: '', username: '', sessionToken: ''});
  const [view, setView] = React.useState('signUp');

  const page = () => {
    if (view === 'signUp') {
      return(
        <SignUpPage />
      )
    } if (view === 'timeline') {
      return(
        < EventTimeline currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )
    } if (view === 'contactUs') {
      return(
        < ContactUsPage />
      )
    }
  }
  
  
  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} setView={setView}/>
      {page()}
    </div>
    
  );
}

export default App;

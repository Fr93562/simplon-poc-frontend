import React from 'react';
import './App.css';

import { Contenair } from './components/messages/Contenair';
import { SentMessage } from './components/forms/SentMessage';

// tests à retirer par la suite
// <img src={logo} className="App-logo" alt="logo" />
import { getFixtures, getUser } from './tools/tests/Fixture';

function App() {

  console.log(SentMessage);
  return (
    <div className="App">

      <header className="App-header">

        <h1>Bonjour, {getUser().username}</h1>
        <div>
          <i id="App-logo" className="fas fa-spinner fa-3x"></i>
        </div>

      </header>
      <section className="App-body">

        <Contenair messageData={getFixtures()} userData={getUser()}/>
        <SentMessage/>

      </section>
      <footer className="App-footer">

        <p>Francois Macko </p>
        <div>
          <i className="fas fa-copyright fa-1x"></i>
        </div>
        <a className="App-link" href=" https://github.com/Fr93562/simplon-poc-frontend" target="_blank">projet git</a>

      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Switch,Route} from 'react-router';

import Login from './Components/Login';

function App(){
  return(
    <div className="App">
      <Login />
    </div>
  );
}


ReactDOM.render(<App />,document.getElementById('root'));
reportWebVitals(console.log);

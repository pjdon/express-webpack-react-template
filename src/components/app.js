import React from 'react';

import {TEST_MSG} from '@appconfig';

import './app.css';
import ReactLogo from '../../img/react.svg';


export default function App() {
  return <div className="App">
    <div>
      <img src={ReactLogo} alt="React Logo"/>   
    </div> 
    <h1>Test Message: {TEST_MSG}</h1>
  </div>;
}
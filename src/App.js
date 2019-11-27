import React from 'react';
import ReactDOM from 'react-dom';
import logo from './img/logo.png';
import './style.css';
import HelloPage from './hello-page/hello-page.js';
import Credits from './credits/credits';
import Cards from './cards/cards';
import Contributions from './contributions/contributions';
import Sales from './sales/sales';

function App() {
  let container = <HelloPage />;
    function displayHelloPage(){
        container = <HelloPage />;
        innerHtml();
    }
    function displayCredits(){
        container = <Credits />;
        innerHtml();
    }
    function displayCards(){
        container = <Cards />;
        innerHtml();
    }
    function displayContributions(){
        container = <Contributions />;
        innerHtml();
    }
    function displaySales(){
        container = <Sales />;
        innerHtml();
    }
    function innerHtml(){
        ReactDOM.render(container, document.getElementById('content'));
    }
  return (
    <div className="body">
      <div className="header">
          <div className="logo">
          <a onClick={displayHelloPage}><img src={logo} className="App-logo" alt="logo" /></a>
          </div>
      </div>
      <div className="main-menu">
          <button onClick={displayCredits}>Кредиты</button>
          <button onClick={displayCards}>Карты</button>
          <button onClick={displayContributions}>Вклады</button>
          <button onClick={displaySales}>Продажи</button>
      </div>
      <div id="content" className="content">{container}</div>
    </div>
  );
}

export default App;

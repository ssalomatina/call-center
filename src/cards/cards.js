import React from 'react';
import ReactDOM from 'react-dom';
import './cards.css';
import CardsDocuments from './documents/documents';
import CardsInformation from './information/information';
import CardsRegistrationAndReceipt from './registration-and-receipt/registration-and-receipt';

function Cards() {
    let container = <CardsDocuments />;
    function displayCardsDocuments(){
        container = <CardsDocuments />;
        innerHtml();
    }
    function displayCardsInformation(){
        container = <CardsInformation />;
        innerHtml();
    }
    function displayCardsRegistrationAndReceipt(){
        container = <CardsRegistrationAndReceipt />;
        innerHtml();
    }
    function innerHtml(){
        ReactDOM.render(container, document.getElementById('сards-content'));
    }
    return(
        <div className="сards">
            <h3>Консультации по картам</h3>
            <div className="content-menu">
            <button autoFocus={true} onClick={displayCardsDocuments}>Документы</button>
            <button onClick={displayCardsInformation}>Информация</button>
            <button onClick={displayCardsRegistrationAndReceipt}>Оформление и получение карты</button>
            </div>
            <div id="сards-content" className="сards-content">{container}</div>
        </div>
    );
}

export default Cards;
import React from 'react';
import ReactDOM from 'react-dom';
import './credits.css';
import CreditDocuments from './documents/documents';
import CreditInformation from './information/information';


function Credits() {
    let container = <CreditDocuments />;
    function displayCreditDocuments(){
        container = <CreditDocuments />;
        innerHtmlCredit();
    }
    function displayCreditInformation(){
        container = <CreditInformation />;
        innerHtmlCredit();
    }
    function innerHtmlCredit(){
        ReactDOM.render(container, document.getElementById('credits-content'));
    }
    return(
        <div className="credits">
            <h3>Консультации по кредитам</h3>
            <div className="content-menu">
            <button autoFocus={true} onClick={displayCreditDocuments}>Документы</button>
            <button onClick={displayCreditInformation}>Информация</button>
            </div>
            <div id="credits-content" className="credits-content">{container}</div>
        </div>
    );
}

export default Credits;
import React from 'react';
import ReactDOM from 'react-dom';
import './sales.css';
import SalesCards from './sales-cards/sales-cards';
import SalesCredits from './sales-credits/sales-credits';

function Sales() {
    let container = <SalesCredits />;
    function displaySalesCredits(){
        container = <SalesCredits />;
        innerHtml();
    }
    function displaySalesCards(){
        container = <SalesCards />;
        innerHtml();
    }
    function innerHtml(){
        ReactDOM.render(container, document.getElementById('sales-content'));
    }
    return(
        <div className="sales">
            <h3>Продажи</h3>
            <div className="content-menu">
            <button autoFocus={true} onClick={displaySalesCredits}>Продажи кредитов</button>
            <button onClick={displaySalesCards}>Продажи карт</button>
            </div>
            <div id="sales-content" className="sales-content">{container}</div>
        </div>
    );
}

export default Sales;
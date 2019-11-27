import React from 'react';
import ReactDOM from 'react-dom';
import './news-and-communications.css';
import NewsCards from './cards/cards'
import NewsCredits from './credits/credits';
import NewsContributions from './contributions/contributions';
import NewsSales from './sales/sales';

function NewsAndCommunications() {
    let container = <NewsCredits />;
    function displayNewsCredits(){
        container = <NewsCredits />;
        innerHtml();
    }
    function displayNewsCards(){
        container = <NewsCards />;
        innerHtml();
    }
    function displayNewsContributions(){
        container = <NewsContributions />;
        innerHtml();
    }
    function displayNewsSales(){
        container = <NewsSales />;
        innerHtml();
    }
    function innerHtml(){
        ReactDOM.render(container, document.getElementById('news-and-communications-content'));
    }
    return(
        <div className="news-and-communications block">
            <h3>Новости и коммуникации</h3>
            <div className="news-and-communications-menu">
            <button autoFocus={true} onClick={displayNewsCredits}>Кредиты</button>
            <button onClick={displayNewsCards}>Карты</button>
            <button onClick={displayNewsContributions}>Вклады</button>
            <button onClick={displayNewsSales}>Продажи</button>
            </div>
            <div id="news-and-communications-content" className="news-and-communications-content">{container}</div>
        </div>
    );
}

export default NewsAndCommunications;
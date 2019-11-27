import React from 'react';
import './hello-page.css';
import NewsAndCommunications from './news-and-communications/news-and-communications';
import ImportantInfo from './important-info/important-info';
import Nesussary from './nesussary/nesussary';

function HelloPage() {
    return(
        <div id="hello-page" className="hello-page">
            <NewsAndCommunications />
            <ImportantInfo />
            <Nesussary />
        </div>
    );
}

export default HelloPage;

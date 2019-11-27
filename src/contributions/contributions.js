import React from 'react';
import ReactDOM from 'react-dom';
import './contributions.css';
import ContributionsInformation from './information/information';
import ContributionsRegistrationOfDocuments from './registration-of-documents/registration-of-documents';

function Contributions() {
    let container = <ContributionsInformation />;
    function displayContributionsInformation(){
        container = <ContributionsInformation />;
        innerHtml();
    }
    function displayContributionsRegistrationOfDocuments(){
        container = <ContributionsRegistrationOfDocuments />;
        innerHtml();
    }
    function innerHtml(){
        ReactDOM.render(container, document.getElementById('contributions-content'));
    }
    return(
        <div className="contributions">
            <h3>Консультации по вкладам</h3>
            <div className="content-menu">
            <button autoFocus={true} onClick={displayContributionsInformation}>Документы</button>
            <button onClick={displayContributionsRegistrationOfDocuments}>Оформление документов по вкладу</button>
            </div>
            <div id="contributions-content" className="contributions-content">{container}</div>
        </div>
    );
}

export default Contributions;
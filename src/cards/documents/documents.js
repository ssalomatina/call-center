import React from 'react';
import '../../style.css';
import '../../accordeon.css';

function CardsDocuments() {
    return(
    <div className="card-documents">
        <div className="accordion">
            <ul>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Выписка, отчет по карте</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Справка</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default CardsDocuments;
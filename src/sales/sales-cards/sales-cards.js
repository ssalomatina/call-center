import React from 'react';
import '../../style.css';
import '../../accordeon.css';

function SalesCards() {
    return(
    <div className="sales-cards">
        <div className="accordion">
            <ul>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Отказ клиента</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Техническая проблема</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Успешная продажа</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Недозвон</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default SalesCards;
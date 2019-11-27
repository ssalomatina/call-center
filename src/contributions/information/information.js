import React from 'react';
import '../../style.css';
import '../../accordeon.css';

function ContributionsInformation() {
    return(
    <div className="contributions-documents">
        <div className="accordion">
            <ul>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Сумма, срок вклада</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Реквизиты для пополнения</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Условия вклада</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Поступление платежа</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Закрытие вклада</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default ContributionsInformation;
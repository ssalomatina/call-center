import React from 'react';
import '../credits.css';
import '../../style.css';
import '../../accordeon.css';

function CreditInformation() {
    return(
    <div className="credit-information">
        <div className="accordion">
            <ul>
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
                    <h2 className="title_block">Информация о переплате</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Реквизиты платежа</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Досрочное погашение</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Закрытие кредита</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default CreditInformation;
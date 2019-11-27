import React from 'react';
import '../../style.css';
import '../../accordeon.css';

function ContributionsRegistrationOfDocuments() {
    return(
    <div className="contributions-registration-of-documents">
        <div className="accordion">
            <ul>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Стандартная справка, выписка</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Нестандартная справка</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Доверенность, завещание</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" />
                    <i></i>
                    <h2 className="title_block">Закрытие текущего счета</h2>
                    <div className="msg">
                    <p>123</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default ContributionsRegistrationOfDocuments;
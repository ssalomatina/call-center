import React from 'react';
import './nesussary.css';
import Site from '../../img/site.png';
import Key from '../../img/key.png';
import Experts from '../../img/experts.png';
import AdditionalFunction from '../../img/additional function.png';

function Nesussary() {

    return(
        <div className="necessary block">
            <h3 className="necessary-title">Нужное</h3>
            <div className="necessary-content">
                <a className="necessary-link">
                    <img className="necessary-img" src={Site} />
                    <p className="necessary-description">Сайт банка</p>
                </a>
                <a className="necessary-link">
                    <img className="necessary-img" src={Experts} />
                    <p className="necessary-description">Эксперты</p>
                </a>
                <a className="necessary-link">
                    <img className="necessary-img" src={Key} />
                    <p className="necessary-description">Ключевые</p>
                </a>
                <a className="necessary-link">
                    <img className="necessary-img" src={AdditionalFunction} />
                    <p className="necessary-description">Доп. функции</p>
                </a>
            </div>
        </div>
    );
}

export default Nesussary;
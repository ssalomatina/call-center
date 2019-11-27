import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './important-info.css';
import SimpleSlider from './slider/slider';
import photo1 from '../../img/photo1.jpg';
import photo2 from '../../img/photo2.jpg';
import photo3 from '../../img/photo3.jpg';

function ImportantInfo() {
    
    return(
        <div className="important-info block">
            <div className="block">
                <h3>Важная информация</h3>
                <div className="important-info-content"><SimpleSlider /></div>
            </div>
            <div className="block">
            <h3>Лучшие сотрудники</h3>
                <div className="best-content"><img src={photo1} width="500" height="300"/></div>
            </div>
        </div>
    );
}

export default ImportantInfo;
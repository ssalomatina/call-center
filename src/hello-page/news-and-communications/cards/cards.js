import React from 'react';
import '../news-and-communications.css';
import star from '../../../img/star.png';

function NewsCards() {
    return(
    <div className="news-credits">
        <div className="new">
            <div className="date"><img src={star} />10.11.2011</div>
            <div className="title">Карты</div>
            <div className="text">Текст (от лат. textus — ткань; сплетение, сочетание) — 
            зафиксированная на каком-либо материальном носителе человеческая мысль; 
            в общем плане связная и полная последовательность символов. </div><br />
            <div className="link-instruction">Более подробная информация размещена в <a href="#">инструкции</a></div>
        </div>
        <div className="new">
            <div className="date"><img src={star} />09.11.2011</div>
            <div className="title">Карты</div>
            <div className="text">Текст (от лат. textus — ткань; сплетение, сочетание) — 
            зафиксированная на каком-либо материальном носителе человеческая мысль; 
            в общем плане связная и полная последовательность символов.</div><br />
            <div className="link-instruction">Более подробная информация размещена в <a href="#">инструкции</a></div>
        </div>
        <div className="new">
            <div className="date"><img src={star} />08.11.2011</div>
            <div className="title">Карты</div>
            <div className="text">Текст (от лат. textus — ткань; сплетение, сочетание) — 
            зафиксированная на каком-либо материальном носителе человеческая мысль; 
            в общем плане связная и полная последовательность символов.</div><br />
            <div className="link-instruction">Более подробная информация размещена в <a href="#">инструкции</a></div>
        </div>
    </div>
    );
}
export default NewsCards;
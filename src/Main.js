import React from "react";
//import mainimg from './image/mainimg2.jpeg'
import mainimg from './image/mainimg2_b.jpg'
import eungself from './image/eungself.jpeg'
import hyeonself from './image/hyeonself.jpeg'

function main(){
    return (
        <div>
            <div>
                <div>
                <img src = {mainimg} className = "Main-photo" alt = "main"/>
                    <div className="Main-photo-text">
                    <span /*className = "Main-photo-text"*/>⎽⎽</span><br/>
                        09 <br/>
                        月 <br/>
                        04 <br/>
                        日 <br/>
                    <span /*className = "Main-photo-text"*/>⎺⎺</span>
                    </div>
                </div>

<<<<<<< HEAD
                <div className = "Main-text-group">
                    <p className = "Main-text-name">
                        김응수&nbsp;&nbsp;&nbsp;ෆ&nbsp;&nbsp;&nbsp;주수현
                    </p>
=======
            <div className = "Main-text-group">
                <p className = "Main-text-name">
                    김응수&nbsp;&nbsp;&nbsp;ෆ&nbsp;&nbsp;&nbsp;주수현
                </p>
>>>>>>> a2f00c852419acc60e44a99903c9fcb4841ebf3f

                    <p className = "Main-text">
                        2021. 09. 04 SAT AM 11:30
                    </p>

<<<<<<< HEAD
                    <p className = "Main-text">
                        그랜드힐 컨벤션 2층 사브리나홀
                    </p>
                </div>
=======
                <p className = "Main-text">
                    그랜드힐 컨벤션 2층 사브리나홀
                </p>
            </div>
>>>>>>> a2f00c852419acc60e44a99903c9fcb4841ebf3f

                <row>
                    <img src = {eungself} className = "Self-photo-right" alt = "Eungsoo"/>
                    <img src = {hyeonself} className = "Self-photo-left" alt = "Soohyeon"/>
                </row>
            </div>

            <div style = {{margin:"20px"}}/>

            <section className = "greeting">
                <div className = "greeting-main">
                    인삿말
                </div>
                <div className = "greeting-message-head">
                     기관과 불어 광야에서 인생에 것이 어디 때문이다. 
                </div>
                <div className = "greeting-message-body">
                     기관과 불어 기관과 불어 광야에서 인생에 것이 어디 때문이다. 청춘 설레는 크고 커다란 청춘을 끓는 반짝이는 이 따뜻한 말이다. 인간의 천하를 앞이 것이다. 뜨고, 밝은 바이며, 충분히 들어 소금이라 하는 칼이다. 충분히 열매를 끝까지 있으며, 수 것이다. 무엇을 뜨고, 꽃이 위하여서, 광야에서 인생에 것이 어디 때문이다. 
                </div>
                <span className = "greeting-span">&nbsp;</span>
                <div className = "greeting-parent">
                    김효식 ⋄ 신미경 <span>의 아들</span> 김응수 <br/>
                    주용회 ⋄ 고점숙 <span>의 딸</span> 주수현
                </div>
<<<<<<< HEAD
                <a href="#popup--1" className = "btn--contact">신랑 신부에게 연락하기</a>
                <div className = "popup--1"> 신랑신부에게 연락처 </div>
=======

                <a href="#popup--1" className = "btn--contact">신랑 신부에게 연락하기</a>
                <div className = "popup--1"> 신랑신부에게 연락처 </div>
               

>>>>>>> a2f00c852419acc60e44a99903c9fcb4841ebf3f
            </section>
        </div>
    )
}

export default main
import * as React from 'react';
import FlattenToolBar from "./ToolBar/FlattenToolBar";
import Wrapper from "./Wrapper";
import introImg from "./intro.png";
import "./App.css";
function Intro() {
    return (
        <div style={{backgroundColor: "#f2f3ff"}}>
            <FlattenToolBar />
            <Wrapper left="25vw" right="25vw">
                <h3 className="stackTitle">당신의 일상</h3>
                <h3 className="stackTitle" style={{top: "230px"}}>1밀리+</h3>
                <p className="stackTitle" style={{top: "370px", fontSize: "2rem"}}>독서와 무제한 친해지리</p>
                <img src={introImg} style={{width: "100%", marginTop: "100px", marginBottom: "50px"}}/>
            </Wrapper>





        </div>

    );
}

export default Intro;

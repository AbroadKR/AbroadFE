import React from "react";
import {HashRouter} from "react-router-dom";
import styled from "styled-components";
import Top from "./Section/Top";
import Middle from "./Section/Middle";
import Bottom from "./Section/Bottom";

const Wrapper = styled.div`
    width : 75vw;
    height : 100%;
    min-height : 100vh;
    margin : 0 auto;
`

function Main(){
    return (
        <HashRouter>
            <Wrapper>
                <Top/>
                <Middle/>
                <Bottome/>
            </Wrapper>
        </HashRouter>
        
    )
}

export default Main;


import { styled } from "styled-components";

export const BodyContent = styled.div`
width: 100vw;
height: 100vh;
margin: 0;
display: grid;
grid-template-rows: 50px 200px auto 50px 0px;
grid-template-areas:
    'header'
    'buttonContainer'
    'logContainer'
    'footer'
    'modalContainer';
`
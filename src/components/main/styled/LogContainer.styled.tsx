import { styled } from "styled-components";

const Grid = styled.div`
grid-area: logContainer;
`

const LogContainer = styled(Grid)`
display: flex;
flex-direction: column;
background-color: rgb(22, 20, 20);
overflow-y: auto;
padding: 20px;
`

const LogWhite = styled.p`
color: #ffffff;
margin: 0 0 2px 0;
white-space: pre-wrap;
`

const LogBlue = styled.p`
color: rgb(87, 87, 255);
margin: 0 0 2px 0;
`

const LogRed = styled.p`
color: red;
margin: 0 0 2px 0;
`

const LogYellow = styled.p`
color: yellow;
margin: 0 0 2px 0;
`

export { LogContainer, LogWhite, LogBlue, LogRed, LogYellow };
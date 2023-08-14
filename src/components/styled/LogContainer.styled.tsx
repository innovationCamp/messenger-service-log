import { styled } from "styled-components";

const Grid = styled.div`
grid-area: logContainer;
`

export const LogContainer = styled(Grid)`
display: flex;
flex-direction: column;
background-color: rgb(22, 20, 20);
overflow-y: auto;
padding: 20px;
`
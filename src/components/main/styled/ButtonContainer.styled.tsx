import { styled } from "styled-components";

const Grid = styled.div`
grid-area: buttonContainer;
`

const ButtonContainer = styled(Grid)`
display: flex;
flex-direction: column;
padding: 20px;
overflow: auto;
`

const FlexBox = styled.div`
display: flex;
margin: auto;
`

export { ButtonContainer, FlexBox };
import { styled } from "styled-components";

const Grid = styled.div`
grid-area: buttonContainer;
`

const ButtonContainer = styled(Grid)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow-y: auto;
`

const FlexBox = styled.div`
display: flex;
margin: auto;
justify-content: center;
`

export { ButtonContainer, FlexBox };
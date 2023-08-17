import { styled } from "styled-components";

const Grid = styled.header`
grid-area: header;
`

export const Header = styled(Grid)`
font-size: 1.5rem;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
color: white;
`
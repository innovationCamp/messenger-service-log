import { styled } from "styled-components";

export const CloseWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const Wrapper = styled.div<{ x: string, y: string }>`
width: 80px;
background-color: rgb(58, 58, 58);
border-radius: 10px;
box-shadow: 0 12px 35px rgba(0, 189, 25, 0.2);
position: absolute;
left: ${props => props.x}px;
top: ${props => props.y}px;
`

export const Menu = styled.ul`
padding: 1px 2px;
margin: 0;
`

export const Item = styled.li`
list-style: none;
font-size: 22px;
height: 35px;
width: 100%;
display: flex;
cursor: pointer;
align-items: center;
margin-bottom: 2px;
border-bottom: solid;
border-radius: 5px;
border-width: 1px;
border-color: rgba(255, 255, 255, 0.5);
&:hover{
background-color: rgb(58, 58, 58);
}
`

export const Span = styled.span`
font-size: medium;
margin-left: 8px;
color: #e2e2e2;
`
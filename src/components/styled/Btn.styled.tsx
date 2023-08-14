import { styled } from "styled-components";

const btn = styled.a`
display: block;
position: relative;
float: left;
width: 120px;
padding: 0;
margin: 10px 20px 10px 0;
font-weight: 600;
text-align: center;
line-height: 50px;
color: #FFF;
border-radius: 5px;
transition: all 0.2s ;
`
const btnPush = styled(btn)`
&:hover {
    margin-top: 15px;
    margin-bottom: 5px;
}
`

const btnPushBlueGreen = styled(btnPush)`
background: #00AE68;
`

const btnPushBG = styled(btnPushBlueGreen)`
box-shadow: 0px 5px 0px 0px #007144;
&:hover {
    box-shadow: 0px 0px 0px 0px #007144;
}
`

export { btnPushBG };
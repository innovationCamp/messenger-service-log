import { styled } from "styled-components";

export const BodyContent = styled.div`
background-color: rgb(22, 20, 20);
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`

export const Container = styled.div`
border: 2px solid #e0e0e0;
border-radius: 10px;
width: 80%;
height: 90%;
display: flex;
overflow: hidden;
`

export const Chat = styled.div`
flex: 1;
`

export const ChatInfo = styled.div`
/* height: 20px; */
background-color: #007144;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
`

export const ChatTitle = styled.div`
color: #ffffff;
font-weight: 600;
`

export const ChatDesc = styled.div`
color: #c4c4c4;
`

export const Messages = styled.div`
background-color: rgb(31, 28, 28);
padding: 10px;
height: calc(100% - 120px);
overflow-y: scroll;
`

export const Message = styled.div`
display: flex;
gap: 20px;
margin-bottom: 10px;
`

export const MessageInfo = styled.div`
display: flex;
flex-direction: column;
color: gray;
font-weight: 300;
`

export const MessageInfoImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
`

export const MessageContent = styled.div`
max-width: 80%;
display: flex;
flex-direction: column;
gap: 10px;
`

export const MsgContentP = styled.p`
background-color: white;
padding: 10px 20px;
border-radius: 0px 10px 10px 10px;
max-width: max-content;
`

export const MsgOwner = styled(Message)`
flex-direction: row-reverse;
`

export const MsgOwnerContent = styled(MessageContent)`
align-items: flex-end;
`

export const MsgOwnerContentP = styled(MsgContentP)`
background-color: #00a854;
color: white;
border-radius: 10px 0px 10px 10px;
`

export const InputDiv = styled.div`
height: 40px;
background-color: #535353;
padding: 10px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Input = styled.input`
width: 100%;
border: none;
outline: none;
background-color: #535353;
color: #ffffff;
font-size: 18px;
&::placeholder {
color: lightgray;
}
`

export const Send = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const SendBtn = styled.button`
border: none;
border-radius: 5px;
padding: 10px 15px;
color: white;
background-color: #00a078;
cursor: pointer;
`
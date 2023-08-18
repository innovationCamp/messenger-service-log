import styled from 'styled-components';

const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
`

const ModalContent = styled.div`
background: white;
padding: 20px;
border-radius: 8px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`

const ModalInput = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`

const ModalSubmit = styled.input`
width: 100%;
background-color: #4CAF50;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;
&:hover {
    background-color: #45a049;
}
`

const ModalSelect = styled.select`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`

export { Modal, ModalContent, ModalInput, ModalSubmit, ModalSelect };
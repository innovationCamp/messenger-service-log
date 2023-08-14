import React, { createContext, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { signUpModalState } from "../atom/ModalShow";
import * as S from "@/components/styled/Modal.styled";

const signUpModalShow = createContext(false);

const SignUpModal = () => {
    const [showModal, setshowModal] = useRecoilState(signUpModalState);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(showModal);
    }, [])

    const handleSubmitClick = () => {
        // Implement your registration logic here
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);
        // You can send this data to a server for registration

        // Close the modal after submitting
        // setshowModalModal(false);
    };

    const handleOverlayClick = () => {
        setshowModal(false);
    };

    return (
        <>
            {
                showModal &&
                <S.Modal onClick={handleOverlayClick}>
                    <S.ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <h2>User Registration</h2>
                        <S.ModalInput
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                        <S.ModalInput
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        />
                        <S.ModalInput
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                        <S.ModalSubmit
                            type="submit"
                            value="Submit"
                            onClick={handleSubmitClick}
                        />
                    </S.ModalContent>
                </S.Modal>
            }
        </>
    )
}

export default SignUpModal;
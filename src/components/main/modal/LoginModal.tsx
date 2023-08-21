import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { logContentState, logType, logTypeConstant, modalState } from "@/components/atom/ModalShow"
import * as S from "@/components/main/styled/Modal.styled";
import { devInstance } from "@/api/axios";
import { ACCESS_HEADER, line, SET_ACCESS_HEADER } from "@/components/constant/constant";
import { getCookie, getUser, setCookie } from "@/components/util/CookieUtil";
import { modalProps } from "../interface";
import { jwtDecoded } from "@/components/chat/interface";
import { userState } from "@/components/atom/User";

interface loginDto {
    email: string,
    password: string,
}

const LoginModal = ({ eventName }: modalProps) => {
    const [modalShow, setModalShow] = useRecoilState(modalState);
    const [logContent, setLogContent] = useRecoilState(logContentState);
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const closeModal = () => {
        setModalShow((state) => {
            const newState = { ...state };
            newState.login = false;
            return newState;
        })
    }

    const handleSubmitClick = async () => {
        const logContentList: logType[] = [];
        logContentList.push({
            type: logTypeConstant.yellow,
            content: line,
        })
        logContentList.push({
            type: logTypeConstant.blue,
            content: `${eventName} 실행`,
        })

        const loginData: loginDto = {
            email: email,
            password: password
        }
        const formData = new FormData();
        Object.entries(loginData).map(([k, v]) => {
            formData.append(k, v);
        })
        logContentList.push({
            type: logTypeConstant.white,
            content: `${JSON.stringify(Object.fromEntries(formData))}`,
        })

        await devInstance.post("/user/login", formData)
            .then((res) => {
                closeModal();

                let token: string = res.headers[ACCESS_HEADER].replaceAll("%20", " ");
                setCookie(SET_ACCESS_HEADER, token);
                setUser(getUser());

                logContentList.push({
                    type: logTypeConstant.blue,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${JSON.stringify(res.data)}`,
                })
                setLogContent((v) => v.concat(logContentList));
            })
            .catch((e) => {
                closeModal();
                logContentList.push({
                    type: logTypeConstant.red,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${e.response.data.message}`,
                })
                setLogContent((v) => v.concat(logContentList));
            });
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    const handleOverlayClick = () => {
        closeModal();
    };

    return (
        <>
            {
                modalShow.login &&
                <S.Modal onClick={handleOverlayClick}>
                    <S.ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <h2>User Login</h2>
                        <S.ModalInput
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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

export default LoginModal;
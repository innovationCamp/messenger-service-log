import ChatInfo from "@/components/chat/ChatInfo";
import Messages from "@/components/chat/Messages";
import * as S from "@/components/chat/styled/Chat.styled";
import { SET_ACCESS_HEADER } from "@/components/constant/constant";
import { getCookie } from "@/components/util/CookieUtil";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { jwtDecoded } from "@/components/chat/interface";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "@/components/atom/User";

const Chat = () => {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);

    useEffect(() => {
        const token = getCookie(SET_ACCESS_HEADER);
        if (!token) return navigate("/forbidden");
        const payload: jwtDecoded = jwt_decode(getCookie(SET_ACCESS_HEADER));
        setUser(payload);
    }, [])

    return (
        <>
            {user.sub !== "0" &&
                <S.BodyContent>
                    <S.Container>
                        <S.Chat>
                            <ChatInfo />
                            <Messages />
                            <S.InputDiv>
                                <S.Input />
                                <S.Send>
                                    <S.SendBtn>Send</S.SendBtn>
                                </S.Send>
                            </S.InputDiv>
                        </S.Chat>
                    </S.Container>
                </S.BodyContent>
            }
        </>
    )
}

export default Chat;
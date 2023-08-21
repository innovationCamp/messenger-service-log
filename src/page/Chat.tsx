import ChatInfo from "@/components/chat/ChatInfo";
import Messages from "@/components/chat/Messages";
import * as S from "@/components/chat/styled/Chat.styled";
import { getUser } from "@/components/util/CookieUtil";
import { useEffect } from "react";
import { jwtDecoded, sendMsgDto } from "@/components/chat/interface";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "@/components/atom/User";

const Chat = () => {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);

    useEffect(() => {
        const user:jwtDecoded = getUser();
        if (user.sub === "0") return navigate("/forbidden");
        setUser(user);
    }, [])

    return (
        <>
            {user.sub !== "0" &&
                <S.BodyContent>
                    <S.Container>
                        <S.Chat>
                            <ChatInfo />
                            <Messages />
                        </S.Chat>
                    </S.Container>
                </S.BodyContent>
            }
        </>
    )
}

export default Chat;
import * as S from "@/components/chat/styled/Chat.styled";
import { useEffect, memo } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../atom/User";
import { jwtDecoded, responseMsgDto } from "./interface";

interface MessageProps {
    responseMsg: responseMsgDto;
}

const Messege = ({ responseMsg }: MessageProps) => {
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);

    useEffect(() => {
        console.log("재렌더 확인");
    }, [])

    const ownerCheck = (msg: responseMsgDto, user: jwtDecoded): boolean => {
        console.log("재실행 확인");
        if (msg.userId == user.sub && msg.userEmail === user.email && msg.userName === user.nickname) return true;
        return false;
    }

    return (
        <>
            {ownerCheck(responseMsg, user) ? <S.MsgOwner>
                <S.MessageInfo>
                    <S.MessageInfoImg src={`${process.env.STATIC_SOURCE}/people.PNG`} />
                    <S.MsgOwnerInfoP>
                        {responseMsg.userName}
                    </S.MsgOwnerInfoP>
                </S.MessageInfo>
                <S.MsgOwnerContent>
                    <S.MsgOwnerContentP>
                        {responseMsg.text}
                    </S.MsgOwnerContentP>
                </S.MsgOwnerContent>
            </S.MsgOwner>
                : <S.Message>
                    <S.MessageInfo>
                        <S.MessageInfoImg src={`${process.env.STATIC_SOURCE}/people.PNG`} />
                        <S.MessageInfoP>
                            {responseMsg.userName}
                        </S.MessageInfoP>
                    </S.MessageInfo>
                    <S.MessageContent>
                        <S.MsgContentP>
                            {responseMsg.text}
                        </S.MsgContentP>
                    </S.MessageContent>
                </S.Message>
            }
        </>
    )
}

export default memo(Messege);
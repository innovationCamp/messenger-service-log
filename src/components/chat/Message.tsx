import * as S from "@/components/chat/styled/Chat.styled";
import { useRecoilState } from "recoil";
import { userState } from "../atom/User";
import { jwtDecoded, Msg, responseMsgDto } from "./interface";

interface MessageProps {
    responseMsg: responseMsgDto;
}

const Messege = ({ responseMsg }: MessageProps) => {
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);

    const ownerCheck = (msg: responseMsgDto, user: jwtDecoded): boolean => {
        if (msg.userEmail === user.email && msg.userName === user.nickname) return true;
        return false;
    }

    return (
        <>
            {ownerCheck(responseMsg, user) ? <S.MsgOwner>
                <S.MessageInfo>
                    <S.MessageInfoImg src={"people.PNG"} />
                </S.MessageInfo>
                <S.MsgOwnerContent>
                    <S.MsgOwnerContentP>
                        {responseMsg.text}
                    </S.MsgOwnerContentP>
                </S.MsgOwnerContent>
            </S.MsgOwner>
                : <S.Message>
                    <S.MessageInfo>
                        <S.MessageInfoImg src={"people.PNG"} />
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

export default Messege;
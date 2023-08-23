import * as S from "@/components/chat/styled/Chat.styled";
import { useEffect, memo } from "react";
import { useRecoilState } from "recoil";
import { contextMenuLocate, contextMenuState, locate } from "../atom/ModalShow";
import { userState } from "../atom/User";
import { jwtDecoded, responseMsgDto } from "./interface";

interface MessageProps {
    responseMsgArr: responseMsgDto[];
}

const Messege = ({ responseMsgArr }: MessageProps) => {
    console.log("Message 재실행 확인");
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);
    const [menuShow, setMenuShow] = useRecoilState<boolean>(contextMenuState);
    const [menulocate, setMenuLocate] = useRecoilState<locate>(contextMenuLocate);

    useEffect(() => {
        console.log("Message 재렌더 확인");
    }, [])

    const ownerCheck = (msg: responseMsgDto, user: jwtDecoded): boolean => {
        if (msg.userId == user.sub && msg.userEmail === user.email && msg.userName === user.nickname) return true;
        return false;
    }

    const msgPClickHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {

    }

    const msgPContextHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {
        //drop down될 context menu 만들기
        e.preventDefault();
        // console.log(e.target);
        // console.log(e.currentTarget.id);
        const { clientX, clientY } = e;
        setMenuLocate({ x: clientX.toString(), y: clientY.toString() })
        setMenuShow(true);
    }

    return (
        <>
            {
                ownerCheck(responseMsgArr[0], user) ? <S.MsgOwner>
                    <S.MessageInfo>
                        <S.MessageInfoImg src={`${process.env.STATIC_SOURCE}/people.PNG`} />
                        <S.MsgOwnerInfoP>
                            {responseMsgArr[0].userName}
                        </S.MsgOwnerInfoP>
                    </S.MessageInfo>
                    <S.MsgOwnerContent>
                        {responseMsgArr.map((responesMsg, idx) => {
                            const createAt = new Date(responesMsg.createdAt);
                            return (
                                <S.ContentPTime key={idx}>
                                    <S.MessageTime>
                                        {`${createAt.getHours().toString().padStart(2, "0")}:${createAt.getMinutes().toString().padStart(2, "0")}`}
                                    </S.MessageTime>
                                    <S.MsgOwnerContentP
                                        onClick={msgPClickHandler}
                                        onContextMenu={msgPContextHandler}
                                        id={responesMsg.id.toString()}
                                        >
                                        {responesMsg.text}
                                    </S.MsgOwnerContentP>
                                </S.ContentPTime>
                            )
                        })}
                    </S.MsgOwnerContent>
                </S.MsgOwner> : <S.Message>
                    <S.MessageInfo>
                        <S.MessageInfoImg src={`${process.env.STATIC_SOURCE}/people.PNG`} />
                        <S.MessageInfoP>
                            {responseMsgArr[0].userName}
                        </S.MessageInfoP>
                    </S.MessageInfo>
                    <S.MessageContent>
                        {responseMsgArr.map((responesMsg, idx) => {
                            const createAt = new Date(responesMsg.createdAt);
                            return (
                                <S.ContentPTime key={idx}>
                                    <S.MsgContentP
                                        onClick={msgPClickHandler}
                                        onContextMenu={msgPContextHandler}
                                        id={responesMsg.id.toString()}
                                    >
                                        {responesMsg.text}
                                    </S.MsgContentP>
                                    <S.MessageTime
                                        id={responesMsg.id.toString()}
                                    >
                                        {`${createAt.getHours().toString().padStart(2, "0")}:${createAt.getMinutes().toString().padStart(2, "0")}`}
                                    </S.MessageTime>
                                </S.ContentPTime>
                            )
                        })}
                    </S.MessageContent>
                </S.Message>
            }
        </>
    )
}

export default memo(Messege);
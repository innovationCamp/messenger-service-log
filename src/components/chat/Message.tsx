import * as S from "@/components/chat/styled/Chat.styled";
import { useEffect, memo, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../atom/User";
import { contextMenuInterface, jwtDecoded, responseMsgDto } from "./interface";
import ContextMenu from "@/components/chat/ContextMenu";
import * as SMenu from "@/components/chat/styled/ContextMenu.styled";

interface MessageProps {
    responseMsgArr: responseMsgDto[];
}

const Messege = ({ responseMsgArr }: MessageProps) => {
    console.log("Message 재실행 확인");
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);
    const [menuState, setMenuState] = useState<contextMenuInterface>(
        { show: false, x: "0", y: "0", msg: { id: "0" } })

    useEffect(() => {
        console.log("Message 재렌더 확인");
    }, [])

    const ownerCheck = (msg: responseMsgDto, user: jwtDecoded): boolean => {
        // console.log("ownerCheck func");
        if (msg.userId == user.sub && msg.userEmail === user.email && msg.userName === user.nickname) return true;
        return false;
    }

    // const msgPClickHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {

    // }

    const msgPContextHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {
        // console.log("msgPContextHandler func");
        e.preventDefault();
        // console.log(e.currentTarget.id);
        const { clientX, clientY } = e;
        setMenuState({
            show: true,
            x: clientX.toString(),
            y: clientY.toString(),
            msg: { id: e.currentTarget.id },
        })
    }

    const closeWrapperHandler = () => {
        setMenuState((pre) => {
            const nState = Object.assign(new Object(), pre);
            nState.show = false;
            return nState;
        });
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
            {menuState.show &&
                <SMenu.CloseWrapper onClick={closeWrapperHandler} >
                    <ContextMenu x={menuState.x} y={menuState.y} />
                </SMenu.CloseWrapper>
            }
        </>
    )
}

export default memo(Messege);
import { devInstance } from "@/api/axios";
import * as S from "@/components/chat/styled/Chat.styled";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { jwtDecoded, msgType, responseMsgDto, sendMsgDto } from "./interface";
import Message from "./Message";
import { Client, IMessage } from "@stomp/stompjs";
import { stompInstance } from "@/api/stomp";
import { useRecoilState } from "recoil";
import { userState } from "../atom/User";

const Messeges = () => {
    console.log("Messeges 재실행 확인");
    const [searchParams, setSearchParams] = useSearchParams();
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);
    const [msgArr, setMsgArr] = useState<responseMsgDto[]>([]);
    const [reMsgArr, setReMsgArr] = useState<responseMsgDto[][]>([]);
    const [client, setClient] = useState<Client | null>(null);
    const [inputMsg, setInputMsg] = useState("");
    const navigate = useNavigate();

    const chatRef = useRef<HTMLDivElement>(null);

    const publishHandler = (msg: sendMsgDto) => {
        console.log("publishHandler");
        client?.publish({
            destination: '/pub/chat/message',
            body: JSON.stringify(msg),
        });
    }

    //e: React.KeyboardEvent<HTMLTextAreaElement>
    const sendHandler = async () => {
        console.log("sendHandler");
        if (inputMsg.trim() == "") {
            setInputMsg(""); return;
        }
        const sendMsg: sendMsgDto = {
            type: msgType.TALK,
            channelId: searchParams.get("channelId")!,
            senderId: user.sub,
            senderName: user.nickname,
            message: inputMsg
        };
        publishHandler(sendMsg);
        setInputMsg("");
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        // console.log("keyDownHandler");
        if (e.key === "Enter") {
            if (!e.shiftKey) {
                sendHandler();
                e.preventDefault();
            }
        }
    }

    const connectHandler = () => {
        console.log("connectHandler");
        const channelId = searchParams.get("channelId");
        if (channelId) {
            let stomp = stompInstance();
            stomp.onConnect = (frame) => {
                stomp.subscribe(`/sub/chat/room/${channelId}`, (message) => {
                    // console.log("###########", message.body);
                    const msg: responseMsgDto = JSON.parse(message.body);
                    setMsgArr((preMsgArr) => [...preMsgArr, msg])
                });
            }
            setClient(stomp);
        } else return navigate("/no-page");
    }

    useEffect(() => {
        console.log("@@@ : Message useEffect");
        connectHandler();

        devInstance.get(`/channel-content/${searchParams.get("channelId")}`)
            .then((res) => {
                // console.log("@@", res.data);
                setMsgArr(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    useEffect(() => {
        if (msgArr.length != 0) {
            const resArr: responseMsgDto[][] = [];
            let cacheArr: responseMsgDto[] = [];
            if (msgArr.length == 1) resArr.push(msgArr);
            msgArr.reduce((acc, cur, idx) => {
                if (cacheArr.length == 0) cacheArr = [acc];
                if (acc.userId != cur.userId) {
                    resArr.push(cacheArr);
                    cacheArr = [];
                }
                cacheArr.push(cur);
                if (idx == msgArr.length - 1) {
                    resArr.push(cacheArr);
                }
                return cur;
            });
            // console.log("@@2", resArr);
            setReMsgArr(resArr);
        }
    }, [msgArr])

    useEffect(() => {
        chatRef.current?.scrollIntoView({ behavior: "auto" });
    }, [reMsgArr])

    useEffect(() => {
        client?.activate();
    }, [client])

    return (
        <>
            <S.Messages>
                {
                    reMsgArr.map((v: responseMsgDto[], idx) => {
                        return <Message key={idx} responseMsgArr={v} />
                    })
                }
                <div ref={chatRef}></div>
            </S.Messages>
            <S.InputDiv>
                <S.TextArea
                    value={inputMsg}
                    onChange={(e: any) => setInputMsg(e.target.value)}
                    onKeyDown={keyDownHandler}
                />
                <S.Send>
                    <S.SendBtn
                        onClick={sendHandler}>
                        Send
                    </S.SendBtn>
                </S.Send>
            </S.InputDiv>
        </>
    )
}

export default memo(Messeges);
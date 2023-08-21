import { devInstance } from "@/api/axios";
import * as S from "@/components/chat/styled/Chat.styled";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { jwtDecoded, msgType, responseMsgDto, sendMsgDto } from "./interface";
import Message from "./Message";
import { Client, IMessage } from "@stomp/stompjs";
import * as StompJs from '@stomp/stompjs';
import { stompInstance } from "@/api/stomp";
import { useRecoilState } from "recoil";
import { userState } from "../atom/User";

const Messeges = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);
    const [msgArr, setMsgArr] = useState<responseMsgDto[]>([]);
    const [client, setClient] = useState<Client | null>(null);
    const [inputMsg, setInputMsg] = useState("");
    const navigate = useNavigate();

    const chatRef = useRef<HTMLDivElement>(null);

    const publishHandler = (msg: sendMsgDto) => {
        client?.publish({
            destination: '/pub/chat/message',
            body: JSON.stringify(msg),
        });
    }
    
    const sendHandler = async () => {
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

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            sendHandler();
        }
    }

    const connectHandler = () => {
        const channelId = searchParams.get("channelId");
        if (channelId) {
            let stomp = stompInstance();
            stomp.onConnect = (frame) => {
                stomp.subscribe(`/sub/chat/room/${channelId}`, (message) => {
                    console.log("###########", message.body);
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
                // console.log(res.data);
                setMsgArr(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    useEffect(() => {
        chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msgArr])

    useEffect(() => {
        client?.activate();
    }, [client])

    return (
        <>
            <S.Messages>
                {
                    msgArr.map((v: responseMsgDto, k) => {
                        return <Message key={k} responseMsg={v} />
                    })
                }
                <div ref={chatRef}></div>
            </S.Messages>
            <S.InputDiv>
                <S.Input
                    type="text"
                    value={inputMsg}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputMsg(e.target.value)}
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

export default Messeges;
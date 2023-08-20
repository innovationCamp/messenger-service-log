import { stompInstance } from "@/api/stomp";
import * as S from "@/components/chat/styled/Chat.styled";
import { Client, IMessage } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../atom/User";
import { jwtDecoded, sendMsgDto } from "./interface";

const MessageInput = () => {
    const [inputMsg, setInputMsg] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);
    const [test, setTest] = useState<Client>();
    const navigate = useNavigate();
    const client = useRef<Client>();

    useEffect(() => {
        // const channelId = searchParams.get("channelId");
        // if (channelId) {
        //     const client = stompInstance(channelId);
        //     client.activate();
        //     setTest(client);
        // } else return navigate("/no-page");

        const stompClient = new Client({
            brokerURL: 'ws://localhost:8080/ws-stomp'
        });
        stompClient.onConnect = (frame) => {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/sub/chat/room/1', (greeting) => {
                console.log(greeting);
            });
        };
        setTest(stompClient);

        // client.current = new Client({
        //     brokerURL: process.env.STOMP_BROKER,
        //     debug: function (str) {
        //         console.log(str);
        //     },
        //     reconnectDelay: 5000, //자동 재 연결
        //     heartbeatIncoming: 4000,
        //     heartbeatOutgoing: 4000,
        //     onConnect: () => {
        //         client.current?.subscribe(`/sub/chat/room/${channelId}`, (message: IMessage) => {
        //             console.log(`Received: ${message.body}`);
        //         });
        //         // console.log('success');
        //         // subscribe();
        //     },
        // });
        // client.current.activate();

        //===================================
        // const stompClient = new Client({
        //     brokerURL: 'ws://localhost:8080/gs-guide-websocket'
        // });
        // stompClient.onConnect = (frame) => {
        //     console.log('Connected: ' + frame);
        //     stompClient.subscribe('/topic/greetings', (greeting) => {
        //         console.log(greeting);
        //     });
        // };
        // setTest(stompClient);
    }, [])

    const subscribe = () => {
        client.current?.subscribe(`/sub/chat/room/${searchParams.get("channelId")}`, (message: IMessage) => {
            console.log(`Received: ${message.body}`);
        });
    };

    useEffect(() => {
        test?.activate();
    }, [test])
    useEffect(() => {
        // const testObj: sendMsgDto = {
        //     type: "TALK",
        //     channelId: "1",
        //     senderId: user.sub,
        //     message: "test",
        // }
        console.log(inputMsg);
        test?.publish({
            destination:'/pub/test',
            body: JSON.stringify({name: "choi"}),
        });
        // client.current?.publish({
        //     destination: '/pub/chat',
        //     body: JSON.stringify(testObj),
        // });

        //===========================
        // test?.publish({
        //     destination: "/app/hello",
        //     body: JSON.stringify({name: "choi"})
        // });

        //이어서
    }, [inputMsg])

    const handleSendClick = async () => {

    }

    return (
        <S.InputDiv>
            <S.Input
                type="text"
                value={inputMsg}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputMsg(e.target.value)}
            />
            <S.Send>
                <S.SendBtn
                    onClick={handleSendClick}>
                    Send
                </S.SendBtn>
            </S.Send>
        </S.InputDiv>
    )
}

export default MessageInput;
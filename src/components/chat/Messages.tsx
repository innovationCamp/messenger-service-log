import { devInstance } from "@/api/axios";
import * as S from "@/components/chat/styled/Chat.styled";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { responseMsgDto } from "./interface";
import Message from "./Message";
import * as StompJs from '@stomp/stompjs';
import { stompInstance } from "@/api/stomp";


const Messeges = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [msgArr, setMsgArr] = useState<responseMsgDto[]>([]);

    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("@@@ : Message useEffect");
        console.log(process.env.SERVER);

        // const stompInstance = new StompJs.Client({
        //     brokerURL: "ws://localhost:8080/ws-stomp",
        //     connectHeaders: {
        //         login: 'user',
        //         passcode: 'password',
        //     },
        //     debug: function (str) {
        //         console.log(str);
        //     },
        //     reconnectDelay: 5000, //자동 재 연결
        //     heartbeatIncoming: 4000,
        //     heartbeatOutgoing: 4000,
        // })

        // stompInstance.onConnect = () => {
        //     console.log("Connection stompInstance");
        // }
        
        // stompInstance.onStompError = (frame) => {
        //     console.log('Broker reported error: ' + frame.headers['message']);
        //     console.log('Additional details: ' + frame.body);
        // }

        stompInstance.activate();


        devInstance.get(`/channel-content/${searchParams.get("channelId")}`)
        .then((res) => {
            // console.log(res.data);
            setMsgArr(res.data);
        })
        .catch((e) => {
            console.log(e);
        })
    }, []);

    useEffect(() => {
        chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msgArr])

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
        </>
    )
}

export default Messeges;
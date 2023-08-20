import { devInstance } from "@/api/axios";
import * as S from "@/components/chat/styled/Chat.styled";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { jwtDecoded, responseMsgDto, sendMsgDto } from "./interface";
import Message from "./Message";
import * as StompJs from '@stomp/stompjs';
import { stompInstance } from "@/api/stomp";
import { useRecoilState } from "recoil";
import { userState } from "../atom/User";


const Messeges = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [msgArr, setMsgArr] = useState<responseMsgDto[]>([]);
    const [user, setUser] = useRecoilState<jwtDecoded>(userState);

    const navigate = useNavigate();

    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("@@@ : Message useEffect");
        // const channelId = searchParams.get("channelId");
        // if (channelId) {
        //     const testObj: sendMsgDto = {
        //         type : "TALK",
        //         channelId: channelId,
        //         senderId: user.sub,
        //         message: "test",
        //     }

        //     const client = stompInstance(channelId);
        //     client.activate();

        //     // client.publish({
        //     //     destination: '/pub/chat/message',
        //     //     body: JSON.stringify(testObj),
        //     // });
        // } else return navigate("/no-page");

        // const channelId = searchParams.get("channelId") ? 

        // const client = stompInstance(channelId);

        // stompInstance.activate();
        // stompInstance.subscribe(
        //     `/sub/chat/room/${searchParams.get("channelId")}`,
        //     (body) => {
        //         const JsonBody = JSON.parse(body.body);
        //         console.log(JsonBody);
        //     })

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
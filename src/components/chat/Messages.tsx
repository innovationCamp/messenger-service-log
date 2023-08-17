import { devInstance } from "@/api/axios";
import * as S from "@/components/chat/styled/Chat.styled";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Msg, responseMsgDto } from "./interface";
import Message from "./Message";

const generateMsg = (owner: boolean, text: string): Msg => {
    return { owner: owner, text: text }
}

const Messeges = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [msgArr, setMsgArr] = useState<responseMsgDto[]>([]);

    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("@@@ : Message useEffect");
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
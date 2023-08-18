import { devInstance } from "@/api/axios";
import * as S from "@/components/chat/styled/Chat.styled";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ChatInfo = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        console.log("@@@ : ChatInfo useEffect", searchParams.get("channelId"));
        devInstance.get(`/channel/${searchParams.get("channelId")}`)
            .then((res) => {
                // console.log(res.data);
                setTitle(res.data.channelName);
                setDescription(res.data.channelDescription);
            })
            .catch((e) => {
                // console.log(e.response.data.message);
                setTitle(e.response.data.message);
            })
    }, [])

    return (
        <>
            <S.ChatInfo>
                <S.ChatTitle>
                    {title}
                </S.ChatTitle>
                <S.ChatDesc>
                    {description}
                </S.ChatDesc>
            </S.ChatInfo>
        </>
    )
}

export default ChatInfo;
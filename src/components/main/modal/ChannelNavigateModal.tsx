import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { logContentState, logType, logTypeConstant, modalState } from "@/components/atom/ModalShow"
import * as S from "@/components/main/styled/Modal.styled";
import { line } from "@/components/constant/constant";
import { modalProps } from "../interface";

interface ChannelNavigateDto {
    channelId: string,
}

const ChannelNavigateModal = ({ eventName }: modalProps) => {
    const [modalShow, setModalShow] = useRecoilState(modalState);
    const [logContent, setLogContent] = useRecoilState(logContentState);
    const [channelId, setChannelId] = useState("");

    const closeModal = () => {
        setModalShow((state) => {
            const newState = { ...state };
            newState.channelNavigate = false;
            return newState;
        })
    }

    const openInNewTab = (url: string) => {
        const newTab = window.open(url, '_blank');
        if (newTab) {
            newTab.focus();
        }
    };

    const handleSubmitClick = async () => {
        const logContentList: logType[] = [];
        logContentList.push({
            type: logTypeConstant.yellow,
            content: line,
        })
        logContentList.push({
            type: logTypeConstant.blue,
            content: `${eventName} 실행`,
        })

        const ChannelNavigateData: ChannelNavigateDto = {
            channelId: channelId,
        }
        const formData = new FormData();
        Object.entries(ChannelNavigateData).map(([k, v]) => {
            formData.append(k, v);
        })
        logContentList.push({
            type: logTypeConstant.white,
            content: `${JSON.stringify(Object.fromEntries(formData))}`,
        })
        
        openInNewTab(`/chat?channelId=${channelId}`);
        closeModal();
        setLogContent((v) => v.concat(logContentList));
    };

    const handleOverlayClick = () => {
        closeModal();
    };

    return (
        <>
            {
                modalShow.channelNavigate &&
                <S.Modal onClick={handleOverlayClick}>
                    <S.ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <h2>Channel Navigate</h2>
                        <S.ModalInput
                            type="text"
                            placeholder="channelId"
                            value={channelId}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChannelId(e.target.value)}
                        />
                        <S.ModalSubmit
                            type="submit"
                            value="Submit"
                            onClick={handleSubmitClick}
                        />
                    </S.ModalContent>
                </S.Modal>
            }
        </>
    )
}

export default ChannelNavigateModal;
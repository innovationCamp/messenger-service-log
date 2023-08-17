import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { logContentState, logType, logTypeConstant, modalState } from "@/components/atom/ModalShow"
import * as S from "@/components/main/styled/Modal.styled";
import { devInstance } from "@/api/axios";
import { line } from "@/components/constant/constant";

interface groupWalletCreateDto {
    channelId: string,
    walletName: string,
    description: string,
    password: string,
}

const GroupWalletCreateModal = () => {
    const [modalShow, setModalShow] = useRecoilState(modalState);
    const [logContent, setLogContent] = useRecoilState(logContentState);
    const [channelId, setChannelId] = useState('');
    const [walletName, setWalletName] = useState('');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');

    const closeModal = () => {
        setModalShow((state) => {
            const newState = { ...state };
            newState.groupWalletCreate = false;
            return newState;
        })
    }

    const handleSubmitClick = async () => {
        const logContentList: logType[] = [];
        logContentList.push({
            type: logTypeConstant.yellow,
            content: line,
        })
        logContentList.push({
            type: logTypeConstant.blue,
            content: `${GroupWalletCreateModal.name} 실행`,
        })

        const groupWalletCreateData: groupWalletCreateDto = {
            channelId: channelId,
            walletName: walletName,
            description: description,
            password: password,
        }
        const formData = new FormData();
        Object.entries(groupWalletCreateData).map(([k, v]) => {
            formData.append(k, v);
        })
        logContentList.push({
            type: logTypeConstant.white,
            content: `${JSON.stringify(Object.fromEntries(formData))}`,
        })

        await devInstance.post("/wallet/group", formData)
            .then((res) => {
                closeModal();
                logContentList.push({
                    type: logTypeConstant.blue,
                    content: `${GroupWalletCreateModal.name} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${JSON.stringify(res.data)}`,
                })
                setLogContent((v) => v.concat(logContentList));
            })
            .catch((e) => {
                closeModal();
                logContentList.push({
                    type: logTypeConstant.red,
                    content: `${GroupWalletCreateModal.name} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${e.response.data.message}`,
                })
                setLogContent((v) => v.concat(logContentList));
            });
    };

    const handleOverlayClick = () => {
        closeModal();
    };

    return (
        <>
            {
                modalShow.groupWalletCreate &&
                <S.Modal onClick={handleOverlayClick}>
                    <S.ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <h2>group Wallet Registration</h2>
                        <S.ModalInput
                            type="text"
                            placeholder="channelId"
                            value={channelId}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChannelId(e.target.value)}
                        />
                        <S.ModalInput
                            type="text"
                            placeholder="walletName"
                            value={walletName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWalletName(e.target.value)}
                        />
                        <S.ModalInput
                            type="text"
                            placeholder="description"
                            value={description}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                        />
                        <S.ModalInput
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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

export default GroupWalletCreateModal;
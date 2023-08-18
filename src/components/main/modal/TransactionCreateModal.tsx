import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { logContentState, logType, logTypeConstant, modalState } from "@/components/atom/ModalShow"
import * as S from "@/components/main/styled/Modal.styled";
import { devInstance } from "@/api/axios";
import { line } from "@/components/constant/constant";
import { modalProps } from "../interface";

interface TransactionCreateDto {
    password: string,
    walletId: string,
    targetWalletId: string,
    amount: string,
}

const TransactionCreateModal = ({eventName}: modalProps) => {
    const [modalShow, setModalShow] = useRecoilState(modalState);
    const [logContent, setLogContent] = useRecoilState(logContentState);
    const [password, setPassword] = useState('');
    const [walletId, setWalletId] = useState('');
    const [targetWalletId, setTargetWalletId] = useState('');
    const [amount, setAmount] = useState('');

    const closeModal = () => {
        setModalShow((state) => {
            const newState = { ...state };
            newState.transactionCreate = false;
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
            content: `${eventName} 실행`,
        })

        const transactionCreateData: TransactionCreateDto = {
            password: password,
            walletId: walletId,
            targetWalletId: targetWalletId,
            amount: amount,
        }
        const formData = new FormData();
        Object.entries(transactionCreateData).map(([k, v]) => {
            formData.append(k, v);
        })
        logContentList.push({
            type: logTypeConstant.white,
            content: `${JSON.stringify(Object.fromEntries(formData))}`,
        })

        await devInstance.post("/wallet/transaction", formData)
            .then((res) => {
                closeModal();
                logContentList.push({
                    type: logTypeConstant.blue,
                    content: `${eventName} 결과`,
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
                    content: `${eventName} 결과`,
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
                modalShow.transactionCreate &&
                <S.Modal onClick={handleOverlayClick}>
                    <S.ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <h2>create Transaction</h2>
                        <S.ModalInput
                            type="text"
                            placeholder="walletId"
                            value={walletId}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWalletId(e.target.value)}
                        />
                        <S.ModalInput
                            type="text"
                            placeholder="targetWalletId"
                            value={targetWalletId}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTargetWalletId(e.target.value)}
                        />
                        <S.ModalInput
                            type="text"
                            placeholder="amount"
                            value={amount}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
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

export default TransactionCreateModal;
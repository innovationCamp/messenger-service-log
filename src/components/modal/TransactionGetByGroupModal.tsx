import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { logContentState, logType, logTypeConstant, modalState } from "@/components/atom/ModalShow"
import * as S from "@/components/styled/Modal.styled";
import { devInstance } from "@/api/axios";
import { line } from "@/components/constant/constant";

interface TransactionGetDto {
    groupWalletId: string,
}

const TransactionGetByGroupModal = () => {
    const [modalShow, setModalShow] = useRecoilState(modalState);
    const [logContent, setLogContent] = useRecoilState(logContentState);
    const [groupWalletId, setGroupWalletId] = useState('');

    const closeModal = () => {
        setModalShow((state) => {
            const newState = { ...state };
            newState.transactionGetByGroupWallet = false;
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
            content: `${TransactionGetByGroupModal.name} 실행`,
        })

        const transactionGetData: TransactionGetDto = {
            groupWalletId: groupWalletId,
        }
        const formData = new FormData();
        Object.entries(transactionGetData).map(([k, v]) => {
            formData.append(k, v);
        })
        logContentList.push({
            type: logTypeConstant.white,
            content: `${JSON.stringify(Object.fromEntries(formData))}`,
        })

        await devInstance.get(`/wallet/group/${groupWalletId}/transaction/all`)
            .then((res) => {
                closeModal();
                logContentList.push({
                    type: logTypeConstant.blue,
                    content: `${TransactionGetByGroupModal.name} 결과`,
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
                    content: `${TransactionGetByGroupModal.name} 결과`,
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
                modalShow.transactionGetByGroupWallet &&
                <S.Modal onClick={handleOverlayClick}>
                    <S.ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <h2> group Wallet 내역</h2>
                        <S.ModalInput
                            type="text"
                            placeholder="groupWalletId"
                            value={groupWalletId}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGroupWalletId(e.target.value)}
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

export default TransactionGetByGroupModal;
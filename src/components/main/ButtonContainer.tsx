import * as S from "@/components/main/styled/ButtonContainer.styled";
import * as SBtn from "@/components/main/styled/Btn.styled";
import { useRecoilState } from "recoil";
import { logContentState, modalKeyConstance, modalState } from "@/components/atom/ModalShow";
import { ButtonEvent } from "@/components/event/ButtonEvent";

const ButtonContainer = () => {
    const [logContent, setLogContent] = useRecoilState(logContentState);
    const [modalShow, setModalShow] = useRecoilState(modalState);

    const openModal = (modalName: string) => {
        setModalShow((state) => {
            const newState = { ...state };
            newState[modalName] = true;
            return newState;
        })
    }

    return (
        <S.ButtonContainer>
            <S.FlexBox>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.signUp);
                }}>
                    Sign Up
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.login);
                }}>
                    Login
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={(e: any) => {
                    ButtonEvent.getUser(setLogContent, "현재 User");
                }}>
                    현재 User
                </SBtn.btnPushBG>
                <SBtn.btnPushBG> 1 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 2 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 3 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 4 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 5 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 6 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 7 </SBtn.btnPushBG>
                <SBtn.btnPushBG> F </SBtn.btnPushBG>
            </S.FlexBox>
            <S.FlexBox>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.channelCreate);
                }}>
                    Channel 생성
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.channelParticipant);
                }}>
                    Channel 참여
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={(e: any) => {
                    ButtonEvent.getChannelList(setLogContent, "참여중 Channel 조회");
                }}
                >
                    참여중 Channel 조회
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.channelSearch);
                }}>
                    공개 Channel 검색
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.channelNavigate);
                }}>
                    참여 중 Channel Navigat 
                </SBtn.btnPushBG>
                <SBtn.btnPushBG> 1 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 2 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 3 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 4 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 5 </SBtn.btnPushBG>
                <SBtn.btnPushBG> F </SBtn.btnPushBG>
            </S.FlexBox>
            <S.FlexBox>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.personalWalletCreate);
                }}>
                    개인 Wallet 개설
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={(e: any) => {
                    ButtonEvent.getPersonalWallet(setLogContent, "개인 Wallet 조회");
                }}>
                    개인 Wallet 조회
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={(e: any) => {
                    ButtonEvent.getTransactionByPersonalWallet(setLogContent, "개인 Wallet 내역");
                }}>
                    개인 Wallet 내역
                </SBtn.btnPushBG>
                <SBtn.btnPushBG> 1 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 2 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 3 </SBtn.btnPushBG>
                <SBtn.btnPushBG> F </SBtn.btnPushBG>
            </S.FlexBox>
            <S.FlexBox>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.groupWalletCreate);
                }}>
                    그룹 Wallet 개설
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.groupWalletListByChannel);
                }}>
                    그룹 Wallet 전체조회 by ChannelId
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.groupWalletParticipant);
                }}>
                    그룹 Wallet 참여
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={(e: any) => {
                    ButtonEvent.getGroupWalletListByParticipant(setLogContent, "참여한 그룹 Wallet 조회");
                }}>
                    참여한 그룹 Wallet 조회
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={(e: any) => {
                    openModal(modalKeyConstance.groupWalletGetByGroupWallet);
                }}>
                    그룹 Wallet 조회
                </SBtn.btnPushBG>
                <SBtn.btnPushBG onClick={(e: any) => {
                    openModal(modalKeyConstance.transactionGetByGroupWallet);
                }}>
                    그룹 Wallet 내역
                </SBtn.btnPushBG>
                <SBtn.btnPushBG> 1 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 2 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 3 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 4 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 5 </SBtn.btnPushBG>
                <SBtn.btnPushBG> F </SBtn.btnPushBG>
            </S.FlexBox>
            <S.FlexBox>
                <SBtn.btnPushBG onClick={() => {
                    openModal(modalKeyConstance.transactionCreate);
                }}>
                    송금
                </SBtn.btnPushBG>
            </S.FlexBox>
        </S.ButtonContainer >
    )
}

export default ButtonContainer;
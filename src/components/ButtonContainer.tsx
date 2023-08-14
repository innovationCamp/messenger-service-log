import * as S from "@/components/styled/ButtonContainer.styled";
import * as SBtn from "@/components/styled/Btn.styled";
import { useRecoilState } from "recoil";
import { modalKeyConstance, modalState } from "./atom/ModalShow";

const ButtonContainer = () => {
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
                <SBtn.btnPushBG> 1 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 2 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 3 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 4 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 5 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 6 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 7 </SBtn.btnPushBG>
                <SBtn.btnPushBG> F </SBtn.btnPushBG>
            </S.FlexBox>
        </S.ButtonContainer>
    )
}

export default ButtonContainer;
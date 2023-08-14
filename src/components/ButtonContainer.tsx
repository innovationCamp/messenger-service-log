import * as S from "@/components/styled/ButtonContainer.styled";
import * as SBtn from "@/components/styled/Btn.styled";
import { useRecoilState } from "recoil";
import { signUpModalState } from "./atom/ModalShow";

const ButtonContainer = () => {
    const [show, setShow] = useRecoilState(signUpModalState);

    return (
        <S.ButtonContainer>
            <S.FlexBox>
                {/* <SBtn.btnPushBG onClick={() => {
                    setShow(true);
                }}>
                    Sign Up
                </SBtn.btnPushBG> */}
                <SBtn.btnPushBG> 1 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 2 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 3 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 4 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 5 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 6 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 7 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 8 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 9 </SBtn.btnPushBG>
                <SBtn.btnPushBG> 10 </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> FF </SBtn.btnPushBG>
            </S.FlexBox>
            <S.FlexBox>
                {/* <SBtn.btnPushBG onClick={() => {
                    setShow(true);
                }}>
                    Sign Up
                </SBtn.btnPushBG> */}
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
                <SBtn.btnPushBG> T </SBtn.btnPushBG>
            </S.FlexBox>
        </S.ButtonContainer>
    )
}

export default ButtonContainer;
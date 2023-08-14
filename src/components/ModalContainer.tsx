import * as S from "@/components/styled/ModalContainer.styled";
import ChannelCreateModal from "./modal/ChannelCreateModal";
import LoginModal from "./modal/LoginModal";
import SignUpModal from "./modal/SignUpModal";

const ModalContainer = () => {
    return (
        <S.ModalContainer>
            <SignUpModal />
            <LoginModal />
            <ChannelCreateModal />
        </S.ModalContainer>
    )
}

export default ModalContainer;
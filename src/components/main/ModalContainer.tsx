import ChannelCreateModal from "./modal/ChannelCreateModal";
import ChannelParticipantModal from "./modal/ChannelParticipantModal";
import ChannelSearchModal from "./modal/ChannelSearchModal";
import GroupWalletCreateModal from "./modal/GroupWalletCreateModal";
import GroupWalletGetModal from "./modal/GroupWalletGetModal";
import GroupWalletListModal from "./modal/GroupWalletListModal";
import GroupWalletParticipantModal from "./modal/GroupWalletParticipantModal";
import LoginModal from "./modal/LoginModal";
import PersonalWalletCreateModal from "./modal/PersonalWalletCreateModal";
import SignUpModal from "./modal/SignUpModal";
import TransactionCreateModal from "./modal/TransactionCreateModal";
import TransactionGetByGroupModal from "./modal/TransactionGetByGroupModal";
import * as S from "@/components/main/styled/ModalContainer.styled";
import ChannelNavigateModal from "./modal/ChannelNavigateModal";

const ModalContainer = () => {
    return (
        <S.ModalContainer>
            <SignUpModal />
            <LoginModal />
            <ChannelCreateModal />
            <ChannelParticipantModal />
            <ChannelSearchModal />
            <ChannelNavigateModal />
            <PersonalWalletCreateModal />
            <GroupWalletCreateModal />
            <GroupWalletListModal />
            <GroupWalletParticipantModal />
            <GroupWalletGetModal />
            <TransactionCreateModal />
            <TransactionGetByGroupModal />
        </S.ModalContainer>
    )
}

export default ModalContainer;
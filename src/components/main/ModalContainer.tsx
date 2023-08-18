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
            <SignUpModal eventName="SignUpModal"/>
            <LoginModal eventName="LoginModal"/>
            <ChannelCreateModal eventName="ChannelCreateModal"/>
            <ChannelParticipantModal eventName="ChannelParticipantModal"/>
            <ChannelSearchModal eventName="ChannelSearchModal"/>
            <ChannelNavigateModal eventName="ChannelNavigateModal"/>
            <PersonalWalletCreateModal eventName="PersonalWalletModal"/>
            <GroupWalletCreateModal eventName="GroupWalletCreateModal"/>
            <GroupWalletListModal eventName="GroupWalletListModal"/>
            <GroupWalletParticipantModal eventName="GroupWalletParticipantModal"/>
            <GroupWalletGetModal eventName="GroupWalletGetModal"/>
            <TransactionCreateModal eventName="TransactionCreateModal"/>
            <TransactionGetByGroupModal eventName="TransactionGetByGroupModal"/>
        </S.ModalContainer>
    )
}

export default ModalContainer;
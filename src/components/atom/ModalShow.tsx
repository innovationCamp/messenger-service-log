import { atom } from "recoil";

//initModalType 키랑 일치시키면서 관리
export const modalKeyConstance = {
    signUp: "signUp",
    login: "login",
    channelCreate: "channelCreate",
    channelParticipant: "channelParticipant",
    channelSearch: "channelSearch",
    channelNavigate: "channelNavigate",
    personalWalletCreate: "personalWalletCreate",
    personalWalletCreateMoney: "personalWalletCreateMoney",
    groupWalletCreate: "groupWalletCreate",
    groupWalletListByChannel: "groupWalletListByChannel",
    groupWalletParticipant: "groupWalletParticipant",
    groupWalletGetByGroupWallet: "groupWalletGetByGroupWallet",
    transactionCreate: "transactionCreate",
    transactionGetByGroupWallet: "transactionGetByGroupWallet",
    reservationCreate: "reservationCreate",
    reservationGetByGroupWallet: "reservationGetByGroupWallet"
}

interface initModalType {
    [key: string]: boolean;
    signUp: boolean;
    login: boolean;
    channelCreate: boolean;
    channelParticipant: boolean;
    channelSearch: boolean;
    channelNavigate: boolean;
    personalWalletCreate: boolean;
    personalWalletCreateMoney: boolean;
    groupWalletCreate: boolean;
    groupWalletListByChannel: boolean;
    groupWalletParticipant: boolean;
    groupWalletGetByGroupWallet: boolean;
    transactionCreate: boolean;
    transactionGetByGroupWallet: boolean;
    reservationCreate: boolean;
    reservationGetByGroupWallet: boolean;
}

const initModal: initModalType = {
    signUp: false,
    login: false,
    channelCreate: false,
    channelParticipant: false,
    channelSearch: false,
    channelNavigate: false,
    personalWalletCreate: false,
    personalWalletCreateMoney: false,
    groupWalletCreate: false,
    groupWalletListByChannel: false,
    groupWalletParticipant: false,
    groupWalletGetByGroupWallet: false,
    transactionCreate: false,
    transactionGetByGroupWallet: false,
    reservationCreate: false,
    reservationGetByGroupWallet: false,
}

export interface logType {
    type: string
    content: string
}

export const logTypeConstant = {
    white: "white",
    red: "red",
    blue: "blue",
    yellow: "yellow",
}

export const logContentState = atom<logType[]>({
    key: "logContentState",
    default: [],
})

export const modalState = atom({
    key: "modalState",
    default: initModal,
})
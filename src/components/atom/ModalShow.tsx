import { atom } from "recoil";

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

//initModalType 키랑 일치시키면서 관리
export const modalKeyConstance = {
    signUp: "signUp",
    login: "login",
    channelCreate: "channelCreate",
    channelParticipant: "channelParticipant",
    channelSearch: "channelSearch",
    personalWalletCreate: "personalWalletCreate",
    groupWalletCreate: "groupWalletCreate", 
    groupWalletListByChannel: "groupWalletListByChannel",
    groupWalletParticipant: "groupWalletParticipant",
    groupWalletGetByGroupWallet: "groupWalletGetByGroupWallet",
    transactionCreate: "transactionCreate",
    transactionGetByGroupWallet: "transactionGetByGroupWallet",
}

interface initModalType {
    [key: string] : boolean;
    signUp: boolean;
    login: boolean;
    channelCreate: boolean;
    channelParticipant: boolean;
    channelSearch: boolean;
    personalWalletCreate: boolean;
    groupWalletCreate: boolean;
    groupWalletListByChannel: boolean;
    groupWalletParticipant: boolean;
    groupWalletGetByGroupWallet: boolean;
    transactionCreate: boolean;
    transactionGetByGroupWallet: boolean;
}

const initModal: initModalType = {
    signUp: false,
    login: false,
    channelCreate: false,
    channelParticipant: false,
    channelSearch: false,
    personalWalletCreate: false,
    groupWalletCreate: false,
    groupWalletListByChannel: false,
    groupWalletParticipant: false,
    groupWalletGetByGroupWallet: false,
    transactionCreate: false,
    transactionGetByGroupWallet: false,
}

export const modalState = atom({
    key: "modalState",
    default: initModal,
})
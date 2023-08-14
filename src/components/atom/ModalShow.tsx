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
    key: "logContainerElState",
    default: [],
})

//initModalType 키랑 일치시키면서 관리
export const modalKeyConstance = {
    signUp: "signUp",
    login: "login",
    channelCreate: "channelCreate",
}

interface initModalType {
    [key: string] : boolean;
    signUp: boolean;
    login: boolean;
    channelCreate: boolean;
}

const initModal: initModalType = {
    signUp: false,
    login: false,
    channelCreate: false,
}

export const modalState = atom({
    key: "modalState",
    default: initModal,
})
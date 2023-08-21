export interface Msg {
    owner: boolean;
    text: string;
}

export interface responseMsgDto {
    id: number;
    userId: string;
    userEmail: string;
    userName: string;
    channelId: string;
    callOutContentId: number | null;
    createdAt: string;
    notReadCount: number | null;
    text: string;
}

export interface jwtDecoded {
    sub: string;
    email: string;
    nickname: string;
    exp: number;
    iat: number;
}

export enum msgType {
    ENTER = "ENTER",
    TALK = "TALK",
    CALLOUT = "CALLOUT",
}

export interface sendMsgDto {
    type: msgType;
    channelId: string;
    senderId: string;
    senderName: string;
    message: string;
}
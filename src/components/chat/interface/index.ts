export interface Msg {
    owner: boolean;
    text: string;
}

export interface responseMsgDto {
    id: number;
    callOutContentId: number | null;
    text: string;
    createdAt: string;
    userEmail: string;
    userName: string;
    notReadCount: number | null;
}

export interface jwtDecoded {
    sub: string;
    email: string;
    nickname: string;
    exp: number;
    iat:number;
}
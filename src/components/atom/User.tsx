import { atom } from "recoil";
import { jwtDecoded } from "../chat/interface";

export const jwtDecodedDefault: jwtDecoded = {
    sub: "0",
    email: "",
    nickname: "",
    exp: 0,
    iat: 0,
}

export const userState = atom<jwtDecoded>({
    key: "userState",
    default: jwtDecodedDefault,
})
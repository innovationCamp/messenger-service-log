import { Cookies } from 'react-cookie';
import { SET_ACCESS_HEADER } from '../constant/constant';
import jwt_decode from "jwt-decode";
import { jwtDecoded } from '../chat/interface';
import { jwtDecodedDefault } from '../atom/User';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: any) => {
    return cookies.set(name, value, { ...options });
}

export const getCookie = (name: string) => {
    return cookies.get(name);
}

export const getUser = (): jwtDecoded => {
    const token = getCookie(SET_ACCESS_HEADER);
    if (!token) return jwtDecodedDefault;
    const payload: jwtDecoded = jwt_decode(token);
    return payload;
}
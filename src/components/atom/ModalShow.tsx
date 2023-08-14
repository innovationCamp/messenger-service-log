import { atom } from "recoil";

const signUpModalState = atom({
    key: "signUpModalState",
    default: false,
});

export { signUpModalState };
import { devInstance } from "@/api/axios";
import { logType, logTypeConstant } from "@/components/atom/ModalShow";
import { line } from "@/components/constant/constant";
import { SetterOrUpdater } from "recoil";


export const ButtonEvent = {
    getChannelList: async (setLogContent: SetterOrUpdater<logType[]>, eventName: string) => {
        const logContentList: logType[] = [];
        logContentList.push({
            type: logTypeConstant.yellow,
            content: line,
        })
        logContentList.push({
            type: logTypeConstant.blue,
            content: `${eventName} 실행`,
        })

        await devInstance.get(`/channel`)
            .then((res) => {
                logContentList.push({
                    type: logTypeConstant.blue,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${JSON.stringify(res.data)}`,
                })
                setLogContent((v) => v.concat(logContentList));
            })
            .catch((e) => {
                logContentList.push({
                    type: logTypeConstant.red,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${e.response.data.message}`,
                })
                setLogContent((v) => v.concat(logContentList));
            });
    },
    getUser: async (setLogContent: SetterOrUpdater<logType[]>, eventName: string) => {
        const logContentList: logType[] = [];
        logContentList.push({
            type: logTypeConstant.yellow,
            content: line,
        })
        logContentList.push({
            type: logTypeConstant.blue,
            content: `${eventName} 실행`,
        })

        await devInstance.get(`/user`)
            .then((res) => {
                logContentList.push({
                    type: logTypeConstant.blue,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${JSON.stringify(res.data)}`,
                })
                setLogContent((v) => v.concat(logContentList));
            })
            .catch((e) => {
                logContentList.push({
                    type: logTypeConstant.red,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${e.response.data.message}`,
                })
                setLogContent((v) => v.concat(logContentList));
            });
    },
    getPersonalWallet: async (setLogContent: SetterOrUpdater<logType[]>, eventName: string) => {
        const logContentList: logType[] = [];
        logContentList.push({
            type: logTypeConstant.yellow,
            content: line,
        })
        logContentList.push({
            type: logTypeConstant.blue,
            content: `${eventName} 실행`,
        })

        await devInstance.get(`/wallet/user`)
            .then((res) => {
                logContentList.push({
                    type: logTypeConstant.blue,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${JSON.stringify(res.data)}`,
                })
                setLogContent((v) => v.concat(logContentList));
            })
            .catch((e) => {
                logContentList.push({
                    type: logTypeConstant.red,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${e.response.data.message}`,
                })
                setLogContent((v) => v.concat(logContentList));
            });
    },
    getGroupWalletListByParticipant: async (setLogContent: SetterOrUpdater<logType[]>, eventName: string) => {
        const logContentList: logType[] = [];
        logContentList.push({
            type: logTypeConstant.yellow,
            content: line,
        })
        logContentList.push({
            type: logTypeConstant.blue,
            content: `${eventName} 실행`,
        })

        await devInstance.get(`/wallet/user/group/all`)
            .then((res) => {
                logContentList.push({
                    type: logTypeConstant.blue,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${JSON.stringify(res.data)}`,
                })
                setLogContent((v) => v.concat(logContentList));
            })
            .catch((e) => {
                logContentList.push({
                    type: logTypeConstant.red,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${e.response.data.message}`,
                })
                setLogContent((v) => v.concat(logContentList));
            });
    },
    getTransactionByPersonalWallet: async (setLogContent: SetterOrUpdater<logType[]>, eventName: string) => {
        const logContentList: logType[] = [];
        logContentList.push({
            type: logTypeConstant.yellow,
            content: line,
        })
        logContentList.push({
            type: logTypeConstant.blue,
            content: `${eventName} 실행`,
        })

        await devInstance.get(`/wallet/user/transaction/all`)
            .then((res) => {
                logContentList.push({
                    type: logTypeConstant.blue,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${JSON.stringify(res.data)}`,
                })
                setLogContent((v) => v.concat(logContentList));
            })
            .catch((e) => {
                logContentList.push({
                    type: logTypeConstant.red,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${e.response.data.message}`,
                })
                setLogContent((v) => v.concat(logContentList));
            });
    },
    getReservationByPersonalWallet: async (setLogContent: SetterOrUpdater<logType[]>, eventName: string) => {
        const logContentList: logType[] = [];
        logContentList.push({
            type: logTypeConstant.yellow,
            content: line,
        })
        logContentList.push({
            type: logTypeConstant.blue,
            content: `${eventName} 실행`,
        })

        await devInstance.get(`/wallet/user/reservation`)
            .then((res) => {
                logContentList.push({
                    type: logTypeConstant.blue,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${JSON.stringify(res.data)}`,
                })
                setLogContent((v) => v.concat(logContentList));
            })
            .catch((e) => {
                logContentList.push({
                    type: logTypeConstant.red,
                    content: `${eventName} 결과`,
                })
                logContentList.push({
                    type: logTypeConstant.white,
                    content: `${e.response.data.message}`,
                })
                setLogContent((v) => v.concat(logContentList));
            });
    },
};
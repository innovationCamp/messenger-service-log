import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const stompInstance = (): Client => {
    const client = new Client({
        brokerURL: "ws://localhost:8080/ws-stomp",
        connectHeaders: {
            login: 'user',
            passcode: 'password',
        },
        debug: function (str) {
            // console.log("!!!", str);
        },
        reconnectDelay: 5000, //자동 재 연결
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
    })

    return client;
}

export { stompInstance };

// const stompInstance = new StompJs.Client({
//     brokerURL: process.env.WS,
//     connectHeaders: {
//         login: 'user',
//         passcode: 'password',
//     },
//     debug: function (str) {
//         console.log(str);
//     },
//     reconnectDelay: 5000, //자동 재 연결
//     heartbeatIncoming: 4000,
//     heartbeatOutgoing: 4000,
// })

// stompInstance.onConnect = () => {
//     console.log("@@@ : Connection stompInstance");
//     client.subscribe(`/sub/chat/room/${channelId}`, (message) => {
//         console.log(`Received: ${message.body}`);
//     });
// }

// stompInstance.onStompError = (frame) => {
//     console.log('Broker reported error: ' + frame.headers['message']);
//     console.log('Additional details: ' + frame.body);
// }
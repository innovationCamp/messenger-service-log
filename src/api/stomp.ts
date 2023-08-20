import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { sendMsgDto } from '@/components/chat/interface';


const testObj: sendMsgDto = {
    type : "TALK",
    channelId: "1",
    senderId: "0",
    message: "test",
}

const stompInstance = (channelId: string): Client => {
    console.log(channelId);
    const client = new Client({
        brokerURL: "ws://localhost:8080/ws-stomp",
        connectHeaders: {
            login: 'user',
            passcode: 'password',
        },
        debug: function (str) {
            console.log("!!!", str);
        },
        reconnectDelay: 5000, //자동 재 연결
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: () => {
            client.subscribe(`/sub/chat/room/${channelId}`, (message) => {
                console.log(`Received: ${message.body}`);
            });
            // client.publish({
            //     destination: '/pub/chat/message',
            //     body: JSON.stringify(testObj),
            // });
        }
    })

    return client;
}



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
// }

// stompInstance.onStompError = (frame) => {
//     console.log('Broker reported error: ' + frame.headers['message']);
//     console.log('Additional details: ' + frame.body);
// }

export { stompInstance };
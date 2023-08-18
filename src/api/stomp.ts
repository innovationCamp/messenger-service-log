import SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';

const stompInstance = new StompJs.Client({
    brokerURL: "ws://localhost:8080/ws-stomp",
    connectHeaders: {
        login: 'user',
        passcode: 'password',
    },
    debug: function (str) {
        console.log(str);
    },
    reconnectDelay: 5000, //자동 재 연결
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
})

stompInstance.onConnect = () => {
    console.log("@@@ : Connection stompInstance");
}

stompInstance.onStompError = (frame) => {
    console.log('Broker reported error: ' + frame.headers['message']);
    console.log('Additional details: ' + frame.body);
}

export { stompInstance };

// const a: string = "1123";

// export {a};
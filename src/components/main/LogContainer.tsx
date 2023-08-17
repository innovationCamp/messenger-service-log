import * as SLog from "@/components/main/styled/LogContainer.styled";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { logContentState, logTypeConstant } from "@/components/atom/ModalShow";

const LogContainer = () => {
    const [logContent, setLogContent] = useRecoilState(logContentState);
    const logRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        logRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logContent])
    return (
        <>
            <SLog.LogContainer>
                <SLog.LogYellow> Messenger-Service-Log </SLog.LogYellow>
                {logContent.map(({ type, content }, i) => {
                    if (type === logTypeConstant.red) return <SLog.LogRed key={i}> {content} </SLog.LogRed>;
                    else if (type === logTypeConstant.blue) return <SLog.LogBlue key={i}> {content} </SLog.LogBlue>;
                    else if (type === logTypeConstant.yellow) return <SLog.LogYellow key={i}> {content} </SLog.LogYellow>;
                    else return <SLog.LogWhite key={i}> {content} </SLog.LogWhite>;
                })}
                <div ref={logRef}></div>
            </SLog.LogContainer>
            <SLog.LogContainer>
                <SLog.LogYellow> Messenger-Service-Log </SLog.LogYellow>
                {logContent.map(({ type, content }, i) => {
                    if (type === logTypeConstant.red) return <SLog.LogRed key={i}> {content} </SLog.LogRed>;
                    else if (type === logTypeConstant.blue) return <SLog.LogBlue key={i}> {content} </SLog.LogBlue>;
                    else if (type === logTypeConstant.yellow) return <SLog.LogYellow key={i}> {content} </SLog.LogYellow>;
                    else return <SLog.LogWhite key={i}> {content} </SLog.LogWhite>;
                })}
                <div ref={logRef}></div>
            </SLog.LogContainer>
        </>
    )
}

export default LogContainer;
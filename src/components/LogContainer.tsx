import * as SLog from "@/components/styled/LogContainer.styled";
import { useRecoilState } from "recoil";
import { logContentState, logTypeConstant } from "./atom/ModalShow";


const LogContainer = () => {
    const [logContent, setLogContent] = useRecoilState(logContentState);
    return (
        <SLog.LogContainer>
            <SLog.LogYellow> Messenger-Service-Log </SLog.LogYellow>
            {logContent.map(({type, content}, i) => {
                if (type === logTypeConstant.red) return <SLog.LogRed key={i}> {content} </SLog.LogRed>;
                else if (type === logTypeConstant.blue) return <SLog.LogBlue key={i}> {content} </SLog.LogBlue>;
                else if (type === logTypeConstant.yellow) return <SLog.LogYellow key={i}> {content} </SLog.LogYellow>;
                else return <SLog.LogWhite key={i}> {content} </SLog.LogWhite>;
            })}
        </SLog.LogContainer>
    )
}

export default LogContainer;
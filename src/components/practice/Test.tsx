import { useEffect, useState } from "react";
import ContextMenu from "../chat/ContextMenu";
import Test1 from "./Test1";
import Test2 from "./Test2";
import "./Test.css";

interface locate {
    x: string;
    y: string;
}

const Test = () => {
    const [show, setShow] = useState(false);
    const [locate, setLocate] = useState<locate>({ x: "0", y: "0" });

    const contextMenuHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const { clientX, clientY } = e;
        setShow((pre) => !pre);
        setLocate({ x: clientX.toString(), y: clientY.toString() });
    }

    return (
        <>
            {/* <div className="container" onContextMenu={contextMenuHandler}></div>
            {
                show &&
                <div className="close-wrapper" onClick={() => { setShow((pre) => !pre) }}>
                    <ContextMenu x={locate.x} y={locate.y} />
                </div>
            } */}
        </>
    )
}

export default Test;
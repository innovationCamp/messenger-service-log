import { useEffect, useState } from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";

const Test = () => {
    const [t, setT] = useState("");

    return (
        <>
            <input value={t} onChange={(e: any) => setT(e.target.value)}></input>
            <Test1 />
            <Test2 />
        </>
    )
}

export default Test;
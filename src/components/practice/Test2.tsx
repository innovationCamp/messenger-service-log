import { useEffect, memo } from "react";

const Test2 = () => {
    console.log("Test2 hi");
    useEffect(() => {
        console.log("Test2 hi useEffect")
    }, [])
    return (
        <>
            <h2> test2 </h2>
        </>
    )
}

// export default memo(Test2);
export default Test2;
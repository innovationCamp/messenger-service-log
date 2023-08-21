import { useEffect, memo } from "react";

const Test1 = () => {
    console.log("Test1 hi");
    useEffect(() => {
        console.log("Test1 hi useEffect")
    }, [])
    return(
        <>
            <h2> test1 </h2>
        </>
    )
}

// export default memo(Test1);
export default Test1;
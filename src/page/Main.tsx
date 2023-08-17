import BodyContent from "@/components/main/BodyContent";
import ButtonContainer from "@/components/main/ButtonContainer";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import LogContainer from "@/components/main/LogContainer";
import ModalContainer from "@/components/main/ModalContainer";
import { useEffect } from "react";

const Main = () => {

    useEffect(() => {
    }, [])
    return (
        <>
            <BodyContent>
                <Header />
                <ButtonContainer />
                <LogContainer />
                <Footer />
                <ModalContainer />
            </BodyContent>
        </>
    )
}

export default Main;

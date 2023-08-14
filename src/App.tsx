import Header from "@/components/Header";
import { RecoilRoot } from "recoil";
import BodyContent from "./components/BodyContent";
import ButtonContainer from "./components/ButtonContainer";
import Footer from "./components/Footer";
import LogContainer from "./components/LogContainer";
import ModalContainer from "./components/ModalContainer";

const App = () => {
    return (
        <RecoilRoot>
            <BodyContent>
                <Header />
                <ButtonContainer />
                <LogContainer />
                <Footer />
                <ModalContainer />
            </BodyContent>
        </RecoilRoot>
    )
}

export default App;

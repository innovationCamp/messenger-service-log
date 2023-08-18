import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyle from "@/components/styled/Global.styled";
import Chat from "./page/Chat";
import Main from "./page/Main";
import { CookiesProvider } from 'react-cookie';
import Forbidden from "./page/Forbidden";
import NoPage from "./page/NoPage";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <RecoilRoot>
                <CookiesProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/chat" element={<Chat />} />
                            <Route path="/forbidden" element={<Forbidden />} />
                            <Route path="*" element={<NoPage />} />
                        </Routes>
                    </BrowserRouter>
                </CookiesProvider>
            </RecoilRoot>
        </>
    )
}

export default App;

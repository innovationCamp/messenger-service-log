import * as S from "@/components/styled/BodyContent.styled";
import { createContext, ReactNode } from "react";

interface BodyContentProps {
    children: ReactNode;
}

const modalShow = createContext({
    signUpModalshow: false,
});

const BodyContent = ({ children }: BodyContentProps) => {
    return (
        <S.BodyContent>
            {children}
        </S.BodyContent>
    )
}

export default BodyContent;
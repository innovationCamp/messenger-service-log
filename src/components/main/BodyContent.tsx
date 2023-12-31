import * as S from "@/components/main/styled/BodyContent.styled";
import { ReactNode } from "react";

interface BodyContentProps {
    children: ReactNode;
}

const BodyContent = ({ children }: BodyContentProps) => {
    return (
        <S.BodyContent>
            {children}
        </S.BodyContent>
    )
}

export default BodyContent;
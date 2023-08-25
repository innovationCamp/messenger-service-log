import * as S from "@/components/chat/styled/ContextMenu.styled";
import { memo } from "react";

interface contextMenuProps {
    x: string,
    y: string,
}

const ContextMenu = ({ x, y }: contextMenuProps) => {
    return (
        <S.Wrapper
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            x={x}
            y={y}
        >
            <S.Menu>
                <S.Item>
                    <S.Span>reply</S.Span>
                </S.Item>
                <S.Item>
                    <S.Span>share</S.Span>
                </S.Item>
                <S.Item>
                    <S.Span>delete</S.Span>
                </S.Item>
            </S.Menu>
        </S.Wrapper>
    )
}

export default memo(ContextMenu);
import * as S from "@/components/chat/styled/ContextMenu.styled";

interface contextMenuProps {
    x: string,
    y: string,
}

const ContextMenu = ({ x, y }: contextMenuProps) => {
    return (
        <S.Wrapper x={x} y={y}>
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

export default ContextMenu;
import { useContext } from "react";
import Memo from "./Memo";
import AddMemo from "./AddMemo";
import styled from "styled-components";
import { ColorContext } from "../contexts/ColorContext";
import { IState } from "App";

const StyledMemoContainer = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

interface Props {
  memos: IState["memos"];
  handleAddMemo: (text: string, color: string) => void;
  handleDeleteMemo: (id: string) => void;
}

const MemoList = ({ memos, handleAddMemo, handleDeleteMemo }: Props) => {
  const { selectedColor } = useContext(ColorContext);
  return (
    <StyledMemoContainer>
      {selectedColor && <AddMemo handleAddMemo={handleAddMemo} />}
      {memos.map((memo) => (
        <Memo
          key={memo.id}
          id={memo.id}
          text={memo.text}
          date={memo.date}
          color={memo.color}
          handleDeleteMemo={handleDeleteMemo}
        />
      ))}
    </StyledMemoContainer>
  );
};

export default MemoList;

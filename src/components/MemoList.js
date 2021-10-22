import Memo from "./Memo";
import AddMemo from "./AddMemo";
import styled from "styled-components";

const StyledMemoContainer = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const MemoList = ({
  memos,
  handleAddMemo,
  handleDeleteMemo,
  selectedColor,
}) => {
  return (
    <StyledMemoContainer>
      {selectedColor && (
        <AddMemo handleAddMemo={handleAddMemo} selectedColor={selectedColor} />
      )}

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

import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

const StyledMemo = styled.article`
  background-color: ${(props) => props.color};
  border-radius: 1em;
  padding: 1em;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledDeleteIcon = styled(AiOutlineDelete)`
  cursor: pointer;
  font-size: 1rem;
`;

const Memo = ({ id, text, date, color, handleDeleteMemo }) => {
  return (
    <StyledMemo color={color}>
      <span>{text}</span>
      <div>
        <small>{date}</small>
        <StyledDeleteIcon onClick={() => handleDeleteMemo(id)} size="1.3em" />
      </div>
    </StyledMemo>
  );
};

export default Memo;

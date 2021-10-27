import { useState, useContext } from "react";
import { colorContext } from "../contexts/ColorContext";
import styled from "styled-components";
import { AiOutlineSave } from "react-icons/ai";

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

const StyledTextArea = styled.textarea`
  border: none;
  resize: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const StyledSaveIcon = styled(AiOutlineSave)`
  font-size: 1rem;
  cursor: pointer;
`;

const AddMemo = ({ handleAddMemo }) => {
  const [memoText, setMemoText] = useState("");
  const { selectedColor } = useContext(colorContext);
  const characterLimit = 200;
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0)
      setMemoText(e.target.value);
  };

  const handleSaveClick = () => {
    if (memoText.trim().length > 0) {
      handleAddMemo(memoText, selectedColor);
      setMemoText("");
    }
  };

  return (
    <StyledMemo color={selectedColor}>
      <StyledTextArea
        placeholder="Add New Memo..."
        cols="10"
        rows="8"
        value={memoText}
        onChange={handleChange}
      ></StyledTextArea>
      <div>
        <small>{characterLimit - memoText.length} Remaining</small>
        <StyledSaveIcon onClick={handleSaveClick} />
      </div>
    </StyledMemo>
  );
};

export default AddMemo;

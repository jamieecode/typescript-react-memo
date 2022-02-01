import { useState, useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import styled from "styled-components";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSave } from "react-icons/ai";

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

const StyledButtons = styled.div`
  width: 3.8rem;
`;

const StyledSaveIcon = styled(AiOutlineSave)`
  cursor: pointer;
  font-size: 1.2rem;
  width: 1.7rem;
  height: 1.7rem;
  &:hover {
    transform: translate(0, -3px);
    transition: 0.2s linear;
  }
`;

const StyledEditIcon = styled(AiOutlineEdit)`
  cursor: pointer;
  font-size: 1.2rem;
  width: 1.7rem;
  height: 1.7rem;
  &:hover {
    transform: translate(0, -3px);
    transition: 0.2s linear;
  }
`;

const StyledDeleteIcon = styled(AiOutlineDelete)`
  cursor: pointer;
  font-size: 1rem;
  width: 1.7rem;
  height: 1.7rem;
  &:hover {
    transform: translate(0, -3px);
    transition: 0.2s linear;
  }
`;

const StyledTextArea = styled.textarea`
  border: none;
  resize: none;
  opacity: 0.8;
  font-family: inherit;
  font-size: inherit;
  &:focus {
    outline: none;
  }
`;

interface Props {
  id: string;
  text: string;
  date: string;
  color?: string;
  handleDeleteMemo: (id: string) => void;
  handleEditMemo: (id: string, text: string) => void;
}

const Memo = ({ id, text, date, color, handleEditMemo }: Props) => {
  const [editMemo, setEditMemo] = useState(false);
  const [newMemoText, setNewMemoText] = useState(text);
  const { setOpenModal, setConfirmDelete } = useContext(ModalContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMemoText(e.target.value);
  };

  return (
    <>
      <StyledMemo color={color}>
        {editMemo ? (
          <StyledTextArea
            onChange={handleInputChange}
            defaultValue={text}
            autoFocus
          ></StyledTextArea>
        ) : (
          <span>{text}</span>
        )}

        <div>
          <small>{date}</small>
          {editMemo ? (
            <StyledSaveIcon
              onClick={() => {
                if (newMemoText.length > 0) {
                  handleEditMemo(id, newMemoText);
                  setEditMemo(false);
                }
              }}
            />
          ) : (
            <StyledButtons>
              <StyledEditIcon
                onClick={() => {
                  setEditMemo(true);
                }}
              />
              <StyledDeleteIcon
                onClick={() => {
                  setConfirmDelete(id);
                  setOpenModal(true);
                }}
                size="1.3em"
              />
            </StyledButtons>
          )}
        </div>
      </StyledMemo>
    </>
  );
};

export default Memo;

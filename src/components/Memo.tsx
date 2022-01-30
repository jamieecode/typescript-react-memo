import { useState } from "react";

import styled from "styled-components";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

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
  width: 3.5rem;
`;

const StyledEditIcon = styled(AiOutlineEdit)`
  cursor: pointer;
  font-size: 1.2rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  &:hover {
    background-color: white;
    transition: 1s;
  }
`;

const StyledDeleteIcon = styled(AiOutlineDelete)`
  cursor: pointer;
  font-size: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  &:hover {
    background-color: white;
    transition: 1s;
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

const Memo = ({
  id,
  text,
  date,
  color,
  handleDeleteMemo,
  handleEditMemo,
}: Props) => {
  const [editMemo, setEditMemo] = useState(false);
  const [newMemoText, setNewMemoText] = useState(text);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMemoText(e.target.value);
  };
  return (
    <StyledMemo color={color}>
      {editMemo ? (
        <input type="text" onChange={handleInputChange} defaultValue={text} />
      ) : (
        <span>{text}</span>
      )}

      <div>
        <small>{date}</small>
        {editMemo ? (
          <button
            onClick={() => {
              if (newMemoText.length > 0) {
                handleEditMemo(id, newMemoText);
                setEditMemo(false);
              }
            }}
          >
            save
          </button>
        ) : (
          <StyledButtons>
            <StyledEditIcon
              onClick={() => {
                setEditMemo(true);
              }}
            />
            <StyledDeleteIcon
              onClick={() => handleDeleteMemo(id)}
              size="1.3em"
            />
          </StyledButtons>
        )}
      </div>
    </StyledMemo>
  );
};

export default Memo;

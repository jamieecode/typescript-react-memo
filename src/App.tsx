import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import MemoList from "./components/MemoList";
import Search from "./components/Search";
import Header from "./components/Header";
import styled from "styled-components";
import { ColorContext } from "./contexts/ColorContext";
import { ModalContext } from "./contexts/ModalContext";
import Modal from "components/Modal";

const StyledContainer = styled.section`
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  min-height: 100vh;
`;

export interface IState {
  memos: {
    id: string;
    text: string;
    date: string;
    color?: string;
  }[];
}

const App = () => {
  const [memos, setMemos] = useState<IState["memos"]>([]);
  const [searchText, setSearchText] = useState("");
  const [openPalette, setOpenPalette] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState("");

  useEffect(() => {
    const savedMemos = JSON.parse(
      localStorage.getItem("react-memo-data") || ""
    );

    if (savedMemos) {
      setMemos(savedMemos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-memo-data", JSON.stringify(memos));
  }, [memos]);

  const addMemo = (text: string, color: string): void => {
    const date = new Date();
    const newMemo = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      color: color,
    };
    const newMemos = [...memos, newMemo];
    setMemos(newMemos);
  };

  const deleteMemo = (id: string) => {
    const newMemos = memos.filter((memo) => memo.id !== id);
    setMemos(newMemos);
  };

  const editMemo = (id: string, text: string) => {
    const newMemos = memos.map((memo) => ({
      ...memo,
      text: memo.id === id ? text : memo.text,
    }));
    setMemos(newMemos);
  };

  return (
    <StyledContainer>
      <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
        <ModalContext.Provider
          value={{ openModal, setOpenModal, confirmDelete, setConfirmDelete }}
        >
          <Header
            handleOpenPalette={setOpenPalette}
            openPalette={openPalette}
          />
          <Search handleSearchMemo={setSearchText} />
          {openModal && <Modal handleDeleteMemo={deleteMemo} />}
          <MemoList
            memos={memos.filter((memo) =>
              memo.text.toLowerCase().includes(searchText)
            )}
            handleAddMemo={addMemo}
            handleDeleteMemo={deleteMemo}
            handleEditMemo={editMemo}
          />
        </ModalContext.Provider>
      </ColorContext.Provider>
    </StyledContainer>
  );
};

export default App;

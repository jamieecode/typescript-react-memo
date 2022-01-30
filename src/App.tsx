import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import MemoList from "./components/MemoList";
import Search from "./components/Search";
import Header from "./components/Header";
import styled from "styled-components";
import { ColorContext } from "./contexts/ColorContext";

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
  const [memos, setMemos] = useState<IState["memos"]>([
    {
      id: "1234",
      text: "coding along",
      date: "2021-01-17",
      color: "#9BDE7E",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [openPalette, setOpenPalette] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

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
        <Header handleOpenPalette={setOpenPalette} openPalette={openPalette} />
        <Search handleSearchMemo={setSearchText} />
        <MemoList
          memos={memos.filter((memo) =>
            memo.text.toLowerCase().includes(searchText)
          )}
          handleAddMemo={addMemo}
          handleDeleteMemo={deleteMemo}
          handleEditMemo={editMemo}
        />
      </ColorContext.Provider>
    </StyledContainer>
  );
};

export default App;

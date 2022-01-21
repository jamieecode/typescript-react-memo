import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #e9ecef;
  border-radius: 2em;
  padding: 0.3em;
  margin-bottom: 1.5em;
`;

const StyledInput = styled.input`
  border: none;
  background-color: #e9ecef;
  width: 90%;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const StyledDeleteIcon = styled(AiOutlineSearch)`
  cursor: pointer;
  font-size: 1.7rem;
`;

interface Props {
  handleSearchMemo: (text: string) => void;
}

const Search = ({ handleSearchMemo }: Props) => {
  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        placeholder="Find Your Memo.."
        onChange={(e) => handleSearchMemo(e.target.value)}
      />
      <StyledDeleteIcon />
    </StyledInputContainer>
  );
};

export default Search;

import ColorPalette from "./ColorPalette";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1em;
  h1 {
    font-size: 2.5rem;
  }
`;

const StyledPlusIcon = styled(AiOutlinePlusCircle)`
  font-size: 3rem;
  cursor: pointer;
  padding-left: 0.5em;
`;

const Header = ({ handleOpenPalette, openPalette }) => {
  return (
    <StyledHeader>
      <h1>Memo</h1>
      <StyledPlusIcon onClick={() => handleOpenPalette(!openPalette)} />
      {openPalette && <ColorPalette />}
    </StyledHeader>
  );
};

export default Header;

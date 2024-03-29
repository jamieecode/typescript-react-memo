import ColorPalette from "./ColorPalette";
import { motion } from "framer-motion";
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

const StyledPlusButton = styled(motion.button)`
  font-size: 2rem;
  margin-left: 0.5em;
  animation: pulse 0.9s infinite ease-in-out;
  &:hover {
    animation-play-state: paused;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

interface Props {
  openPalette: boolean;
  handleOpenPalette: (p: boolean) => void;
}

const Header = ({ handleOpenPalette, openPalette }: Props) => {
  return (
    <StyledHeader>
      <h1>Memo</h1>
      <StyledPlusButton
        whileHover={{
          scale: 1.1,
        }}
        onClick={() => handleOpenPalette(!openPalette)}
      >
        <AiOutlinePlusCircle />
      </StyledPlusButton>

      {openPalette && <ColorPalette />}
    </StyledHeader>
  );
};

export default Header;

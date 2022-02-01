import { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledPalette = styled(motion.div)`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin: 0 0.7em;
  background-color: ${(props) => props.color};
  cursor: pointer;
  boxshadow: "0 0 0 0 rgb(47, 72, 88)";
`;

const ColorPalette = () => {
  const colors = ["#F9F871", "#9BDE7E", "#4BBC8E", "#039590", "#1C6E7D"];
  const { setSelectedColor } = useContext(ColorContext);

  return (
    <>
      {colors.map((color) => (
        <StyledPalette
          key={color}
          color={color}
          onClick={() => setSelectedColor(color)}
          initial={{ x: 0 }}
          animate={{ x: 30 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 0 3px rgb(47, 72, 88)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      ))}
    </>
  );
};

export default ColorPalette;

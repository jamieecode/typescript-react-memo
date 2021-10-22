import React from "react";
import styled from "styled-components";

const StyledPalette = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 1em;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ColorPalette = ({ handleSelectedColor }) => {
  const colors = ["#F9F871", "#9BDE7E", "#4BBC8E", "#039590", "#1C6E7D"];
  return (
    <>
      {colors.map((color) => (
        <StyledPalette
          key={color}
          color={color}
          onClick={() => handleSelectedColor(color)}
        />
      ))}
    </>
  );
};

export default ColorPalette;

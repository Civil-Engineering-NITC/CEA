import React from "react";
import styled from "styled-components";

interface ColouredTextProps {
  text: string;
  size: string;
}

const ColorTextWrapper = styled.div`
  font-size: 5rem;

  @media (max-width: 1220px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

export const ColouredText: React.FC<ColouredTextProps> = ({ text, size }) => {
  return <ColorTextWrapper>{text}</ColorTextWrapper>;
};

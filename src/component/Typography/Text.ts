import styled from "styled-components";

interface TextProps {
  size?: string;
  weight?: string;
  color?: string;
}

export const text = styled.p<TextProps>`
  font-size: ${({ size }) => size || "30px"};
  font-weight: ${({ weight }) => weight || "400"};
  color: ${({ color }) => color || "black"};
`;

import React from "react";
import H2 from "../../general/H2";
import styled from "@emotion/styled";

const StyledGetInTouch = styled.section`
  background-color: ${({ theme }) => theme.colors.draculaOrchid};
`;

const StyledH2 = styled(H2)`
  color: ${({ theme }) => theme.colors.white};
`;

const GetInTouch = () => {
  return (
    <StyledGetInTouch>
      <StyledH2>Get in touch</StyledH2>
    </StyledGetInTouch>
  );
};

export default GetInTouch;

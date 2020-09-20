import React from "react";
import styled from "@emotion/styled";
import ContentLayout from "../../content-layout";

const TextBox = styled.div`
  max-width: 600px;
  text-align: center;
  padding: 0 1rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
`;

const StyledTextBlock = styled.section`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.draculaOrchid};
`;

const TextBlock = ({ children }) => {
  return (
    <StyledTextBlock>
      <ContentLayout>
        <TextBox>{children}</TextBox>
      </ContentLayout>
    </StyledTextBlock>
  );
};

export default TextBlock;

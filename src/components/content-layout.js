import React from "react";
import styled from "@emotion/styled";

const StyledContentLayout = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const ContentLayout = ({ children }) => (
  <StyledContentLayout>{children}</StyledContentLayout>
);

export default ContentLayout;

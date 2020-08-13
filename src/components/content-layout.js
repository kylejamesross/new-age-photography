import React from "react";

const StyledContentLayout = styled.div`
  max-width: 1100px;
`;

const ContentLayout = ({ children }) => (
  <StyledContentLayout>{children}</StyledContentLayout>
);

export default ContentLayout;

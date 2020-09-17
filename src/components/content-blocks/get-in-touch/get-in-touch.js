import React, { useState } from "react";
import H2 from "../../general/H2";
import styled from "@emotion/styled";
import {
  TextInput,
  Form,
  FormField,
  Box,
  Button,
  TextArea,
  Grommet,
} from "grommet";

const StyledGetInTouch = styled.section`
  background-color: ${({ theme }) => theme.colors.draculaOrchid};
  padding-bottom: 1rem;
`;

const StyledH2 = styled(H2)`
  color: ${({ theme }) => theme.colors.white};
  &:before {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const StyledFormField = styled(FormField)`
  color: ${({ theme }) => theme.colors.white};
  > div {
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

const GetInTouch = () => {
  const [value, setValue] = useState({});

  return (
    <StyledGetInTouch>
      <ContentWrapper>
        <StyledH2>Request a quote</StyledH2>
        <Form
          value={value}
          onChange={nextValue => setValue(nextValue)}
          onReset={() => setValue({})}
          onSubmit={({ value }) => {}}
        >
          <StyledFormField name="name" htmlfor="name-id" label="Name">
            <TextInput id="name-id" name="name" />
          </StyledFormField>
          <StyledFormField name="email" htmlfor="email-id" label="Email">
            <TextInput id="email-id" name="email" />
          </StyledFormField>
          <StyledFormField name="phone" htmlfor="phone-id" label="Phone">
            <TextInput id="phone-id" name="phone" />
          </StyledFormField>
          <StyledFormField
            name="message"
            htmlfor="message-id"
            label="Your Message"
          >
            <TextArea id="message-id" name="message" size="medium" />
          </StyledFormField>
          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Submit" />
          </Box>
        </Form>
      </ContentWrapper>
    </StyledGetInTouch>
  );
};

export default GetInTouch;

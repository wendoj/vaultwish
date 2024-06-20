import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  link: string;
}

export const VerificationEmail: React.FC<Readonly<EmailProps>> = ({ link }: EmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>VaultWish</Heading>
        <Text style={paragraph}>Hi,</Text>
        <Text style={paragraph}>
          Welcome to VaultWish, please verify your email address to get started
          by clicking the button below. If you did not sign up for an account,
          you can safely ignore this email.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={link}>
            Get started
          </Button>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default VerificationEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  margin: 0,
  padding: 0,
  boxSizing: "border-box" as const,
  position: "relative" as const,
  textDecoration: "none",
};

const container = {
  margin: "0 auto",
  padding: "60px",
  maxWidth: "600px",
  color: "#333",
  lineHeight: "1.5",
  fontSize: "16px",
  backgroundColor: "#fff",
  borderRadius: "6px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  border: "1px solid #f0f0f0",
  overflow: "hidden",
  marginBottom: "24px",
  marginTop: "24px",
  width: "100%",
  boxSizing: "border-box" as const,
  display: "block",
  position: "relative" as const,
  textDecoration: "none",
};

const heading = {
  margin: "0 auto",
  textAlign: "center" as const,
  fontSize: "24px",
  padding: "0 0 24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
  padding: "12px 0 0",
};

const button = {
  backgroundColor: "#ff495c",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
  fontWeight: 500,
};

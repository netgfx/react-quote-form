import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
  } from "@react-email/components";
import React from "react";
  
  interface WelcomeEmailProps {
    name: string;
  }
  
  export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({
    name,
  }) => (
    <Html>
      <Head />
      <Preview>Glad to make your acquaintance</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>You will hear from us soon</Heading>
          <Text style={text}>
            Thank you {name} for contacting us. We
            will send you a note when we have something new to share.
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default WelcomeEmail;
  
  const main = {
    backgroundColor: "#000000",
    margin: "0 auto",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };
  
  const container = {
    margin: "auto",
    padding: "96px 20px 64px",
  };
  
  const h1 = {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "40px",
    margin: "0 0 20px",
  };
  
  const text = {
    color: "#aaaaaa",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "0 0 40px",
  };
import styled from "styled-components";

const Footer = () => {
  return <FooterContainer>Copyright © 2021 mdesanker</FooterContainer>;
};

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  background-color: rgb(52, 52, 52);
  color: white;
  letter-spacing: 0.1rem;
`;

export default Footer;

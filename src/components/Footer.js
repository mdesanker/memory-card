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
  padding: 0.5 rem;
`;

export default Footer;

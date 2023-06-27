import styled from 'styled-components';

const FooterPositioner = styled.footer`
  background-color: hsl(210, 8%, 15%);
  background-image: none;
  background-position: top left;
  background-repeat: no-repeat;
  border-top: 0;
  background-size: auto;
  color: hsl(210, 8%, 60%);
  padding-top: 0;
  padding-bottom: 0;
`;

const FooterContainer = styled.div`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 12px 12px 12px;
  display: flex;
  flex-flow: row wrap;
`;

const FooterLogoDiv = styled.div`
  flex: 0 0 64px;
  margin: 0 0 32px 0;
`;

const FooterNav = styled.div`
  display: flex;
  flex: 2 1 auto;
  flex-wrap: wrap;
`;

const FooterCol = styled.div`
  padding: 0 calc(12px * 1) var(24px * 1) 0;
  flex: 1 0 auto;
`;

const FooterTitle = styled.h5`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  margin-top: 0px;
  margin-bottom: calc(12px * 1);
  color: hsl(210, 8%, 75%);
  line-height: calc((13 + 4) / 13);
`;

const FooterList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0 calc(12px * 1) calc(24px * 1) 0;
`;

const FooterListItem = styled.a`
  color: hsl(210, 8%, 60%);
  padding: calc(4px * 1) 0;
  line-height: calc((13 + 4) / 13);
  display: block;
  text-decoration: none;
  font-size: 13px;
`;

const FooterRightSection = styled.div`
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
`;

const FooterRightList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FooterRightListItem = styled.a`
  color: var(--theme-footer-link-color);
  padding: calc(4px * 1) 0;
  line-height: calc((13px * 1) / 13);
  display: inline-block;
  text-decoration: none;
  margin: 2px 5px;
  font-size: 11px;
`;

const FooterRightP = styled.p`
  margin-top: auto;
  margin-bottom: calc(24px * 1);
  font-size: 11px;
`;

const Footer = () => {
  return (
    <FooterPositioner>
      <FooterContainer>
        <FooterLogoDiv>
          <svg width={32} height={37}>
            <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" />
            <path
              d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
              fill="#F48024"
            />
          </svg>
        </FooterLogoDiv>
        <FooterNav>
          <FooterCol>
            <FooterTitle>STACK OVERFLOW</FooterTitle>
            <FooterList>
              <FooterListItem>Questions</FooterListItem>
              <FooterListItem>Help</FooterListItem>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <FooterTitle>PRODUCTS</FooterTitle>
            <FooterList>
              <FooterListItem>Teams</FooterListItem>
              <FooterListItem>Advertising</FooterListItem>
              <FooterListItem>Collectives</FooterListItem>
              <FooterListItem>Talent</FooterListItem>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <FooterTitle>COMPANY</FooterTitle>
            <FooterList>
              <FooterListItem>About</FooterListItem>
              <FooterListItem>Press</FooterListItem>
              <FooterListItem>Work Here</FooterListItem>
              <FooterListItem>Legal</FooterListItem>
              <FooterListItem>Privacy Policy</FooterListItem>
              <FooterListItem>Terms of Service</FooterListItem>
              <FooterListItem>Contact Us</FooterListItem>
              <FooterListItem>Cookie Settings</FooterListItem>
              <FooterListItem>Cookie Policy</FooterListItem>
            </FooterList>
          </FooterCol>
          <FooterCol>
            <FooterTitle>STACK EXCHANGE NETWORK</FooterTitle>
            <FooterList>
              <FooterListItem>Technology</FooterListItem>
              <FooterListItem>Culture & recreation</FooterListItem>
              <FooterListItem>Life & arts</FooterListItem>
              <FooterListItem>Science</FooterListItem>
              <FooterListItem>Professional</FooterListItem>
              <FooterListItem>Business</FooterListItem>
              <FooterListItem>API</FooterListItem>
              <FooterListItem>Data</FooterListItem>
            </FooterList>
          </FooterCol>
        </FooterNav>
        <FooterRightSection>
          <FooterRightList>
            <FooterRightListItem>Blog</FooterRightListItem>
            <FooterRightListItem>Facebook</FooterRightListItem>
            <FooterRightListItem>Twitter</FooterRightListItem>
            <FooterRightListItem>Linkdin</FooterRightListItem>
            <FooterRightListItem>Instagram</FooterRightListItem>
          </FooterRightList>
          <FooterRightP>
            Site design / logo © 2023 Stack Exchange Inc; user contributions licensed under
          </FooterRightP>
        </FooterRightSection>
      </FooterContainer>
    </FooterPositioner>
  );
};

export default Footer;

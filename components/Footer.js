import styled from '@emotion/styled';
import { colors } from '../components/Colors';

export default function Footer() {
  return (
    <FooterWrapper>
      <CopyRights
        href="https://studio-spoon.co.jp"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; STUDIO SPOON.inc
      </CopyRights>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/images/common/footer_bg.svg) center 10px / cover repeat-x;
  z-index: 10;
`;
const CopyRights = styled.a`
  font-size: 10px;
  color: ${colors.white};
  margin-top: 14px;
`;

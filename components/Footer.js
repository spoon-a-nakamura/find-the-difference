import styled from '@emotion/styled'

export default function Footer() {
  return (
    <FooterWrapper>
      <CopyRights
        href='https://studio-spoon.co.jp'
        target='_blank'
        rel='noopener noreferrer'
      >
        &copy; STUDIO SPOON.inc
      </CopyRights>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width: 100%;
  height: 40px;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(/images/common/footer_bg.svg) center 10px / cover repeat-x;
`
const CopyRights = styled.a`
  font-size: 10px;
  color: #fff;
  margin-top: 14px;
`

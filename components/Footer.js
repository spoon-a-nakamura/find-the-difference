import styled from '@emotion/styled'

export default function Footer() {
  return (
    <FooterWrapper>
      <a
        href='https://studio-spoon.co.jp'
        target='_blank'
        rel='noopener noreferrer'
      >
        &copy; STUDIO SPOON.inc
      </a>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 10px;
  font-size: 12px;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`

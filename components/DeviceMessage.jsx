import styled from "@emotion/styled"

const Root = styled.div`
  background: rgba(41, 140, 109, .71);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 21;
  display: none;
  @media (orientation: landscape), (min-width: 769px) {
    display: flex;
  }
`

// 402 416.4
const Message = styled.p`
  text-indent: -9999px;
  background: url('/images/message.svg') 50% / contain no-repeat;
  width: 402px;
  max-width: 100%;
  max-height: 90%;
  aspect-ratio: 402/416.2;
  margin: auto;
`

const DeviceMessage = () => (
  <Root>
    <Message>
      縦向きのスマートフォンでお楽しみください。パソコンの場合、ウィンドウ幅を縮めることで閲覧可能となります。
    </Message>
  </Root>
)

export default DeviceMessage
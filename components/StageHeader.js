import styled from '@emotion/styled'
import { colors } from '../components/Colors'

export default function StageHeader({
  stageCategory,
  stageId,
  stageName,
  countTimer,
  onClickShowModal,
  stageSlug,
}) {
  return (
    <StageHeaderWrapper stageSlug={stageSlug}>
      <HomeButton
        onClick={onClickShowModal}
        src='/images/stage/button_home.svg'
        alt='homeに戻る'
      />
      <StageHeaderTitle>
        <StageTitle>
          {stageCategory}ステージ {stageId}
        </StageTitle>
        <StageName>{stageName}</StageName>
      </StageHeaderTitle>
      <StageTimer>{countTimer}</StageTimer>
    </StageHeaderWrapper>
  )
}

const StageHeaderWrapper = styled.header`
  width: 100%;
  height: 77px;
  padding: 0 18px 15px 25px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ stageSlug }) =>
    stageSlug === 'animal'
      ? 'url(/images/stage/stage_heading_01.svg) center / cover no-repeat'
      : 'url(/images/stage/stage_heading_02.svg) center / cover no-repeat'};
  margin-bottom: auto;
`
const HomeButton = styled.img`
  position: relative;
`
const StageHeaderTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: ${colors.white};
  width: 100%;
  position: relative;
`
const StageTitle = styled.span`
  font-size: 12px;
  display: block;
`
const StageName = styled.span`
  margin-top: 5px;
  font-size: 20px;
`
const StageTimer = styled.p`
  font-size: 14px;
  background: ${colors.white};
  width: 52px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 100px;
  color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`

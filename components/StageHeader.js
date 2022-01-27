import styled from '@emotion/styled';
import { colors } from '../components/Colors';

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
        src="/images/stage/button_home.svg"
        alt="homeに戻る"
      />
      <StageHeaderTitle>
        <StageTitle>
          {stageCategory}ステージ {stageId}
        </StageTitle>
        <StageName>{stageName}</StageName>
      </StageHeaderTitle>
      <StageTimer>{countTimer}</StageTimer>
    </StageHeaderWrapper>
  );
}

const StageHeaderWrapper = styled.header`
  width: 100%;
  height: 7.7rem;
  padding: 0 1.8rem 1.5rem 2.5rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ stageSlug }) =>
    stageSlug === 'animal'
      ? 'url(/images/stage/stage_heading_01.svg) center / cover no-repeat'
      : 'url(/images/stage/stage_heading_02.svg) center / cover no-repeat'};
  margin-bottom: auto;
`;
const HomeButton = styled.img`
  position: relative;
  width: 2.938rem;
`;
const StageHeaderTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: ${colors.white};
  width: 100%;
  position: relative;
`;
const StageTitle = styled.span`
  font-size: 1.2rem;
  display: block;
`;
const StageName = styled.span`
  margin-top: 0.5rem;
  font-size: 2rem;
`;
const StageTimer = styled.p`
  font-size: 1.4rem;
  background: ${colors.white};
  width: 5.2rem;
  height: 4rem;
  box-sizing: border-box;
  border-radius: 10rem;
  color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

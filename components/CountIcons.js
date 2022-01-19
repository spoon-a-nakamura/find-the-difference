import styled from '@emotion/styled';

export default function CountIcons({ states, stageSlug }) {
  const onFlag =
    stageSlug === 'animal' ? (
      <IconImage src="/images/stage/icon_count_on_01.svg" alt="on" />
    ) : (
      <IconImage src="/images/stage/icon_count_on_02.svg" alt="on" />
    );
  const offFlag = (
    <IconImage src="/images/stage/icon_count_off.svg" alt="off" />
  );
  return (
    <IconsWrapper>
      <Icons>
        {states.map((state, index) => (
          <Icon key={index}>{state ? onFlag : offFlag}</Icon>
        ))}
      </Icons>
    </IconsWrapper>
  );
}
const IconsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icons = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.li`
  margin-top: -2px;
`;
const IconImage = styled.img`
  transform: rotate(-45deg);
  width: 40px;
  height: 40px;
`;

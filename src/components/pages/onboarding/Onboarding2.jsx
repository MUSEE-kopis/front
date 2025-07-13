import styled from "styled-components"
import { Button, Div, Text } from "../../common/div"
import { Rank1OnboardingIcon, Rank2OnboardingIcon, Rank3OnboardingIcon, CheckedIcon } from "../../../assets/icons";
import { GRAY0, GRAY4, DIM } from "../../../constants/color";

const RankButton = styled(Button)`
  height: 110px;
  width: 100%;
  background-color: ${GRAY0};
  border: solid 1px ${GRAY4};
  display: flex;
  padding: 0;
  overflow: hidden;
  align-items: center;
  padding: 0 31px;
`;

const Filter = styled(Div)`
  width: 0;
  flex-grow: 0;
  ${({ $selected }) => $selected && `
    background-color: ${DIM};
    width: 100%;
    position: absolute;
    height: 100%;
    backdrop-filter: blur(1.5px);
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

const Onboarding2 = ({ username, setStep, rankType, setRankType }) => {
  const buttonDisabled = rankType === 0;

  return (
    <Div>
      <Text $size={16} $weight='MEDIUM'>
        {username}님은 어떤 유형인지 선택해주세요
      </Text>
      <Div $margin='72px 0 0' $gap='24px' $flex={true} $direction='column' $align='start'>
        <RankButton onClick={() => setRankType(1)}>
          <Rank3OnboardingIcon />
          <Text $size={12} $weight='MEDIUM' style={{ whiteSpace: 'pre-line', flexGrow: 1 }}>
            이제 막 뮤지컬에 입문했어요!{`\n`}
            어떤 작품을 볼 지 고민돼요
          </Text>
          <Filter $selected={rankType === 1}>
            {rankType === 1 && <CheckedIcon />}
          </Filter> 
        </RankButton>
        <RankButton onClick={() => setRankType(2)}>
          <Rank2OnboardingIcon />
          <Text $size={12} $weight='MEDIUM' style={{ whiteSpace: 'pre-line', flexGrow: 1 }}>
            좋아하는 뮤지컬이 있어요!{`\n`}
            종종 뮤지컬을 관람하며 힐링해요
          </Text>
          <Filter $selected={rankType === 2}>
            {rankType === 2 && <CheckedIcon />}
          </Filter> 
        </RankButton>
        <RankButton onClick={() => setRankType(3)}>
          <Rank1OnboardingIcon />
          <Text $size={12} $weight='MEDIUM' style={{ whiteSpace: 'pre-line', flexGrow: 1 }}>
            뮤지컬 빼면 시체!{`\n`}
            n차 관람도 즐기는 뮤덕이에요 
          </Text>
          <Filter $selected={rankType === 3}>
            {rankType === 3 && <CheckedIcon />}
          </Filter>
        </RankButton>
        <Button 
          disabled={buttonDisabled} 
          $weight='BOLD' 
          $margin='24px 0 0' 
          $width='95px' 
          style={{ alignSelf: 'end'}}
          onClick={() => setStep(3)}
        >
          다음
        </Button>
      </Div>
    </Div>
  )
}

export default Onboarding2;
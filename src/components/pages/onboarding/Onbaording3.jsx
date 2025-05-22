import styled from "styled-components"
import { Button, Div, Text } from "../../common/div"
import { DIM2 } from "../../../constants/color";
import { CheckedIcon } from "../../../assets/icons";

const Item = styled.div`
  height: 153px;
  width: calc((100% - 30px) / 3);
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
`;

const Poster = styled.img`
  width: 100%;
  height: 132px;
`;

const Filter = styled(Div)`
  flex-grow: 0;
  display: none;
  ${({ $selected }) => $selected && `
    background-color: ${DIM2};
    width: 100%;
    position: absolute;
    backdrop-filter: blur(1.5px);
    top: 0;
    left: 0;
    height: 132px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `};
`;

const Onboarding3 = ({ step, datas, selectedDatas, selectPerformance, username, setStep }) => {
  const buttonDisabled = step === 3 ? selectedDatas.length < 4 : selectedDatas.length < 8;

  return (
    <Div>
      <Text $size={16} $weight='MEDIUM'>
        관심 있는 뮤지컬을 4개 {step === 4 && '더'} 골라주세요!
      </Text>
      <Text $weight='LIGHT' $margin='8px 0 0'>
        {username}님의 뮤지컬 취향을 알아가는 중이에요
      </Text>
      <Div $margin='72px 0 0' $gap='20px' $flex={true} $direction='column' $align='start'>
        <Div $width='100%' $flex={true} $wrap='wrap' $justify='start' $gap='15px'>
          {datas.slice((step - 3) * 15, (step - 2) * 15).map((data, idx) => {
            const isSelected = selectedDatas.includes(data.id);
            return (
              <Item 
                key={idx} 
                $weight='MEDIUM' 
                onClick={() => selectPerformance(data.id)}
              >
                <Poster src={data.poster} />
                <Text $size={12} >
                  {data.performanceName}
                </Text>
                <Filter $selected={isSelected}>
                  {isSelected && <CheckedIcon />}
                </Filter>
              </Item>
            )
          })}
        </Div>
        <Button 
          disabled={buttonDisabled} 
          $weight='BOLD' 
          $margin='0 0 54px' 
          $width='95px' 
          style={{ alignSelf: 'end'}}
          onClick={() => setStep(step + 1)}
        >
          다음
        </Button>
      </Div>
    </Div>
  )
}

export default Onboarding3;
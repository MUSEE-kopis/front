import { Div, Text } from "../../common/div";
import { GRAY3, NAVY, WHITE } from "../../../constants/color";

const PreferenceSummary = () => {
  return (
    <Div $flex={true} $align='start' $grow={0} $backgroundColor={WHITE} $width='100%' $direction='column' $padding='24px 26px' $margin='47px 0 0'>
      <Text $size={16} $weight='BOLD' $align='start'>나만의 뮤지컬 취향을 저장하세요</Text>
      <Text $size={14} $weight='LIGHT' $margin='4px 0 0' $align='start'>님의 취향을 기억해 작품을 추천해드릴게요</Text>
      <Div $flex={true} $backgroundColor={NAVY} $radius='16px' $width='100%' $direction='column' $margin='24px 0 0' $padding='18px 28px 27px 28px' $align='start'>
        <Text $align='start' $color={WHITE} $weight='LIGHT'>내 취향 요약</Text>
        <Div $flex={true} $margin='15px 0 0' $direction='column' $justify='start' $align='start' $gap='13px'>
          <Div $flex={true} $gap='11px'>
            <Div $width='36px' $height='36px' $radius='4px' $flex={true} $align='center' $justify='center'  style={{backgroundColor: 'rgba(247, 247, 247, 0.45)', fontSize: '21px'}}>🎭</Div>
            <Div $flex={true} $direction='column' $align='start'>
              <Text $color={GRAY3} $weight='SEMIBOLD'>관심 장르</Text>
              <Text $color={WHITE} $size={15} $weight='BOLD'>범죄, 스릴러, 판타지</Text>
            </Div>
          </Div>
          <Div $flex={true} $gap='11px'>
            <Div $width='36px' $height='36px' $radius='4px' $flex={true} $align='center' $justify='center'  style={{backgroundColor: 'rgba(247, 247, 247, 0.45)', fontSize: '21px'}}>⭐️</Div>
            <Div $flex={true} $direction='column' $align='start'>
              <Text $color={GRAY3} $weight='SEMIBOLD'>좋아하는 배우</Text>
              <Text $color={WHITE} $size={15} $weight='BOLD'>박강현, 옥주현, 김소현</Text>
            </Div>
          </Div>
          <Div $flex={true} $gap='11px'>
            <Div $width='36px' $height='36px' $radius='4px' $flex={true} $align='center' $justify='center'  style={{backgroundColor: 'rgba(247, 247, 247, 0.45)', fontSize: '21px'}}>🎟️</Div>
            <Div $flex={true} $direction='column' $align='start'>
              <Text $color={GRAY3} $weight='SEMIBOLD'>관심 작품</Text>
              <Text $color={WHITE} $size={15} $weight='BOLD'>5개</Text>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default PreferenceSummary;
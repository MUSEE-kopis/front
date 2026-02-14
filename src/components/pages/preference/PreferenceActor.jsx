import { Div, Text, Button } from "../../common/div";
import { GRAY5, NAVY, WHITE } from "../../../constants/color";

const PreferenceActor = () => {
  return (
    <Div $flex={true} $grow={0} $margin='16px 0 0' $backgroundColor={WHITE} $width='100%' $direction='column' $padding='20px 26px' $align='start'>
      <Div $flex={true} $justify='space-between' $width='100%'>
        <Text $size={16} $weight='BOLD'>보고싶은 배우</Text>
        <Text $size={14} $weight='LIGHT' $color={GRAY5} $cursor='pointer' style={{borderBottom: `1px solid ${GRAY5}`, paddingBottom: '1px', display: 'inline-block'}}>편집</Text>
      </Div>
      <Div $flex={true} $gap='10px' $margin='16px 0 0' $justify='start'>
        <Text $size={12} $weight='BOLD' $color={WHITE} $background={NAVY} $radius='32px' $padding='8px 10px'>박강현</Text>
        <Text $size={12} $weight='BOLD' $color={WHITE} $background={NAVY} $radius='32px' $padding='8px 10px'>옥주현</Text>
        <Text $size={12} $weight='BOLD' $color={WHITE} $background={NAVY} $radius='32px' $padding='8px 10px'>김소현</Text>
      </Div>
    </Div>
  )
}

export default PreferenceActor;
import { Div, Text } from "../../common/div";
import { NAVY, WHITE } from "../../../constants/color";

const PreferenceGenre = () => {
  return (
    <Div $flex={true} $grow={0} $margin='16px 0 0' $backgroundColor={WHITE} $width='100%' $direction='column' $padding='20px 26px' $align='start'>
      <Text $size={16} $weight='BOLD'>좋아하는 장르</Text>
      <Div $flex={true} $gap='10px' $margin='16px 0 0' $justify='start'>
        <Text $size={12} $weight='BOLD' $color={WHITE} $background={NAVY} $radius='32px' $padding='8px 10px'>범죄</Text>
        <Text $size={12} $weight='BOLD' $color={WHITE} $background={NAVY} $radius='32px' $padding='8px 10px'>스릴러</Text>
        <Text $size={12} $weight='BOLD' $color={WHITE} $background={NAVY} $radius='32px' $padding='8px 10px'>판타지</Text>
      </Div>
    </Div>
  )
}

export default PreferenceGenre;
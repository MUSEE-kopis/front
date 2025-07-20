import { Div, Text } from "../../common/div";
import { StarIcon } from "../../../assets/icons";
import { GRAY2, GRAY4 } from "../../../constants/color";

const Review = ({ datas = [] }) => {
  return (
    <Div $width='100%'>
      {datas.map((data, index) => (
        <Div $padding='16px 28px 10px' style={{borderBottom: `1px solid ${GRAY2}`}} key={index}>
          <Text $align='start'>
            {data?.username}
          </Text>
          <Div $flex={true} $justify='start' $margin='4px 0 6px' $gap='3px'>
            {Array.from({ length: data?.star }, (_, i) => (
              <StarIcon key={i} />
            ))}
          </Div>
          <Div $flex={true} $align='start' $justify='start' $gap='4px'>
            <Text $size={12} $align='start' $color={GRAY4} key={index}>
              {data?.castMembers?.map((member) => member.name).join(', ')}
            </Text>
          </Div>
          <Text $margin='3px 0 0' $whiteSpace='wrap' $align='start'>
            {data?.content}
          </Text>
        </Div>
        ))}
    </Div>
  )
}

export default Review;




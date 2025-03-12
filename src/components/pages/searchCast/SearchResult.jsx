import { GRAY5 } from "../../../constants/color";
import { Div, Text } from "../../common/div";
import styled from "styled-components";

const CastProfile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 4px;
`;

const SearchResult = ({ castMembers }) => {
  return (
    <Div $flex={true} $direction='column' $margin='40px 0 0'>
      {Object.entries(castMembers).map(([role, members]) => (
        <Div key={role} $flex={true} $margin='0 0 20px' $direction='column' $align='flex-start' $justify='flex-start' $width='100%'>
          <Text $align='left' $size={14} $weight='BOLD' $margin='0 0 8px'>{role || '기타'}</Text>
          <Div $flex={true} $gap='14px' $width='100%' $justify='flex-start'>
            {members.map(member => (
              <Div key={member.actorId} $grow='0'>
                <CastProfile src={member.url || '/assets/castMemberThumnail.png'} alt="profile" />
                <Text $color={GRAY5} $size={12} $align='left'>{member.name}</Text>
              </Div>
            ))}
          </Div>
        </Div>
      ))}
    </Div>
  )
}

export default SearchResult;
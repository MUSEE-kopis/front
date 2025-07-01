import { GRAY5 } from "../../../constants/color";
import { Div, Text } from "../../common/div";
import styled from "styled-components";
import { SelectedCastmemberIcon } from "../../../assets/icons";

const CastProfile = styled(Div)`
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: ${props => (props.$selected && props.$url) ? 'flex' : 'block'};
    background: ${props => props.$selected && props.$url 
        ? `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${props.$url}) lightgray 50% / cover no-repeat`
        : `url(${props.$url}) no-repeat center center / cover`};
`;

const SearchResult = ({ castMembers, selectedCastMembers, handleSelectCastMember }) => {
  const isSelected = (member) => {
    if (member.role) {
      return selectedCastMembers[member.role] === member.name;
    } else {
      return selectedCastMembers['기타'].includes(member.name);
    }
  }
  return (
    <Div $flex={true} $direction='column' $margin='40px 0 0'>
      {Object.entries(castMembers).map(([role, members]) => (
        <Div key={role} $flex={true} $margin='0 0 20px' $direction='column' $align='flex-start' $justify='flex-start' $width='100%'>
          <Text $align='left' $size={14} $weight='BOLD' $margin='0 0 8px'>{role || '기타'}</Text>
          <Div $flex={true} $gap='14px' $width='100%' $justify='flex-start'>
            {members.map(member => (
              <Div key={member.actorId} $grow='0' onClick={() => handleSelectCastMember(member)}>
                <Div $width='60px' $height='60px' $radius='4px' $overflow='hidden'>
                  <CastProfile $selected={isSelected(member)} $url={member.url || '/assets/castMemberThumnail.png'}>
                    <SelectedCastmemberIcon style={{display: `${isSelected(member) ? 'block' : 'none'}`}} />
                  </CastProfile>
                </Div>
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
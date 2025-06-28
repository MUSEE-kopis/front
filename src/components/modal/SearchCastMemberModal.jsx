import Modal from "./Modal";
import styled from "styled-components";
import { Button, Div, Text } from "../common/div";
import { GRAY5, GRAY2, GRAY3 } from "../../constants/color";
import SearchBar from "../pages/search/SearchBar";
import { AddIcon, SelectedIcon } from "../../assets/icons";

const Container = styled.div`
  width: 284px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  top: 50%;
  transform: translateY(-50%);
`;

const CastMemberList = styled(Div)`
  overflow-y: scroll;
  flex-grow: 0;
  margin: 26px 0 20px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 10px 14px;
  height: 198px;
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  flex-grow: 1;
  height: 40px;
  line-height: 40px;
  padding: 0;
  border-radius: 10px;
`;

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

const AddCastMemberButton = styled(Div)`
  cursor: pointer;
  width: 64px;
  height: 64px;
  border: 1px dashed ${GRAY3};
  border-radius: 4px;
  background-color: ${GRAY2};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
`;

export const SearchCastMemberModal = ({ isOpen = true, setSearchVal, castMembers = [], isSelected, handleCastMemberSearch, handleSelectCastMember, openAddCastMemberModal, handleCloseModal, handleAddSelectedCastMember }) => {
  return (
    <Modal $isOpen={isOpen} $dim={true} onClick={() => handleCloseModal('castMember')}>
      <Container onClick={e => e.stopPropagation()}>
        <Text $size={14} $weight='BOLD' $margin='0 0 17px'>
          출연 배우 검색
        </Text>
        <SearchBar 
          setSearchVal={setSearchVal}
          placeholder='배우 이름을 검색해보세요'
          handleSearch={handleCastMemberSearch}
        />
        <CastMemberList >
          {castMembers?.map(member => (
            <Div $width='64px' key={member.actorId} $grow='0' onClick={(event) => handleSelectCastMember(event, member.actorId, member)}>
              <Div $width='100%' $height='64px' $radius='4px' $overflow='hidden'>
                <CastProfile $selected={isSelected(member.actorId)} $url={member.url || '/assets/castMemberThumnail.png'}>
                  <SelectedIcon style={{display: `${isSelected(member.actorId) ? 'block' : 'none'}`}} />
                </CastProfile>
              </Div>
              <Text $color={GRAY5} $margin='6px 0 0' $size={12} $align='left'>{member.name}</Text>
            </Div>
          ))}
          <AddCastMemberButton onClick={openAddCastMemberModal}>
            <AddIcon />
          </AddCastMemberButton>
        </CastMemberList>
        <Div $flex={true} $gap='5px' $margin='10px 0 0'>
          <StyledButton 
            onClick={handleAddSelectedCastMember}
          >
            확인
          </StyledButton>
        </Div>
      </Container>
    </Modal>
  )
}

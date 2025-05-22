import Modal from "./Modal";
import styled from "styled-components";
import { Button, Div, Text, Input } from "../common/div";
import { BackIcon } from "../../assets/icons";
import { WHITE } from "../../constants/color";

const Container = styled.div`
  width: 284px;
  padding: 28px;
  background-color: rgba(240, 240, 240, 1);
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  top: 50%;
  transform: translateY(-50%);
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  flex-grow: 1;
  height: 40px;
  line-height: 40px;
  padding: 0;
  border-radius: 10px;
`;

export const AddCastMemberModal = ({ isOpen = true, handleAddCastMember, goBackAddCastMemberModal, handleCloseModal, setAddCastMemberValue }) => {
  return (
    <Modal $isOpen={isOpen} $dim={true} onClick={() => handleCloseModal('addCastMember')}>
      <Container onClick={e => e.stopPropagation()}>
        <Div $flex={true} $align='center' $justify='center'>
          <BackIcon onClick={goBackAddCastMemberModal} style={{cursor: 'pointer', alignSelf: 'flex-start'}} />
          <Text $size={14} $weight='BOLD' $margin='0 0 17px' style={{flexGrow: 1}}>
            직접 배우 추가
          </Text>
        </Div>
        <Input $backgroundColor={WHITE} $back $height='38px' $radius='8px' onChange={(e) => setAddCastMemberValue(e.target.value)} />
        <Div $flex={true} $gap='5px' $margin='30px 0 0'>
          <StyledButton 
            onClick={handleAddCastMember}
          >
            배우 추가하기
          </StyledButton>
        </Div>
      </Container>
    </Modal>
  )
}

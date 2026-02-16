import Modal from "./Modal";
import styled from "styled-components";
import { Button, Div, Text } from "../common/div";
import { GRAY5, GRAY1, BLACK, RED } from "../../constants/color";

const Container = styled.div`
  width: 260px;
  padding: 22px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  top: 50%;
  transform: translateY(-50%);
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  flex-grow: 1;
  height: 30px;
  line-height: 30px;
  padding: 0;
`;

export const DeleteUserModal = ({ isOpen, closeModal, handleDeleteUser }) => {
  return (
    <Modal $isOpen={isOpen} $dim={true}>
      <Container>
        <Text $weight='BOLD' $size={16}>
          회원 탈퇴
        </Text>
        <Text $weight='MEDIUM' $size={12} $color={GRAY5} $margin='12px 0 0'>
          정말 탈퇴하시겠습니까?
        </Text>
        <Text $weight='MEDIUM' $size={12} $color={GRAY5} $margin='4px 0 0'>
          모든 데이터가 삭제되며 복구할 수 없습니다.
        </Text>
        <Div $flex={true} $gap='5px' $margin='24px 0 0'>
          <StyledButton 
            $backgroundColor={GRAY1} 
            $color={BLACK}
            onClick={closeModal}
          >
            취소
          </StyledButton>
          <StyledButton 
            $backgroundColor={RED}
            onClick={handleDeleteUser}
          >
            탈퇴
          </StyledButton>
        </Div>
      </Container>
    </Modal>
  )
}




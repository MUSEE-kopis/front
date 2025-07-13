import Modal from "./Modal";
import styled from "styled-components";
import { Button, Div, Text } from "../common/div";
import { GRAY5, BLUE, LIGHT_BLUE, GRAY2 } from "../../constants/color";
import { GENRE_MAP } from "../../constants/content";

const Container = styled.div`
  width: 318px;
  padding: 18px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  top: 50%;
  transform: translateY(-50%);
`;

const GenreTag = styled(Text)`
  border-radius: 32px;
  border: 0.5px solid ${GRAY5};
  height: 33px;
  padding: 8px 10px;
  font-size: 11px;
  cursor: pointer;
  ${props => props.$status === 'active' && `
    background-color: ${LIGHT_BLUE};
    border: 0.5px solid ${LIGHT_BLUE};
    color: ${BLUE};
  `}
  ${props => props.$status === 'disabled' && `
    background-color: ${GRAY2};
    border: 0.5px solid ${GRAY2};
    color: ${GRAY5};
  `}
`;

const StyledButton = styled(Button)`
  border-radius: 4px;
  flex-grow: 1;
  height: 40px;
  line-height: 40px;
  padding: 0;
  border-radius: 10px;
`;

export const GenreSelectModal = ({ isOpen = true, handleGenreSelect, selectedGenres, handleGenreSave, handleCloseModal }) => {
  return (
    <Modal $isOpen={isOpen} $dim={true} onClick={() => handleCloseModal('genre')}>
      <Container onClick={e => e.stopPropagation()}>
        <Text $color={GRAY5} $size={12} $align='left'>
          최대 3개까지 선택하실 수 있어요.
        </Text>
        <Div $flex={true} $gap='10px 8px' $margin='16px 0 0' $wrap={true} $justify='flex-start'>
          {Object.entries(GENRE_MAP).map(([key, value]) => (
            <GenreTag 
              $status={selectedGenres.includes(key) ? 'active' : selectedGenres.length > 2 ? 'disabled' : 'normal'}
              key={key} 
              onClick={() => handleGenreSelect(key)}
            >
              {value}
            </GenreTag>
          ))}
        </Div>
        <Div $flex={true} $gap='5px' $margin='16px 0 0'>
          <StyledButton 
            disabled={selectedGenres.length === 0}
            onClick={handleGenreSave}
          >
            저장하기
          </StyledButton>
        </Div>
      </Container>
    </Modal>
  )
}

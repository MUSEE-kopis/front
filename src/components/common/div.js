import styled from 'styled-components';
import { MOBILE_SIZE, FONT_WEIGHT } from '../../constants/content';
import { BLACK, GRAY0, GRAY1, GRAY2, GRAY3, NAVY, WHITE } from '../../constants/color';

export const Text = styled.div`
  font-family: ${ props => props.$font || 'Pretendard'};
  color: ${ props => props.$color || BLACK};
  margin: ${ props => props.$margin || '0'};
  padding: ${ props => props.$padding || '0'};
  height: ${ props => props.$height || 'auto'};
  width: ${ props => props.$width || 'auto'};
  text-align: ${ props => props.$align || 'center'};
  line-height: ${ props => props.$lineHeight || 'normal'};
  ${ props => FONT_WEIGHT[props.$weight] || FONT_WEIGHT.REGULAR};
  font-size: ${props => (props.$size ? props.$size + 'px' : '14px')};
  ${ props => props.$background && `background-color: ${props.$background};`};
  white-space: ${ props => props.$whiteSpace || 'nowrap'};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  border: ${ props => props.$border || 'none'};
  background-color: ${ props => props.$backgroundColor || NAVY};
  height: ${ props => props.$height || '40px'};
  width: ${ props => props.$width || 'auto'};
  padding: ${ props => props.$padding || '10px 20px'};
  border-radius: ${ props => props.$radius || '10px'};
  margin: ${ props => props.$margin || '0'};
  cursor: pointer;
  font-size: ${ props => props.$size + 'px' || '16px'};
  ${ props => FONT_WEIGHT[props.$weight] || FONT_WEIGHT.SEMIBOLD};
  color: ${ props => props.$color || WHITE};
  &:disabled {
    background-color: ${GRAY2};
    color: ${WHITE};
  }
`;

export const Input = styled.input`
  width: 100%;
  border: solid 1px ${GRAY1};
  background-color: ${ props => props.$backgroundColor || 'transparent'};
  height: ${ props => props.$height || 'auto'};
  border-radius: ${ props => props.$radius || '24px'};
  padding: 0 19px;
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: ${ props => props.$padding || '0'};
  margin: ${ props => props.$margin || '0'};
  resize: none;
  background-color: ${GRAY0};
  border-radius: 10px;
  border: none;
  width: 100%;
  outline: none;
  height: 166px; 
  font-size: 12px;
  color: ${BLACK};
  &::placeholder {
    color: ${GRAY3};
  }
`;

export const Div = styled.div`
  ${ props => props.$flex && 'display: flex;'};
  ${ props => props.$wrap && 'flex-wrap: wrap;'};
  flex-grow: ${({ $grow }) => $grow || 1};
  position: relative;
  flex-direction: ${ props => props.$direction || 'row'};
  align-items: ${ props => props.$align || 'center'};
  justify-content: ${ props => props.$justify || 'center'};
  margin: ${ props => props.$margin || '0'};
  padding: ${ props => props.$padding || '0'};
  width: ${ props => props.$width || 'auto'};
  height: ${ props => props.$height || 'auto'};
  max-width: ${ props => props.$maxWidth || MOBILE_SIZE};
  ${props => props.$radius && `border-radius: ${props.$radius};`};
  ${ props => props.$maxHeight && `max-height: ${props.$maxHeight};`};
  ${ props => props.$cursor && 'cursor: pointer;'};
  ${ props => props.$backgroundColor && `background-color: ${props.$backgroundColor};`};
  ${ props => props.$border && `border: ${props.$border};`};
  ${ props => props.$alginSelf && `align-self: ${props.$alginSelf};`};
  ${ props => props.$overflow && `overflow: ${props.$overflow};`}
  gap: ${ props => props.$gap || '0'};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DimDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 999;
`;
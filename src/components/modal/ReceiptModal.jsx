import React from "react";
import styled from "styled-components";
import { ReceiptImage, ReceiptClipImage, ReceiptBarcodeImage } from "../../assets/ticketbook";
import { Div, Text } from "../common/div";
import { StarBigIcon, EmptyStarBigIcon } from "../../assets/ticketbook";
import Modal from "./Modal";
import { GENRE_MAP } from "../../constants/content";

const Container = styled.div`
  display: flex;
  width: 264px;
  height: 520px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  margin-top: 77px;
  background-size: cover;
  background-position: center;
  &::-webkit-scrollbar {
    display: none;
  }
  background-image: url(${ReceiptImage});
  filter: drop-shadow(2.049px 4.098px 10.244px rgba(0, 0, 0, 0.10)) drop-shadow(8.195px 14.342px 16.391px rgba(0, 0, 0, 0.09)) drop-shadow(18.439px 32.781px 22.537px rgba(0, 0, 0, 0.05)) drop-shadow(32.781px 59.416px 26.635px rgba(0, 0, 0, 0.01)) drop-shadow(51.22px 94.246px 30.732px rgba(0, 0, 0, 0.00));
`;

const HeaderContainer = styled(Div)`
  height: 77px;
  flex-grow: 0;
  border-bottom: dashed 1.5px #1F1F1F;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 4px;
`;

const TitleContainer = styled(Div)`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  border-bottom: dashed 1.5px #1F1F1F;
  align-items: start;
  height: 105px;
  width: 100%;
  gap: 1px;
`;

const Title = styled(Div)`
  display: flex;
  flex-grow: 0;
  font-size: 10px;
`;

const TitleLabel = styled(Text)`
  font-size: 12px;
  text-align: start;
  max-width: 190px;
  font-family: 'Red Hat Display';
  font-style: italic;
  padding-right: 2px;
  font-weight: 600;
  width: 55px;
  flex-shrink: 0;
`;

const Review = styled(Div)`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  padding: 12px 0;
  gap: 4px;
  height: 185px;
  width: 100%;
  border-bottom: dashed 1.5px #1F1F1F;
  text-align: start;
`;

const ReviewText = styled(Text)`
  height: 132px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
`;

const StarContainer = styled(Div)`
  padding-top: 16px;
  display: flex;
  flex-grow: 0;
  gap: 4px;
  margin-bottom: 12px;
`;

const ReceiptModal = ({ isOpen, closeModal, data }) => {
  console.log(data);
  return (
    <Modal $isOpen={isOpen}>
      <Container>
        <HeaderContainer>
          <ReceiptClipImage style={{ left: -25, position: 'absolute' }} />
          <Text $size={28} $padding='0 4px 0 0' $weight='BOLD' $whiteSpace='nowrap' $font='Red Hat Display' style={{ fontStyle: 'italic' }}>
            RECEIPT
          </Text>
        </HeaderContainer>
        <TitleContainer>
          <Title>
            <TitleLabel>Date</TitleLabel>
            {data?.viewDate}
          </Title>
          <Title>
            <TitleLabel>Title</TitleLabel>
            {data?.performanceName}
          </Title>
          <Title>
            <TitleLabel>Theater</TitleLabel>
            {data?.venue}
          </Title>
          <Title>
            <TitleLabel>Type</TitleLabel>
            {data?.genres.map(genre => GENRE_MAP[genre]).join(', ')}
          </Title>
          <Title>
            <TitleLabel>Cast</TitleLabel>
            {data?.reviewResponse?.castMembers.map(member => member.name).join(', ')}
          </Title>
        </TitleContainer>
        <Review >
          <Text $size={12} $padding='0 2px 0 0' $weight='BOLD' $font='Red Hat Display' style={{ fontStyle: 'italic' }}>
            Review
          </Text>
          <ReviewText >
            {data?.reviewResponse?.content}
          </ReviewText>
        </Review>
        <StarContainer>
          {Array.from({ length: data?.reviewResponse.star }, (_, i) => (
            <StarBigIcon key={i} />
          ))}
          {Array.from({ length: 5 - data?.reviewResponse.star }, (_, i) => (
            <EmptyStarBigIcon key={i} />
          ))}
        </StarContainer>
        <img src={ReceiptBarcodeImage} alt="receipt-barcode" />
      </Container>
      <Div $margin='50px 0 0'>
        <Text $size={12} style={{ cursor: 'pointer'}} onClick={closeModal}>
          닫기
        </Text>
      </Div>
    </Modal>
  )
}

export default ReceiptModal;

import React from "react";
import styled from "styled-components";
import { ReceiptSmallImage } from "../../../assets/ticketbook";
import { Div, Text } from "../../common/div";
import { StarSmallIcon, EmptyStarSmallIcon } from "../../../assets/icons";

const Container = styled.div`
  position: absolute;
  top: 78px;
  right: 17px;
  background-image: url(${ReceiptSmallImage});
  background-size: cover;
  background-position: center;
  width: 125px;
  height: 210px;
  cursor: pointer;
`;

const StarRate = styled(StarSmallIcon)`
  width: 8px;
  height: 8px;
  margin-right: 1px;
`;

const EmptStarRate = styled(EmptyStarSmallIcon)`
  width: 8px;
  height: 8px;
  margin-right: 1px;
`;

const Title = styled(Text)`
  font-size: 3.5px;
  text-align: start;
  max-width: 75px;
`;

const Receipt = ({ data, openModal }) => {
  return (
    <Container onClick={openModal}>
      <Div $flex={true} $direction='column' $gap='1.6px' $align='start' style={{ position: 'absolute', top: '38px', left: '24px'}}>
        <Title>
          {data?.viewDate}
        </Title>
        <Title>
          {data?.performanceName}
        </Title>
        <Title>
          {data?.venue}
        </Title>
        <Title>
          {data?.reviewResponse.castMembers.map(member => member.name).join(', ')}
        </Title>
      </Div>
      <Text $width='84px' $height='50px' $size={3.5} $align='start' $whiteSpace='wrap' style={{position: 'absolute', top: '74px', left: '12px'}}>
        {data?.reviewResponse.content}
      </Text>
      <Div style={{ position: 'absolute', bottom: '66px', left: '32px'}}>
        {Array.from({ length: data?.reviewResponse.star }, (_, i) => (
          <StarRate key={i} />
        ))}
        {Array.from({ length: 5 - data?.reviewResponse.star }, (_, i) => (
          <EmptStarRate key={i} />
        ))}
      </Div>
    </Container>
  )
}

export default Receipt;
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Div, Text } from "../../common/div";
import { GRAY2 } from "../../../constants/color";
import useColorThief from "use-color-thief";

const Container = styled(Div)`
  height: 240px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  flex-grow: 0;
  width: calc((100% - 16px) / 2);
  cursor: pointer;
`;

const Poster = styled.img`
  height: 100%;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-left: 1px solid white;
  border-right: 2px solid ${GRAY2};
`;

const TicketBookItem = ({ data, getPoster, goDetail }) => {
  const imgRef = useRef(null);
  const [poster, setPoster] = useState('#111');

  useEffect(() => {
    const fetchPosterImage = async () => {
      const response = await getPoster(data.performanceId);
      setPoster(response);
    }
    fetchPosterImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.performanceId]);

  const { color } = useColorThief(poster, {
    format: 'hex',
    colorCount: 10,
    quality: 10,
  });

  return (
    <Container onClick={() => goDetail(data?.id)}>
      <Div $height='200px' $flex={true} $grow='0' >
        <Div $backgroundColor={color} $width='10px' $height='100%' $grow='0' style={{ borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }} />
        <Poster 
          src={data?.poster} 
          alt="티켓북 이미지" 
          ref={imgRef} 
          style={{ height: "100%", width: "calc(100% - 11px)" }} 
        />
      </Div>
      <Text $size={12} $weight='MEDIUM' $whiteSpace='wrap' $width='100%' $height='30px' >
        {data?.performanceName}
      </Text>
    </Container>
  )
}

export default TicketBookItem;
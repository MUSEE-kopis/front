import styled from "styled-components";
import { Link } from "react-router-dom";
import { Div, Text } from "../../common/div";
import { BLACK, GRAY5, RED } from "../../../constants/color";
import { GoIcon } from "../../../assets/icons";

const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${BLACK};
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 26px;
`;

const Links = ({ logout, handleShowDeleteUser }) => {
  const handleClick = () => {
    window.location.href = 'https://www.notion.so/MUSEE-11b0cdd700f78074b473f3759010de3e?pvs=4';
  }

  return(
    <Div $flex={true} $width='100%' $direction='column' $gap='30px' $margin='50px 0 100px'>
      <LinkButton to='/favorite'>
        <Text $size={12} $color={GRAY5} $weight='MEDIUM'>저장한 공연</Text>
        <GoIcon />
      </LinkButton>
      <LinkButton onClick={handleClick} >
        <Text $size={12} $color={GRAY5} $weight='MEDIUM'>문의하기</Text>
        <GoIcon />
      </LinkButton>
      <LinkButton onClick={() => logout()}>
        <Text $size={12} $color={GRAY5} $weight='MEDIUM'>로그아웃</Text>
        <GoIcon />
      </LinkButton>
      <LinkButton onClick={handleShowDeleteUser}>
        <Text $size={12} $color={RED} $weight='MEDIUM'>회원 탈퇴</Text>
        <GoIcon />
      </LinkButton>
    </Div>
  )
}

export default Links;

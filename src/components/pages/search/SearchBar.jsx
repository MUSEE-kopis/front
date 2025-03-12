import React from "react";
import styled from "styled-components";
import { Div } from "../../common/div";
import { GRAY1, GRAY4 } from "../../../constants/color";
import { SearchBarIcon } from "../../../assets/icons";

const SearchInput = styled.input`
  font-size: 16px;
  border: none;
  background-color: transparent;
  width: 100%;
  &::placeholder {
    color: ${GRAY4};
  }
`;  

const SearchBar = ({ setSearchVal, handleSearch = () => {}, placeholder }) => {
  return (
    <Div $width='100%' $backgroundColor={GRAY1} $radius='8px' $height='40px' $flex={true} $justify='start' $padding='0 15px' $gap='10px'>
      <SearchBarIcon
        onClick={handleSearch}
        style={{ cursor: 'pointer' }}
      />
      <SearchInput 
        type="search"
        name='performance-search' 
        placeholder={placeholder} 
        onChange={(e) => setSearchVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </Div>
  )
}

export default SearchBar;
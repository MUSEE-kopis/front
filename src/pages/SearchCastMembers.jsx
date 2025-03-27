import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Div } from "../components/common/div";
import SearchBar from "../components/pages/search/SearchBar";
import Navigation from "../components/common/Navigation";
import SearchCastMembersHeader from "../components/pages/createBook/SearchCastMembersHeader";
import SearchResult from "../components/pages/searchCast/SearchResult";
import { useCreateBook } from "../hooks/CreateBookHooks";

const SearchCastMembers = () => {
  const { groupedCastMembers } = useLocation().state;
  const { handleCastMemberSearch, selectedCastMembers, setSearchVal, handleSelectCastMember } = useCreateBook();

  return (
    <>
      <SearchCastMembersHeader />
      <Div $flex={true} $direction='column' $margin='73px 0 0'>
        <SearchBar 
          setSearchVal={setSearchVal}
          placeholder='직접 배우를 검색해보세요'
          handleSearch={handleCastMemberSearch}
        />
      </Div>
      <SearchResult castMembers={groupedCastMembers} selectedCastMembers={selectedCastMembers} handleSelectCastMember={handleSelectCastMember} />
      <Navigation />
    </>
  ) 
}

export default SearchCastMembers;
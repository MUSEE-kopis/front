import React from "react";
import { Div } from "../components/common/div";
import SearchBar from "../components/pages/search/SearchBar";
import SearchResult from "../components/pages/search/SearchResult";
import Popular from "../components/pages/search/Popular";
import Navigation from "../components/common/Navigation";
import { usePerformance } from "../hooks/PerformanceHooks";

const Search = () => {
  const { 
    searchResult,
    searchVal,
    popularPerformances,
    handleGoDetail,
    setSearchVal,
    handleSearch,
  } = usePerformance();

  return (
    <>
      <Div $padding='20px 18px'>
        <SearchBar 
          setSearchVal={setSearchVal}
          handleSearch={handleSearch}
          placeholder='작품명을 입력하세요'
        />
        {searchVal !== '' ? (
          <SearchResult 
            result={searchResult}
            goDetail={handleGoDetail}
          />
        ) : (
          <Popular
            data={popularPerformances}
            goDetail={handleGoDetail}
          />
        )}
      </Div>
      <Navigation />
    </>
  ) 
}

export default Search;
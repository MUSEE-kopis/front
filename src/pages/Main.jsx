import React from "react";
import { Div } from "../components/common/div";
import Header from "../components/common/Header";
import Banner from "../components/pages/main/Banner";
import Carousel from "../components/pages/main/Carousel";
import Navigation from "../components/common/Navigation";
import { usePerformance } from "../hooks/PerformanceHooks";
import { PwaGuide } from "../components/common/PwaGuide";

const Main = () => {
  const { 
    customPerformances,
    randomPerformances,
    recommendPerformances,
    handleGoDetail,
  } = usePerformance();

  return (
    <>
      <Header />
      <Banner />
      <Div $flex={true} $padding='25px 18px' $margin=' 0 0 60px' $direction='column' $align='start' $width='100%' $gap='40px'>
        <Carousel 
          type='curation1'
          data={recommendPerformances}
          goDetail={handleGoDetail}
        />
        <Carousel 
          type='curation2' 
          data={randomPerformances}
          goDetail={handleGoDetail}
        />
        <Carousel 
          type='curation3'
          data={customPerformances}
          goDetail={handleGoDetail}
        />
      </Div>
      <Navigation />
      <PwaGuide />
    </>
  ) 
}

export default Main;
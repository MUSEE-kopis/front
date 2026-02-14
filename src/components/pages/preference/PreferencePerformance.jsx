import { Div, Text } from "../../common/div";
import { GRAY5, WHITE } from "../../../constants/color";

const PreferencePerformance = () => {
  return (
    <Div $flex={true} $grow={0} $margin='16px 0 0' $backgroundColor={WHITE} $width='100%' $direction='column' $padding='20px 26px' $align='start'>
      <Div $flex={true} $justify='space-between' $width='100%'>
        <Text $size={16} $weight='BOLD'>관심있는 작품</Text>
        <Text $size={14} $weight='LIGHT' $color={GRAY5} $cursor='pointer' style={{borderBottom: `1px solid ${GRAY5}`, paddingBottom: '1px', display: 'inline-block'}}>편집</Text>
      </Div>
      <Div $flex={true} $justify='start' $padding='10px 0' $gap='16px' $wrap={true} $width='100%'>
        <Div 
          $width='calc((100% - 32px) / 3)'
          $direction='column' 
          $align='start' 
          $cursor={true}
          $grow='0'
          // key={index} 
          // onClick={() => handleClick(performance.id)}
        >
          <img style={{width: '100%', height: '132px'}}
            src='https://i.namu.wiki/i/rMWs0P47X2McDLRT34WhLJuKZaU1YXQDEqin-zm0OdoXauSACFjWDzMsPWL13vjf06z7NTwKa8NWnFah-qpHT-ffFVSwWWYTJBoLoPUPzvpZvJpUjBcEin2VfyIcg3RuECzc4voFh-vFpsjpwOwGjg.webp'
            alt="poster"
          />
          <Text $size={12} $weight='MEDIUM' $align='start' $margin='2px 0 0'>
            영웅
          </Text>
        </Div>
        <Div 
          $width='calc((100% - 32px) / 3)'
          $direction='column' 
          $align='start' 
          $cursor={true}
          $grow='0'
          // key={index} 
          // onClick={() => handleClick(performance.id)}
        >
          <img style={{width: '100%', height: '132px'}}
            src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MDdfOTkg%2FMDAxNzE1MDYzOTAwMDQ4.k7bm2fVuaBIAFJOFG-3VrxX9lBj66nzDfMOEfKWkGBMg.XTr42u_hkFBzDtvOOQpoaESlkK8vS5IBu3JDsZu21YIg.JPEG%2FIMG_2289.JPG&type=sc960_832'
            alt="poster"
          />
          <Text $size={12} $weight='MEDIUM' $align='start' $margin='2px 0 0'>
            일 테노레
          </Text>
        </Div>
        <Div 
          $width='calc((100% - 32px) / 3)'
          $direction='column' 
          $align='start' 
          $cursor={true}
          $grow='0'
          // key={index} 
          // onClick={() => handleClick(performance.id)}
        >
          <img style={{width: '100%', height: '132px'}}
            src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDExMTVfMjA5%2FMDAxNzMxNjY5NDgxMDg5.lxckDKqP98JH2M-99eS4Mg1ryfeJZeMzWm9E4-BIECwg.mZwk-jZ9bS8gxyf2fupd1JZsB2t8QtivML9BJDGqvOIg.JPEG%2FKakaoTalk_20241115_184027096.jpg&type=sc960_832'
            alt="poster"
          />
          <Text $size={12} $weight='MEDIUM' $align='start' $margin='2px 0 0'>
            시카고
          </Text>
        </Div>
        <Div 
          $width='calc((100% - 32px) / 3)'
          $direction='column' 
          $align='start' 
          $cursor={true}
          $grow='0'
          // key={index} 
          // onClick={() => handleClick(performance.id)}
        >
          <img style={{width: '100%', height: '132px'}}
            src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMzFfODQg%2FMDAxNzA2NzAyMTYzNjI1.5ZmSZFTvsjRt6C1JA6qROL2CAtcutuiLEcyYp2nqNMQg.ppsTdPxBB0ATy9G_B7xWlrQ5TpgW6ikCZEbS-95R1y8g.JPEG.rlovetoaqlc%2FIMG_6049.jpg&type=sc960_832'
            alt="poster"
          />
          <Text $size={12} $weight='MEDIUM' $align='start' $margin='2px 0 0'>
            노트르담 파리
          </Text>
        </Div>
      </Div>
    </Div>
  )
}

export default PreferencePerformance;
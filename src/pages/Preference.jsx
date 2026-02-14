import PreferenceHeader from "../components/pages/preference/PreferenceHeader";
import PreferenceSummary from "../components/pages/preference/PreferenceSummary";
import PreferenceGenre from "../components/pages/preference/PreferenceGenre";
import PreferenceActor from "../components/pages/preference/PreferenceActor";
import PreferencePerformance from "../components/pages/preference/PreferencePerformance";
import { Div } from "../components/common/div";
import { GRAY0 } from "../constants/color";

const Preference = () => {
  return (
    <Div $flex={true} $direction='column' $justify='start' $backgroundColor={GRAY0} $height='100vh'>
      <PreferenceHeader />
      <PreferenceSummary /> 
      <PreferenceGenre />
      <PreferenceActor />
      <PreferencePerformance />
    </Div>
  )
}

export default Preference;
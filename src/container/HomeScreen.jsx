import Hero from "../components/Home/Hero"
import LightroomPresets from "../components/Home/LightroomPresets"
import Overview from "../components/Home/Overview"
import SpecificProducts from "../components/Home/SpecificProducts"
import TrendingPresets from "../components/Home/TrendingPresets"

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <LightroomPresets />
      <TrendingPresets />
      <SpecificProducts />
      <Overview />
    </>
  )
}

export default HomeScreen
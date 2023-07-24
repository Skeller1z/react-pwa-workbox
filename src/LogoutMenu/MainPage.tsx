import AboutUs from "../components/LogoutMenuCom/AboutUs"
import Footer from "../components/LogoutMenuCom/Footer"
import HomeSection from "../components/LogoutMenuCom/HomeSection"
import Navbar from "../components/LogoutMenuCom/Navbar"
import WhyUsSection from "../components/LogoutMenuCom/WhyUsSection"

const MainPage = () => {

  return (
    <>
      <Navbar />
      <HomeSection />
      <WhyUsSection />
      <AboutUs />
      <Footer />
    </>
  )
}

export default MainPage
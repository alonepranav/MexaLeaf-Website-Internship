import AboutUs from "./AboutUs";
import Allumni from "./Allumni";
import Apply from "./Apply";
import Form from "./Form";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Period from "./Period";

export default function App() {

  return (
    <div>

      {
        window.location.pathname.endsWith("/internship")
          ?
          <>
            <Navbar />
            <Form />
          </>
          :
          <>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <Period />
            <Apply />
            <Allumni />
          </>
      }

    </div>
  )
}

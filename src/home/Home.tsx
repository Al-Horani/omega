

import Navbar from "./Navbar";
import NavbarMobil from "./NavbarMobil";
import MainOperation from "../operations/MainOperation";

const Home = () => {

  return (
    <div className="min-w-screen min-h-screen">
      <Navbar/>
      <NavbarMobil/>
      <MainOperation/>
    </div>
  )
}

export default Home;
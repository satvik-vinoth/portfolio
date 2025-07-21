import Header from "./components/header";
import Frontpage from "./components/front-page";
import Experience from "./components/experience";
import About from "./components/about";
import Cert from "./components/cert";
import Proj from "./components/proj";


export default function Home() {
  return (
    <div>
      <div id="home"></div>
      <Header></Header>
      
      <Frontpage></Frontpage>
      <div id="about"></div>
      <About></About>
      <div id="exp"></div>
      <Experience></Experience>
      <div id="cert"></div>
      <Cert></Cert>
      <div id="proj"></div>
      <Proj></Proj>
    </div>
  );
}

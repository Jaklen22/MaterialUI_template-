import { Container } from "@mui/material";
import FeatureSection from "./components/FeatureSection/Feature";
import Navbar from "./components/Navbar/Navbar";
import PropertySection from "./components/Property/Property";
import HowWeHelp from "./components/HelpeSecion/Helpe";
import FeatureSection2 from "./components/FeatureSection2/Feature2";
import ExploreByPropertyType from './components/Explore/Explore';
import SubscribeNewsletter from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/Search/Search";
import SearchSection from "./components/Search/Search";


function App() {
  return (
    <div className="App">
   <Navbar/>
  <SearchSection/>
  <PropertySection/>
  <Container>
  <FeatureSection/>
   </Container>
   <HowWeHelp/>
   <Container>
  <FeatureSection2/>
   </Container>
   <ExploreByPropertyType/>
   <SubscribeNewsletter/>
   <Footer/>
  
 
    </div>
  );
}

export default App;

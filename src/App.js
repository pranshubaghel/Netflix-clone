
import './App.css';
// import FirstInnerBanner from './Components/InnerBanner/FirstInnerBanner';

import Home from './Components/Home/Home'
import FirstBanner from './Components/Banner/FirstBanner';
import SecondBanner from './Components/Banner/SecondBanner';
import ThirdBanner from './Components/Banner/ThirdBanner';
import FourBanner from './Components/Banner/FourBanner';
import Footer from './Components/Footer/Footer';
import QueryDropdown from './Components/Query/QueryDropdown';






function App() {
  return (
    <>
    <Home/>
    <FirstBanner/>
    <SecondBanner/>
    <ThirdBanner/>
    <FourBanner/>
    <QueryDropdown/>
    <Footer/>
  {/* <FirstInnerBanner/> */}

    </>
  
  );
}

export default App;

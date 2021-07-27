import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/AboutPage/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import ClientPage from './Components/ClientsPage/ClientPage';
import Careers from './Components/CarrersPage/Careers';
import ContactUs from './Components/Contactus/ContactUs';
import Oracle from './Components/Technologies/Oracle';
import Sap from './Components/Technologies/Sap';
import Infor from './Components/Technologies/Infor';
import Microsoft from './Components/Technologies/Microsoft'
import Workday from './Components/Technologies/Workday'
import Peoplesoft from './Components/Technologies/Peoplesoft'
import JdEdwards from './Components/Technologies/JdEdwards'
import Hyperion from './Components/Technologies/Hyperion';
import Siebel from './Components/Technologies/Siebel';
import BuisnessIntel from './Components/BuisnessIntelligence/BuisnessIntel';
import Portals_Social from './Components/Solutions/Portals_Social/Portals_Social';
import WebContent from './Components/Solutions/WebContentManage/WebContent';
import DigitalAssetManage from './Components/Solutions/DigitalAssetManage/DigitalAssetManage';
import ApplicationSecurity from './Components/Solutions/ApplicationSecurity/ApplicationSecurity';
import EnterprisesConsulting from './Components/Solutions/EnterprisesITconsult/EnterprisesConsulting';
import QualityIsOurCore from './Components/Solutions/QualityCore/QualityIsOurCore';
import ApplicationDev from './Components/Services/ApplicationDev/ApplicationDev';
import MobileAppDev from './Components/Services/MobileDev/MobileAppDev';
import SoftwareTesting from './Components/Services/SoftwareTesting/SoftwareTesting';
import DigitalMarketing from './Components/Services/DigitalMarketing/DigitalMarketing';
import ITInfrastructure from './Components/Services/ITInfrastructure/ITInfrastructure';
import ITStaffing from './Components/Services/ITStaffing/ITStaffing';
import IOSAppDev from './Components/Services/MobileDev/KnowMore/IOSAppDev';
import AndroidApp from './Components/Services/MobileDev/KnowMore/AndroidApp';
import CrossPlatform from './Components/Services/MobileDev/KnowMore/CrossPlatform';
import WindowsMobApp from './Components/Services/MobileDev/KnowMore/CrossPlatform';
import FunctionalTesting from './Components/Services/SoftwareTesting/KnowMore/FunctionalTesting';
import AutomationTesting from './Components/Services/SoftwareTesting/KnowMore/AutomationTesting';
import SecurityTesting from './Components/Services/SoftwareTesting/KnowMore/SecurityTesting';
import MobileAppTesting from './Components/Services/SoftwareTesting/KnowMore/MobileAppTesting';
import PerformanceTesting from './Components/Services/SoftwareTesting/KnowMore/PerformanceTesting';
import WebAppDev from './Components/Services/ApplicationDev/KnowMore/WebAppDev';
import DesktopApp from './Components/Services/ApplicationDev/KnowMore/DesktopApp';
import AppMarketing from './Components/Services/ApplicationDev/KnowMore/AppMarketing';

function App() {
  const [handelScroll, sethandelScroll] = useState()
  const scrolling = () => {
    const scroll = window.scrollY
    if (scroll > 200) {
      sethandelScroll(true)
    } else {
      sethandelScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrolling)
  }, [])
  const scrollup = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="App">
      {handelScroll && <div className="button-div" onClick={scrollup}>
        <i><FaAngleUp></FaAngleUp></i>
      </div>}
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/client" component={ClientPage}></Route>
          <Route path="/careers" component={Careers}></Route>
          <Route path="/contactus" component={ContactUs}></Route>
          <Route path="/tech/oracle" component={Oracle}></Route>
          <Route path="/tech/sap" component={Sap}></Route>
          <Route path="/tech/infor" component={Infor}></Route>
          <Route path="/tech/microsoft" component={Microsoft}></Route>
          <Route path="/tech/workday" component={Workday}></Route>
          <Route path="/tech/peoplesoft" component={Peoplesoft}></Route>
          <Route path="/tech/jdedwards" component={JdEdwards}></Route>
          <Route path="/tech/hyperion" component={Hyperion}></Route>
          <Route path="/tech/siebel" component={Siebel}></Route>
          <Route path="/buisness_intel" component={BuisnessIntel}></Route>
          <Route path="/solution/portals_social_collaboration" component={Portals_Social}></Route>
          <Route path="/solution/webcontentmanagement" component={WebContent}></Route>
          <Route path="/solution/digital_asset_management" component={DigitalAssetManage}></Route>
          <Route path="/solution/appliction_security" component={ApplicationSecurity}></Route>
          <Route path="/solution/enterprise_it_consulting" component={EnterprisesConsulting}></Route>
          <Route path="/solution/quality_is_our_core" component={QualityIsOurCore}></Route>
          <Route path="/services/application_development" component={ApplicationDev}></Route>
          <Route path="/services/mobile_app_development" component={MobileAppDev}></Route>
          <Route path="/services/software_testing" component={SoftwareTesting}></Route>
          <Route path="/services/digital_marketing" component={DigitalMarketing}></Route>
          <Route path="/services/it_infrastructure" component={ITInfrastructure}></Route>
          <Route path="/services/it_staffing" component={ITStaffing}></Route>
          <Route path="/ios_app_development" component={IOSAppDev}></Route>
          <Route path="/android_application" component={AndroidApp}></Route>
          <Route path="/cross_platform_app" component={CrossPlatform}></Route>
          <Route path="/functional_testing" component={FunctionalTesting}></Route>
          <Route path="/automation_testing" component={AutomationTesting}></Route>
          <Route path="/security_testing" component={SecurityTesting}></Route>
          <Route path="/mobile_app_testing" component={MobileAppTesting}></Route>
          <Route path="/peformance_testing" component={PerformanceTesting}></Route>
          <Route path="/web_app_developing" component={WebAppDev}></Route>
          <Route path="/desktop_app_development" component={DesktopApp}></Route>
          <Route path="/app_marketing" component={AppMarketing}></Route>
          <Route path='/' component={Home} ></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

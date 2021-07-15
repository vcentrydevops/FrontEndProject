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
          <Route path='/' component={Home} ></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

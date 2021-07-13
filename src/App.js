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
          <Route path='/' component={Home} ></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

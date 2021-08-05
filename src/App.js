import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
//import CollectionList from './components/Homepage/CollectionList'
import CollectionPage from "./pages/CollectionPage"
import NavBar from "./components/NavBar"
import NavMenu from "./components/NavMenu"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Newapp from "./Newapp"
import PDPContent from "./PDPContent"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/products/:handle" exact>
            <ProductPage />
          </Route>
          <Route path="/collections/:handle" exact>
            <CollectionPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/newapp" exact>
            <Newapp />
          </Route>
          <Route path="/pdpcont" exact>
            <PDPContent />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App

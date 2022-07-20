import SubCategory from "./Component/SubCategory"
import CategoryInterface from "./Component/CategoryInterface"
import DisplayAllCategory from './Component/DisplayAllCategory'
import DisplaySubCategory from './Component/DisplaySubCategory'
import AdminLogin from './Component/AdminLogin'
import AdminDashBoard from './Component/AdminDashBoard'
import Accessories from './Component/Accessories'
import Games from './Component/Games'
import DisplayGame from './Component/DisplayGame'
import DisplayAccessory from './Component/DisplayAccessory'
import {BrowserRouter as Router,Route} from "react-router-dom"
import Header from "./Component/ClientView/Header"
import Home from "./Component/ClientView/Home"
import Footer from "./Component/ClientView/Footer"
import Booter from "./Component/ClientView/Booter"
import ConsoleList from "./Component/ClientView/ConsoleList"
import QtySpinner from "./Component/ClientView/QtySpinner"
import AddData from './Component/AddData'
import Productview from './Component/ClientView/Productview'
import DisplayData from './Component/DisplayData'
import Documents from './Component/Documents'
import Displaydocuments from './Component/Displaydocuments'
import Termsandcondition from "./Component/Termsandcondition"
import Displayterms from "./Component/Displayterms"
import DisplayConsole from './Component/DisplayConsole'
import ConsolePicture from './Component/ConsolePicture'
import Displayaccepicture from './Component/Displayaccepicture'
import AccessoriesPicture from './Component/AccessoriesPicture'
import DisplayGamespicture from './Component/DisplayGamespicture'
import Gamespicture from './Component/Gamespicture'
import Signin from './Component/Signin'
import ShowCart from "./Component/ClientView/ShowCart"
import SignUpForm from "./Component/ClientView/SignUpForm"
import MobileRegistration from "./Component/ClientView/MobileRegistration"
import PaymentGateWay from "./Component/ClientView/PaymentGateWay"
import Range from './Component/Range'
//import "./App.css"
function App(props) {
  return (
    <div>
      <Router>

      <Route
          strict
          exact
          component={Range}
          path="/range"
          history={props.history}
        ></Route>

      <Route
          strict
          exact
          component={PaymentGateWay}
          path="/paymentgateway"
          history={props.history}
        ></Route>


<Route
          strict
          exact
          component={MobileRegistration}
          path="/mobileregistration"
          history={props.history}
        ></Route>

<Route
          strict
          exact
          component={SignUpForm}
          path="/signupform"
          history={props.history}
        ></Route>

<Route
          strict
          exact
          component={ShowCart}
          path="/showcart"
          history={props.history}
        ></Route>


      <Route
        strict
        exact
        component={Signin}
        path="/signin"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={DisplayGamespicture}
        path="/displaygamespicture"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={Gamespicture}
        path="/gamepicture"
        history={props.history}
        ></Route>


      <Route
        strict
        exact
        component={Displayaccepicture}
        path="/displaypictureaccessory"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={AccessoriesPicture}
        path="/pictureaccessory"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={ConsolePicture}
        path="/consolepicture"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={DisplayConsole}
        path="/displayconsole"
        history={props.history}
        ></Route>


      <Route
        strict
        exact
        component={Termsandcondition}
        path="/terms"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={Displayterms}
        path="/displayterms"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={Displaydocuments}
        path="/displaydocuments"
        history={props.history}
        ></Route>


      <Route
        strict
        exact
        component={Documents}
        path="/documents"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={Productview}
        path="/productview"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={DisplayData}
        path="/displaydata"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={AddData}
        path="/adddata"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={QtySpinner}
        path="/qtyspinner"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={ConsoleList}
        path="/consolelist"
        history={props.history}
        ></Route>


        <Route
        strict
        exact
        component={CategoryInterface}
        path="/categoryinterface"
        history={props.history}
        ></Route>

         <Route
        strict
        exact
        component={DisplayAllCategory}
        path="/displayallcategory"
        history={props.history}
        ></Route>

         <Route
        strict
        exact
        component={SubCategory}
        path="/subcategory"
        history={props.history}
        ></Route>

       <Route
        strict
        exact
        component={AdminLogin}
        path="/adminlogin"
        history={props.history}
        ></Route>

        <Route
        strict
        exact
        component={DisplaySubCategory}
        path="/displaysubcategory"
        history={props.history}
        ></Route>

        <Route
        strict
        exact
        component={AdminDashBoard}
        path="/admindashboard"
        history={props.history}
        ></Route>

     <Route
        strict
        exact
        component={Accessories}
        path="/accessories"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={DisplayAccessory}
        path="/displayaccessory"
        history={props.history}
        ></Route>

       <Route
        strict
        exact
        component={Games}
        path="/games"
        history={props.history}
        ></Route>

       <Route
        strict
        exact
        component={DisplayGame}
        path="/displaygame"
        history={props.history}
        ></Route>

       <Route
        strict
        exact
        component={Header}
        path="/header"
        history={props.history}
        ></Route>

       <Route
        strict
        exact
        component={Home}
        path="/home"
        history={props.history}
        ></Route>

       <Route
        strict
        exact
        component={Footer}
        path="/footer"
        history={props.history}
        ></Route>

      <Route
        strict
        exact
        component={Booter}
        path="/booter"
        history={props.history}
        ></Route>
      </Router>

  </div>
  );
}

export default App;

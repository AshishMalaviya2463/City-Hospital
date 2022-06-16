import { Route } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "./container/About";
import Doctors from "./container/Doctors";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Department from "./container/Department";
import Home from "./container/Home";
import Contact from "./container/Contact";
import Appointment from "./container/Appointment";
import LoginSignup from "./container/LoginSignup";
import Medicine from "./container/Medicine";
import Forgot from "./container/Forgot";
import UseRef from "./container/UseRef";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/department'} component={Department} />
        <Route exact path={'/doctors'} component={Doctors} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/appointment'} component={Appointment} />
        <Route exact path={'/login'} component={LoginSignup} />
        {/* <Route exact path={'/signin'} component={Login} /> */}
        <Route exact path={'/forgotpassword'} component={Forgot} />
        <Route exact path={'/medicine'} component={Medicine} />
        <Route exact path={'/refs'} component={UseRef} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

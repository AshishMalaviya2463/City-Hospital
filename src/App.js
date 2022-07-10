import { Route } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "./container/About";
import Doctors from "./container/Doctors";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Department from "./container/Department";
import Home from "./container/Home";
import Contact from "./container/Contact";
// import Appointment from "./container/Appointment";
import LoginSignup from "./container/LoginSignup";
import Medicine from "./container/Medicine";
import UseRef from "./container/UseRef";
import BookAppointment from "./container/Appointment/BookAppointment";
import ListAppointment from "./container/Appointment/ListAppointment";

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
        {/* <Route exact path={'/appointment'} component={Appointment} /> */}
        <Route exact path={'/login'} component={LoginSignup} />
        <Route exact path={'/medicine'} component={Medicine} />
        <Route exact path={'/refs'} component={UseRef} />
        <Route exact path={'/book_apt'} component={BookAppointment} />
        <Route exact path={'/list_apt'} component={ListAppointment} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import View from "./components/View";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Calculate from "./pages/Calculate";
// import PrivateRoute from "./pages/PrivateRoute"; // Make sure this path is correct
// // import ProfilePage from "./pages/Profile";
// import BudgetTracker from "./pages/Tracker";
// import Feedback from "./pages/Feedback";
// import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      {/* {console.log("App Component Loaded")}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/budgettracker" element={<BudgetTracker />} />

           <Route path="/feedbackform" element={<Feedback/>} />
          


          



        </Routes>
      </Router>
       */}
      <NavBar></NavBar>
      <View></View>
      
       <Features></Features>
      
       <Testimonials></Testimonials>
       <Footer></Footer>
    </>
  );
}

export default App;

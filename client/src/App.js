import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AllClaims from "./pages/claim/AllClaims";
import CreateClaim from "./pages/claim/CreateClaim";
import EditClaim from "./pages/claim/EditClaim";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create-claim" element={<CreateClaim/>} />
      <Route path="/all-claims" element={<AllClaims/>} />
      <Route path="/edit/:id" element={<EditClaim/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;

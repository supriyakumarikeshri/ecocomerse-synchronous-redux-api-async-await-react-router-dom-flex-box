import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProducListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail"
import ProductListing from "./containers/ProductListing";
import './App.css';
function App() {
  return (
    <div className="main-container">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/detail/:productId" element={<ProductDetail />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Pages/LoginandSignUp/SignUp";
import Login from "./Pages/LoginandSignUp/Login";

function App() {
  return (
    <div className="root">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/jacket" element={<ShopCategory type='jacket' />} />
          <Route path="/rain-jacket" element={<ShopCategory type='rain jacket' />} />
          <Route path="/shirt" element={<ShopCategory type='shirt' />} />
          <Route path="/t-shirt" element={<ShopCategory type='t-shirt' />} />
          <Route path="/sweater" element={<ShopCategory type='sweater' />} />
          <Route path="/blouse" element={<ShopCategory type='blouse' />} />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

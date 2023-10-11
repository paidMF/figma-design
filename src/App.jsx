import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
// import Dashboard from './pages/Dashboard.jsx';
// import About from './pages/About.jsx';
// import Analytics from './pages/Analytics.jsx';
// import Comment from './pages/Comment.jsx';
// import Product from './pages/Product.jsx';
// import ProductList from './pages/ProductList.jsx';
import Website from "./components/website/Website"

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Website />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
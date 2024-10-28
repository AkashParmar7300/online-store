import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import ProductDetails from './components/ProductDetails'; // New Component for viewing details
import ProductList from './components/ProductList'; // Add this if needed

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddProductPage />} />
                <Route path="/edit/:id" element={<EditProductPage />} />
                <Route path="/product/:id" element={<ProductDetails />} /> {/* New route */}
                <Route path="/products" element={<ProductList />} /> {/* Optional route for listing */}
            </Routes>
        </Router>
    );
}

export default App;

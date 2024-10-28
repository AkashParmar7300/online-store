import React, { useEffect, useState } from 'react';
import { fetchProductById } from '../api/productService';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
            const data = await fetchProductById(id);
            setProduct(data);
        };
        loadProduct();
    }, [id]);

    if (!product) return <p style={loadingStyle}>Loading...</p>;

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h2 style={productNameStyle}>{product.name}</h2>
                <p style={productPriceStyle}>Price: <span>${product.price}</span></p>
                <p style={productDetailStyle}>Category: <span>{product.category}</span></p>
                <p style={productDetailStyle}>Stock: <span>{product.stock}</span></p>
                <p style={productDescriptionStyle}>Description: {product.description}</p>
            </div>
        </div>
    );
};

// Styles
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
    padding: '20px'
};

const cardStyle = {
    maxWidth: '600px',
    width: '100%',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
};

const productNameStyle = {
    fontSize: '2rem',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '20px'
};

const productPriceStyle = {
    fontSize: '1.5rem',
    color: '#4caf50',
    fontWeight: 'bold',
    marginBottom: '15px'
};

const productDetailStyle = {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '10px'
};

const productDescriptionStyle = {
    fontSize: '1rem',
    color: '#555',
    marginTop: '20px',
    lineHeight: '1.5'
};

const loadingStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#777',
    marginTop: '50px'
};

export default ProductDetails;

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productService';
import { Typography, Paper, Button, Grid } from '@mui/material';

const ProductList = ({ renderProductActions }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await fetchProducts();
        setProducts(data);
    };

    return (
        <div style={pageContainerStyle}>
            <Typography 
                variant="h4" 
                align="center" 
                style={titleStyle}
            >
                Product List
            </Typography>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={12} md={6} lg={4} key={product._id}>
                        <Paper style={productCardStyle}>
                            <div>
                                <Typography variant="h6" style={productNameStyle}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body1" style={productPriceStyle}>
                                    ${product.price}
                                </Typography>
                            </div>

                            {/* Render product actions if provided */}
                            {renderProductActions && (
                                <div style={actionsContainerStyle}>
                                    {renderProductActions(product)}
                                </div>
                            )}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

// Styles
const pageContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#f7f7f7',  // Light background color for the entire page
};

const titleStyle = {
    marginBottom: '30px',
    color: '#1e90ff',  // Bright royal blue
    fontWeight: 'bold',
    fontSize: '2rem',
};

const productCardStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',  // White background for each product card
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',  // Soft shadow
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'transform 0.2s ease-in-out',  // Slight scale effect on hover
    cursor: 'pointer',
};

const productNameStyle = {
    fontWeight: 'bold',
    color: '#ff5722',  // Bright orange color for product name
    marginBottom: '8px',
};

const productPriceStyle = {
    color: '#4caf50',  // Green color for product price
};

const actionsContainerStyle = {
    marginLeft: 'auto',
};

export default ProductList;

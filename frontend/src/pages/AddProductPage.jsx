import React from 'react';
import { createProduct } from '../api/productService';
import ProductForm from '../components/ProductForm';

const AddProductPage = () => {
    const handleSubmit = async (productData) => {
        await createProduct(productData);
        alert('Product added successfully');
    };

    return (
        <div>
            <h2>Add New Product</h2>
            <ProductForm onSubmit={handleSubmit} />
        </div>
    );
};

export default AddProductPage;

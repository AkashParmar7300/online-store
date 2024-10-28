import React, { useEffect, useState } from 'react';
import { fetchProductById, updateProduct } from '../api/productService';
import ProductForm from '../components/ProductForm';
import { useParams } from 'react-router-dom';

const EditProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const loadProduct = async () => {
            const data = await fetchProductById(id);
            setProduct(data);
        };
        loadProduct();
    }, [id]);

    const handleSubmit = async (updatedProduct) => {
        await updateProduct(id, updatedProduct);
        alert('Product updated successfully');
    };

    return product ? (
        <div>
            <h2>Edit Product</h2>
            <ProductForm onSubmit={handleSubmit} initialData={product} />
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default EditProductPage;

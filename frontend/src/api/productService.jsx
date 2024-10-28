import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const fetchProducts = async (category, minPrice, maxPrice) => {
    const params = {};
    if (category) params.category = category;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    const response = await axios.get(API_URL, { params });
    return response.data;
};

export const fetchProductById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createProduct = async (productData) => {
    const response = await axios.post(API_URL, productData);
    return response.data;
};

export const updateProduct = async (id, productData) => {
    const response = await axios.put(`${API_URL}/${id}`, productData);
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

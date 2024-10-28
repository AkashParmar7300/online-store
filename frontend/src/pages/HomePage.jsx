import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { deleteProduct } from '../api/productService';

const HomePage = () => {
    const navigate = useNavigate();

    // Function to handle product deletion
    const handleDelete = async (productId) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            await deleteProduct(productId);
            alert("Product deleted successfully");
            window.location.reload();
        }
    };

    return (
        <div style={pageContainerStyle}>
            <h1 style={titleStyle}>Online Store</h1>

            {/* Button to add a new product */}
            <Link to="/add" style={linkStyle}>
                <button style={addButtonStyle}>Add New Product</button>
            </Link>

            {/* Product List with actions */}
            <ProductList
                renderProductActions={(product) => (
                    <div style={actionButtonContainerStyle}>
                        {/* Link to View Product Details */}
                        <Link to={`/product/${product._id}`} style={linkStyle}>
                            <button style={viewButtonStyle}>View</button>
                        </Link>

                        {/* Link to Edit Product */}
                        <button
                            style={editButtonStyle}
                            onClick={() => navigate(`/edit/${product._id}`)}
                        >
                            Edit
                        </button>

                        {/* Button to Delete Product */}
                        <button
                            style={deleteButtonStyle}
                            onClick={() => handleDelete(product._id)}
                        >
                            Delete
                        </button>
                    </div>
                )}
            />
        </div>
    );
};

// Styles
const pageContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#f8f8f8',
    textAlign: 'center'
};

const titleStyle = {
    color: '#333',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '30px'
};

const addButtonStyle = {
    backgroundColor: '#007bff',  // Blue color for the add button
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginBottom: '20px'
};

const actionButtonContainerStyle = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '10px'
};

const buttonBaseStyle = {
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    border: 'none'
};

const viewButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#28a745',  // Green for the view button
    color: '#fff'
};

const editButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#ffc107',  // Yellow for the edit button
    color: '#333'
};

const deleteButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: '#dc3545',  // Red for the delete button
    color: '#fff'
};

const linkStyle = {
    textDecoration: 'none'
};

export default HomePage;

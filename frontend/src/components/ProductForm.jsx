import React, { useState, useRef } from 'react';
import { TextField, Button, Paper, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';

const ProductForm = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState(initialData || {
        name: '',
        price: '',
        category: '',
        stock: '',
        description: '',
        priority: 'High'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Paper 
            elevation={4} 
            style={{
                padding: '40px',
                maxWidth: '500px',
                margin: '30px auto',
                backgroundColor: '#1e90ff',  // Bright blue background
                borderRadius: '12px',
                color: '#ffffff',  // White text for contrast
            }}
        >
            <Typography 
                variant="h5" 
                align="center" 
                style={{ 
                    marginBottom: '20px', 
                    color: '#ffffff',  // White text for title
                    fontWeight: 'bold' 
                }}
            >
                Product Management
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    name="name" 
                    label="Product Name" 
                    variant="outlined" 
                    value={formData.name} 
                    onChange={handleChange} 
                    fullWidth 
                    margin="normal" 
                    required 
                    style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
                />
                <TextField 
                    name="price" 
                    label="Price" 
                    variant="outlined" 
                    value={formData.price} 
                    onChange={handleChange} 
                    fullWidth 
                    margin="normal" 
                    required 
                    style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
                />
                <TextField 
                    name="category" 
                    label="Category" 
                    variant="outlined" 
                    value={formData.category} 
                    onChange={handleChange} 
                    fullWidth 
                    margin="normal" 
                    required 
                    style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
                />
                <TextField 
                    name="stock" 
                    label="Stock" 
                    variant="outlined" 
                    value={formData.stock} 
                    onChange={handleChange} 
                    fullWidth 
                    margin="normal" 
                    required 
                    style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
                />
                <FormLabel component="legend" style={{ color: '#ffffff', marginTop: '15px' }}>Priority</FormLabel>
                <RadioGroup 
                    row 
                    name="priority" 
                    value={formData.priority} 
                    onChange={handleChange}
                    style={{ marginBottom: '20px' }}
                >
                    <FormControlLabel value="High" control={<Radio style={{ color: '#ff5722' }} />} label="High" />
                    <FormControlLabel value="Average" control={<Radio style={{ color: '#ffeb3b' }} />} label="Average" />
                    <FormControlLabel value="Low" control={<Radio style={{ color: '#4caf50' }} />} label="Low" />
                </RadioGroup>
                <TextField 
                    name="description" 
                    label="Description" 
                    variant="outlined" 
                    value={formData.description} 
                    onChange={handleChange} 
                    multiline 
                    rows={3} 
                    fullWidth 
                    margin="normal" 
                    style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        style={{ 
                            backgroundColor: '#ff5722',  // Bright orange for submit
                            color: '#ffffff', 
                            fontWeight: 'bold',
                            width: '48%',
                            padding: '10px',
                            borderRadius: '8px'
                        }}
                    >
                        Submit
                    </Button>
                    <Button 
                        type="button" 
                        variant="contained" 
                        style={{ 
                            backgroundColor: '#ffeb3b',  // Bright yellow for clear
                            color: '#000', 
                            fontWeight: 'bold',
                            width: '48%',
                            padding: '10px',
                            borderRadius: '8px'
                        }}
                        onClick={() => setFormData({
                            name: '',
                            price: '',
                            category: '',
                            stock: '',
                            description: '',
                            priority: 'High'
                        })}
                    >
                        Clear
                    </Button>
                </div>
            </form>
        </Paper>
    );
};

export default ProductForm;

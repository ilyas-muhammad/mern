import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, TextField, Button } from '@mui/material';

const useStyles = makeStyles(() => ({
  formContainer: {
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
    padding: 2,
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  formField: {
    marginBottom: '5px',
  },
}));

const ContactForm = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can handle the form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className={classes.formContainer}>
            <Typography variant="h5" align="center" gutterBottom>
                Contact Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    className={classes.formField}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className={classes.formField}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    className={classes.formField}
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;

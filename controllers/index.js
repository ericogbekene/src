const express = require('express');
const bcrypt = require('bcrypt');

const getHelloWorld = (req, res) => {
    res.json({ message: 'Hello, World!' });
};

// Endpoint to receive user name, email, and phone, hash sensitive info, and store in DB
const postUser = async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).json({ error: 'Name, email, and phone are required.' });
    }

    try {
        // Hash email and phone as sensitive info
        const hashedEmail = await bcrypt.hash(email, 10);
        const hashedPhone = await bcrypt.hash(phone, 10);

        // Simulate storing in DB (replace with actual DB logic)
        const user = {
            name,
            email: hashedEmail,
            phone: hashedPhone,
        };

        // Respond with stored user (excluding sensitive info in real apps)
        res.status(201).json({ message: 'User created successfully.', user });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = {
    getHelloWorld,
    postUser,
};
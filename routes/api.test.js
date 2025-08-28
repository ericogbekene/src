const request = require('supertest');
const express = require('express');
const router = require('./index');

// express-rest-api/src/routes/index.test.js

// Mock controllers
const getHello = (req, res) => res.status(200).json({ message: 'Hello, world!' });
const postUser = (req, res) => res.status(201).json({ user: req.body });

// Set up app for testing
const app = express();
app.use(express.json());
app.use('/', router);

describe('REST API routes', () => {
    test('GET /hello should return hello message', async () => {
        const res = await request(app).get('/hello');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message', 'Hello, world!');
    });

    test('POST /users should create a user', async () => {
        const userData = { name: 'Alice', email: 'alice@example.com' };
        const res = await request(app).post('/users').send(userData);
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('user');
        expect(res.body.user).toMatchObject(userData);
    });
});
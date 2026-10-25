const request =  require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const {insertData , updateUser , DeleteUser} = require('../controllers/userController');
const User = require('../models/User');

const app = express();
app.use(express.json());

app.post("users",insertData);

let mongoServer;

beforeAll(async () =>{
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
});

afterAll(async ()=>{
   await mongoServer.stop();
    await mongoose.disconnect();
});

describe("User Controller Test" , () => {

    let userId = 0;

    it("/POST for user Create", async ()=>{
        const res = await request(app).
                    post("/users").
                    send({
                        name:"Akshay Wakde",
                        email:"akshay@gmail.com",
                    });

        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Akshay Wakde');
        userId = res.body._id;
    });

    it('DELETE /users/:id should remove the user', async () => {
        const res = await request(app).delete(`/users/${testUserId}`);
        
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('User deleted');

        // Verify it's actually gone from DB
        const user = await User.findById(testUserId);
        expect(user).toBeNull();
    });

});
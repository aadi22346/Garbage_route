import mongoose from 'mongoose';

// Destructure Schema and model from mongoose
const { Schema, model } = mongoose;

// Define User schema
const userSchema = new Schema({
    Employee_id: String,
    Password: String,
},
{
    collection: "UserInfo",
});

// Create and export the model
export default model("UserInfo", userSchema);


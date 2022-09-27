import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export interface User extends mongoose.Document {}

export { UserSchema };

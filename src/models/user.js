import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Enter a unique username !!"]
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required !!"],
  },
  password: {
    type: String,
    reuired: [true, "Password is required!"],
  },
  about: String,
  profileURL: String,
});

export const User = mongoose.models.users || mongoose.model('users', UserSchema);
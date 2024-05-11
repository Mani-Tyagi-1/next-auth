import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: false },
}, { timestamps: true });


const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    status: { type: String, default: "active" }
});
export default mongoose.model("User", UserSchema);

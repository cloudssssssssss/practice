import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    status: { type: String, default: "active" }
});
export default mongoose.model("User", UserSchema);

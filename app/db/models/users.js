import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
    {
        email: String,
        password: String
    }
)

const Users = mongoose.model.Users || mongoose.model("Users", usersSchema);

export default Users;
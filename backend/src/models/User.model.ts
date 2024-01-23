import { Schema, model } from "mongoose";
import * as bcrypt from "bcryptjs";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
}

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },

  // sent friend requests, received friend requests, friends, chats
});

UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

const User = model<IUser>("User", UserSchema);
export default User;

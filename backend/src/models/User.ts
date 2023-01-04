import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  profileImage: string;
  bio: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profileImage: { type: String, required: true },
    bio: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "User",
  }
);

const User = model<IUser>("User", userSchema);

export { User, IUser };

import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  bio?: string;
}

const userSchema = new Schema<IUser>(
  {
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },
  {
    timestamps: true,
    collection: "User",
  }
);

const User = model<IUser>("User", userSchema);

export { User, IUser };

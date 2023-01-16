import { Schema, model, Types } from "mongoose";

interface IPhoto {
  image: string;
  title: string;
  likes: Array<any>;
  comments: Array<any>;
  userId: Types.ObjectId;
  userName: string;
}

const photoSchema = new Schema<IPhoto>(
  {
    image: String,
    title: String,
    likes: Array,
    comments: Array,
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    userName: String,
  },
  {
    timestamps: true,
    collection: "Photo",
  }
);

const Photo = model<IPhoto>("Photo", photoSchema);

export { Photo, IPhoto };

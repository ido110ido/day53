import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";
import { IUser } from "../interface/User";

const userSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  balance: { type: Number, default: 0 },
});

const UserModel: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default UserModel;

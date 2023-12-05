import { IUser } from '@/interfaces/IUser';
import mongoose, { Schema, model, Model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cart: { type: Array },
    image: { type: String },
    role: {
      type: String,
      enum: ['admin', 'client'],
      message: '{VALUE} is not a valid role',
      default: 'client',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User: Model<IUser> = mongoose.models.User || model('User', userSchema);

export default User;

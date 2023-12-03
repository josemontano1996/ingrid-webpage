import { IMenuItem } from '@/interfaces/IMenuItem';
import mongoose, { Schema, model, Model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: {
        values: ['starter', 'mainDish', 'dessert'],
        message: '{VALUE} is not a valid dish type',
      },
    },

    image: { type: String, required: true },
    description: { type: String, required: true },
    allergens: [
      {
        type: String,
        enum: {
          values: [
            'Gluten',
            'Crustaceans',
            'Eggs',
            'Fish',
            'Peanuts',
            'Soy',
            'Milk',
            'Nuts',
            'Celery',
            'Mustard',
            'Sesame',
            'SO2',
            'Lupin',
            'Molluscs',
          ],
          message: '{VALUE} is not an allowed allergen',
        },
      },
    ],
    minServings: { type: Number },
    price: { type: Number },
  },
  {
    timestamps: true,
  },
);

//TODO: create mongoose index for fast search

const Product: Model<IMenuItem> =
  mongoose.models.Product || model('Product', productSchema);

export default Product;

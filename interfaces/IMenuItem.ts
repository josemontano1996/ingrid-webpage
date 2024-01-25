export interface IMenuItem {
  //TODO: change _id to required
  _id?: string;
  name: string;
  type: IDishType;

  image: string;
  description: string;
  allergens?: IAllergens[];
  minServings?: number;
  price: number;

  createdAt?: string;
  updatedAt?: string;
}

export type IAllergens =
  | 'gluten'
  | 'crustaceans'
  | 'eggs'
  | 'fish'
  | 'peanuts'
  | 'soy'
  | 'milk'
  | 'nuts'
  | 'celery'
  | 'mustard'
  | 'sesame'
  | 'so2'
  | 'lupin'
  | 'molluscs';

export type IDishType = 'starter' | 'mainDish' | 'dessert';

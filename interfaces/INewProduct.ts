import { IDishType, IAllergens } from './IMenuItem';

export interface INewProduct {
  image: string;
  type: IDishType;
  price: number;
  minServings?: number;
  allergens?: IAllergens[];

  en: {
    name: string;
    description: string;
  };
  es: { name: string; description: string };
  fr: { name: string; description: string };
  de: { name: string; description: string };
}

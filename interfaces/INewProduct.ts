import { IDishType, IAllergens } from './IMenuItem';

export interface INewProduct {
  image: string;
  type: IDishType;
  price: number;
  minServings?: number;

  en: {
    name: string;
    description: string;
    allergens?: IAllergens[];
  };
  es: { name: string; description: string; allergens?: IAllergens[] };
  fr: { name: string; description: string; allergens?: IAllergens[] };
  de: { name: string; description: string; allergens?: IAllergens[] };

  name: string;
  description: string;
}

export interface Premium {
  id: string;
  slug: string;
  name: string;
  description: string;
  advantages: string[];
  price: number;
  recurring: boolean;
  discount: number;
  have_discount: number;
}

export type GetPremiumsResponse = Premium[];

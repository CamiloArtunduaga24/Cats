export interface RootCats {
  peso?: Peso;
  id: string;
  name?: string;
  cfa_url?: string;
  vetstreet_url?: string;
  vcahospitals_url?: string;
  temperamento?: string;
  origin?: string;
  country_codes: string;
  country_code: string;
  description?: string;
  life_span: string;
  ' interior'?: number;
  vuelta?: number;
  alt_names: string;
  adaptability?: number;
  affection_level?: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  'aseo '?: number;
  health_issues: number;
  intelligence: number;
  shedding_level?: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation?: number;
  experimental: number;
  hairless?: number;
  natural?: number;
  raro?: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic?: number;
  reference_image_id: string;
  weight?: Weight;
  temperament?: string;
  indoor?: number;
  grooming?: number;
  'vocalización'?: number;
  rare?: number;
  ' descripción'?: string;
  lap?: number;
  'natural '?: number;
  'hipoalergénico '?: number;
  'nombre '?: string;
  ' origin'?: string;
  ' life_span'?: string;
  'sin pelo'?: number;
  ' adaptabilidad'?: number;
  afction_level?: number;
  ' weight'?: Peso;
  adaptabilidad?: number;
  'shedding_level '?: number;
}

export interface Weight {
  imperial?: string;
  metric: string;
  'imperial '?: string;
}

export interface Peso {
  imperial: string;
  metric: string;
}
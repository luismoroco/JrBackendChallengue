export type TAutor = {
  id?: number | null, 
  name: string,
  quotes: TQuote[]
};

export type TQuote = {
  id?: number | null,
  quote?: string,
  created_at?: string | unknown | Date,
  autor_id?: number | string
};

export type TQuoteInfo = {
  id?: number | null,
  quote?: string,
  created_at?: string | unknown | Date
};

export type TQuotes = {
  name: string,
  quotes?: TQuoteInfo[]
};
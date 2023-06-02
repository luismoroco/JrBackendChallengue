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

export type TUser = {
  id?: number,
  username?: string,
  password?: string
};

export const ErrTUser: TUser = {
  id: -1,
  username: "",
  password: ""
};

export interface IPayload {
  id: number;
  role: string;
  iat: number;
  exp: number;
}
export interface Transaction {
  name: string;
  amount: number;
  debit: boolean;
  reference: string;
  date: string;
  IBAN: string;
  message?: string;
  currency: string;

}

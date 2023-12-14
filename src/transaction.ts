export interface Transaction {
  name: string;
  amount: number;//in cents
  debit: boolean;
  reference: string;
  date: string;
  IBAN?: string;
  message?: string;
  currency: string;
}

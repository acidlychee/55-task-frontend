export interface Account {
  id: number
  accountId: string
  market: string
  currency: string
  total: number
  available: number
  frozen: number
  borrowed: number
  loaned: number
  withdrawing: number
  depositing: number
  timestamp: Date
}
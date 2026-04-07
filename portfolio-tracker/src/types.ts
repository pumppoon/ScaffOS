export interface Position {
  assetId: string;
  quantity: number;
  averagePrice: number;
}

export interface Allocation {
  portfolioId: string;
  positions: Position[];
}

export interface PnL {
  portfolioId: string;
  realized: number;
  unrealized: number;
}
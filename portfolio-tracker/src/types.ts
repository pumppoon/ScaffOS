// Branded type for assetId
export type AssetId = string & { readonly brand: unique symbol };

// Branded type for portfolioId
export type PortfolioId = string & { readonly brand: unique symbol };

/**
 * Represents a position in a portfolio.
 */
export interface Position {
  assetId: AssetId;
  quantity: number;
  averagePrice: number;
}

/**
 * Represents an allocation of assets in a portfolio.
 */
export interface Allocation {
  portfolioId: PortfolioId;
  positions: Position[];
}

/**
 * Represents the profit and loss details for a portfolio.
 */
export interface PnL {
  portfolioId: PortfolioId;
  realized: number;
  unrealized: number;
}
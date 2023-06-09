import type { ISODateTimeString } from "./ISODateTimeString";

/**
 * Type to represent a single Product
 */
export type Product = {
  /**
   * Unique ID for this product
   */
  id: string;
  createdAt: ISODateTimeString;
  name: string;
  score: number;
  currentSprint: number;
  samplingDetails: {
    rate: number;
    size: number;
    maxSampleCount: number;
    coolOff: number;
  };
};

export type Products = Record<Product["id"], Product>;

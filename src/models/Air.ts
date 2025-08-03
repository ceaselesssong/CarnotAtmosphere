/**
 * Immutable value type representing Air with quality and amount properties.
 */
export class Air {
  readonly quality: number;
  readonly amount: number;

  constructor(quality: number, amount: number) {
    this.quality = quality;
    this.amount = amount;
  }

  /**
   * Combines two Air objects and returns the weighted sum of their qualities.
   * @param air1 First Air object
   * @param air2 Second Air object
   * @returns New Air object
   */
  static combine(air1: Air, air2: Air): Air {
    const combinedAmount = air1.amount + air2.amount;

    const weightedQuality1 = air1.quality * air1.amount;
    const weightedQuality2 = air2.quality * air2.amount;
    const combinedQuality = (weightedQuality1 + weightedQuality2)/combinedAmount;

    return new Air(combinedQuality, combinedAmount);
  }

  /**
   * Returns a string representation of the Air object.
   */
  toString(): string {
    return `Air(quality: ${this.quality}, amount: ${this.amount})`;
  }

  /**
   * Checks equality with another Air object.
   */
  equals(other: Air): boolean {
    return (this.quality === other.quality) && (this.amount === other.amount);
  }
}

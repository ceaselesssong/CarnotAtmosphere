/**
 * GreetBox class that stores three strings and displays as a 100x100 pixel square.
 */
export class GreetBox {
  private initialState: string = "initial value";
  private currentState: string = "initial value";
  private nextState: string = "initial value";

  constructor() {
  }

  /**
   * Gets the initial state.
   */
  getInitialState(): string {
    return this.initialState;
  }

  /**
   * Gets the current state.
   */
  getCurrentState(): string {
    return this.currentState;
  }

  /**
   * Gets the next state.
   */
  getNextState(): string {
    return this.nextState;
  }

  /**
   * Sets the current state.
   */
  setCurrentState(state: string): void {
    this.currentState = state;
  }

  /**
   * Sets the next state.
   */
  setNextState(state: string): void {
    this.nextState = state;
  }
}

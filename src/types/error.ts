export class AppError extends Error {
  public readonly status: number;

  constructor(message: string, status: number = 500) {
    super(message);
    this.status = status;
    this.name = new.target.name;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class AppError extends Error {
  public readonly status: number;
  public readonly params?: Record<string, any>;

  constructor(message: string, status: number = 500, params?: Record<string, any>) {
    super(message);
    this.status = status;
    this.params = params;
    this.name = new.target.name;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export type ValidationErrorMessage = {
  key: string;
  params?: Record<string, any>;
};

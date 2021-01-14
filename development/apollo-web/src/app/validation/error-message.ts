export class ErrorMessage {
  constructor(
    public control: string,
    public validator: string,
    public message: string
  ) { }
}

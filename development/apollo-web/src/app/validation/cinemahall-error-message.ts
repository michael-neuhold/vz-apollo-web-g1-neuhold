import { ErrorMessage } from "./error-message";

export const CinemaHallFormErrorMessages = [
  new ErrorMessage('cinemaHallName', 'required', 'cinemaHallName id is required'),
  new ErrorMessage('sizeRows', 'required', 'sizeRows id is required'),
  new ErrorMessage('sizeRows', 'pattern', 'only numbers'),
  new ErrorMessage('sizeSeats', 'required', 'sizeSeats id is required'),
  new ErrorMessage('sizeSeats', 'pattern', 'only numbers')
]

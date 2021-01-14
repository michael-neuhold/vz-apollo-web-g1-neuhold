import { ErrorMessage } from "./error-message";

export const GenreFormErrorMessages = [
  new ErrorMessage('genreId', 'required', 'genre id is required'),
  new ErrorMessage('genreId', 'pattern', 'only numbers'),
  new ErrorMessage('genreId', 'noSpaceValidation', 'no spaces allowed'),
  new ErrorMessage('genreName', 'required', 'genre name is required')
]

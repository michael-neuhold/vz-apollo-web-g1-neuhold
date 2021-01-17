import { Observable, of } from "rxjs";
import { SnackbarMessageService } from "../snackbar-message/snackbar-message.service";

export const errorHandler = (error: Error | any, message: string, snackbarMessage: SnackbarMessageService): Observable<any> => {
  if (error.status == 409)
    snackbarMessage.openSnackBar(`${message} id conflict occured`, "snackbar-message-error");
  else if (error.status == 404)
    snackbarMessage.openSnackBar(`${message} not found`, "snackbar-message-error");
  console.log(error);
  return of(null);
}

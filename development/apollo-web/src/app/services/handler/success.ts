import { SnackbarMessageService } from "../snackbar-message/snackbar-message.service";

export const successHandler = (message: string, snackbarMessage: SnackbarMessageService) => {
  snackbarMessage.openSnackBar(message, "snackbar-message-success");
}

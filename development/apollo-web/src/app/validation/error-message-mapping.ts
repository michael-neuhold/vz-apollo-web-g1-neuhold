
export const updateErrorMessages = (possibleErrorMessages, formControl) => {
  let errors: { [key: string]: string } = {};
  for (const message of possibleErrorMessages) {
    const control = formControl.form.get(message.control);
    if (control &&
      control.dirty &&
      control.invalid &&
      control.errors[message.validator] &&
      !errors[message.control]) {
      errors[message.control] = message.message;
    }
  }
  return errors;
}

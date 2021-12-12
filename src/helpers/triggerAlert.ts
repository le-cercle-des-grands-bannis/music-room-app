export const triggerAlert = (
  stateError: any,
  stateMessage: any,
  setTimeOut: any,
  setAlertType: any,
) => {
  stateError();
  stateMessage();
  setTimeOut();
  setAlertType();
};

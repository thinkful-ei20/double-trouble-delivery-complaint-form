export const required = value => { !value ? "This field is required" : undefined };
export const nonEmpty = value => {
  // !value.trim() ? "It cannot be empty" : undefined
};

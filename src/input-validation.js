export const isAddressValid = (a) =>
  !new RegExp(/[@#$%^&*+=(){}\[\]:;"'<>?!_]/).test(a);
export const isAddressReachedLimit = (a) => 30 < a.length;
export const isNameValid = (n) =>
  new RegExp(/^[a-zA-Z][a-zA-Z0-9-_ ]*$/).test(n);
export const alreadyExists = (n, array) => array.includes(n);
export const isNameReachedLimit = (n) => 20 < n.length;

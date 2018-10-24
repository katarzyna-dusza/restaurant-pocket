export const checkAddress = (a) => new RegExp(/[@#$%^&*+=(){}\[\]:;"'<>?!_]/).test(a);

export const checkName = (n) => new RegExp(/[@#$%^&*+=(){}\[\]:;"'<>?!_,.\/]/).test(n);

export const alreadyExists = (n, array) => array.includes(n);

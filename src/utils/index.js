/**
 * Takes two strings and joins them via a separator
 * @param {string} stringA
 * @param {string} stringB
 * @param {string} separator
 * @returns string
 */
export function join(stringA, stringB, separator = " ") {
  return stringA + separator + stringB;
}

/**
 * Rounds a number (e.g, 1.123 -> 1.1 and 1.1923 -> 1.2)
 * @param {number} num
 * @param {number} digits
 * @returns number
 */
export const roundOf = (num, digits = 1) =>
  Number(parseFloat(`${num}`).toFixed(digits));

/**
 * Does not change the parameter passed. Only, allows a logging side effect
 * @param {any} x
 * @returns any
 */
export function identity(x) {
  console.log("Identity is called");
  return x;
}

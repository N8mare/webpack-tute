const multipleEntryTest = {
  count: 0,
};
/**
 *
 * @param {string} moduleName - Name of the module from which funciton is called
 */
export function printAndIncrementCount(moduleName = "") {
  console.log("Inside Singleton");
  multipleEntryTest.count = multipleEntryTest.count + 1;
  console.log(moduleName, " : ", multipleEntryTest.count);
}

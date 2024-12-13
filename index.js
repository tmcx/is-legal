/**
 * Checks if the provided age is considered the age of majority.
 *
 * @param {number} age - The age to check.
 * @returns {boolean} True if the age is 18 or greater; otherwise, false.
 * @throws {TypeError} If the input is not a number.
 * @throws {RangeError} If the input is a negative number.
 */
export const isLegal = (age) => {
  if (typeof age !== 'number' || Number.isNaN(age)) {
    throw new TypeError('The age must be a valid number.');
  }
  if (age < 0) {
    throw new RangeError('The age cannot be a negative number.');
  }
  return age >= 18;
};

export default isLegal;

/**
 * Class representing an age validator.
 */
class Is {
    #age;
    
    /**
     * Create an age validator.
     * @param {number} age - The age to validate.
     */
    constructor(age) {
        this.#age = age;
    }

    /**
     * Checks if the provided age is considered the age of majority.
     *
     * @returns {boolean} True if the age is 18 or greater; otherwise, false.
     * @throws {TypeError} If the input is not a number.
     * @throws {RangeError} If the input is a negative number.
     */
    legal() {
        if (typeof this.#age !== 'number' || Number.isNaN(this.#age)) {
          throw new TypeError('The age must be a valid number.');
        }
        if (this.#age < 0) {
          throw new RangeError('The age cannot be a negative number.');
        }
        return this.#age >= 18;
    }
}

/**
 * Factory function to create an age validator.
 *
 * @param {number} age - The age to validate.
 * @returns {Is} An instance of the Is class.
 */
const is = (age) => new Is(age);
export { is };
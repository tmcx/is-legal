class Is {
    #num;
    constructor(num) {
        this.#num = num;
    }
    legal() {
        return this.#num >= 18;
    }
}

const is = (age) => new Is(age);
export { is };

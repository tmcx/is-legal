declare class Is {
    #num: number;
    constructor(num: number);
    legal(): boolean;
}

declare const is: (age: number) => Is;
export { is };

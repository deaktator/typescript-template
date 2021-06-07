import { my_floor } from "../src/my_math";

describe("my_math", () => {
    beforeEach(() => {});

    afterEach(() => {});

    it("floor weirdly", () => {
        expect(Math.floor(my_floor(1.5))).toBe(4);
    });
});

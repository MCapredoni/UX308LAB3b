import { convertVolume } from "../convertVolume.js";

describe("test volume", function() {
    it("tests triangular prism volume", function() {
        let base = 3;
	    let height = 3;
	    let length = 3;
        let volume = 0.5*base*height*length;
        expect(volume).toBe(13.5);
    });
});
//Take a variable from **WindSpeed** as input and output the same *convert*ed to **WindScale**.
import { convertWindSpeedToWindScale } from "../convertWindSpeedToWindScale.js";

describe("test convertWindSpeedToWindScale", function() {
    it("Tests if program is aware of the breeze", function() {
        let WindSpeed = 19;
	let WindScale = "Gentle breeze";
        if (WindSpeed >= 19){
            WindScale = "Gentle breeze";
        }   
        expect(WindScale).toBe("Gentle breeze");
    });
  });

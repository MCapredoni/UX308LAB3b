//Take a variable with temperature in **kelvin** as input and output the same temperature *convert*ed to **fahrenheit**.
import { convertKelvinToFahrenheit } from "../convertKelvinToFahrenheit.js";

describe("test convertKelvinToFahrenheit", function() {
    it("tests kelvin to fahrenheit conversion", function() {
      	let kelvin = 296.15;
	    let fahrenheit = (kelvin-273.15)*9/5+32;
      expect(fahrenheit).toBe(73.4);
    });
});

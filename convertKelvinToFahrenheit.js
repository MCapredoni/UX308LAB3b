//Take a variable with temperature in **kelvin** as input and output the same temperature *convert*ed to **fahrenheit**.
function convertKelvinToFahrenheit(kelvin){
    let fahrenheit = (kelvin-273.15)*9/5+32;
    return fahrenheit;
}

export {convertKelvinToFahrenheit}
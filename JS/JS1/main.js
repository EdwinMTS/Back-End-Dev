// Set the default value of kelvin
const kelvin = 293;

// Calculate how much celcius is equal to the given amount of kelvin
let celcius = kelvin - 273;

// Calculate how much fahrenheit is equal to the given amount of kelvin(and celcius) and round the number op
let fahrenheit = celcius* (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is equal to ${fahrenheit} fahrenheit`);
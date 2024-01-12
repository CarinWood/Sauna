function convertFarenheit(farenheit) {
  return (farenheit - 32) * (5 / 9);
}

let temp = prompt("Enter desired temperature (in Farenheit): ")
let tempC = convertFarenheit(temp)

while(tempC < 73 || tempC > 77) {

if (tempC < 73) {
  
    temp = prompt("The temperature is too low! Enter a higher temperature (in Farenheit): ")
    tempC = convertFarenheit(temp)
  
} else if (tempC > 77) {
  temp = prompt("The temperature is too high! You will burn to death if you don't enter a lower temperature (in Farenheit)!:")
  tempC = convertFarenheit(temp)
} 
}

alert("The temperature is acceptable! Enjoy your sauna time!")


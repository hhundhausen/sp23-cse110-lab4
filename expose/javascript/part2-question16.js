let object= {
    redCars: 21, 
    blueCars: 45, 
    greenCars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
}; 

for (const property in object) {
    // print out the value if. . . 
        // (1) property states with the letter r 
        // (2) if the value of the prperty is an odd number 
    if(object[property] % 2 == 1 || property.charAt() == 'r')
        console.log(property)
} 
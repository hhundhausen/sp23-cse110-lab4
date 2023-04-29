let statistics = {
    redCars: 21, 
    blueCars: 45, 
    greenCars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
}; 

for (const s in statistics) {
    // print out the value if. . . 
        // (1) property states with the letter r 
        // (2) if the value of the prperty is an odd number 
    if(statistics[s] % 2 == 1 || s.charAt() == 'r')
        console.log(statistics[s]); 
} 
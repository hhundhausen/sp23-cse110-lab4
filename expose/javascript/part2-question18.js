const intervalS = setInterval(seconds, 1000); 

function seconds() {
    var d = new Date(); 
    var time = d.toLocaleTimeString(); 
    console.log(time); 
}
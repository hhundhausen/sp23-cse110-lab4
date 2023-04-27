const intervalS = setInterval(seconds, 1000, "Parameter 1"); 

function seconds(a) {
    var d = new Date(); 
    var time = d.toLocaleTimeString(); 
    console.log(time); 
}
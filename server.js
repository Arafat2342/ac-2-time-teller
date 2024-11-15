function Time(){

    var greating;
    var hour = new Date().getHours();

if (hour < 10) {
    document.getElementById("time").innerHTML = "The Time is: " + hour + "am";
    document.getElementById("great").innerHTML = "Good morning!";
    
}else if( hour < 20) {
    document.getElementById("time").innerHTML = "The Time is: " + hour + "pm";
    document.getElementById("great").innerHTML = "Good day!";
    
}else {
    document.getElementById("time").innerHTML = "The Time is: " + hour + "pm";
    document.getElementById("great").innerHTML = "Good night!";
} 

}
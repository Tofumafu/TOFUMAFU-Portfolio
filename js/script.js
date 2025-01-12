function updateDateTime(){
    const date = new Date();
    
    const dateString = date.toDateString();
    const timeString = date.toLocaleTimeString();
    
    document.getElementById("current-date").innerHTML = dateString;
    document.getElementById("current-time").innerHTML = timeString;
}

//Updates the time and date every second 
setInterval(updateDateTime, 1000);

//Display the time and date every second or update 
updateDateTime();

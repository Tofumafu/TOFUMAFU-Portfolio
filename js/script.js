function updateDateTime(){
    const now = new Date();

    const dateString = now.toLocaleString();
    const timeString = now.toLocaleString();

    document.getElementById("current-date").textContent = dateString;
    document.getElementById("current-time").textContent = timeString;
}

//Update te date and time every second 
setInterval(updateDateTime, 1000);

//Call to display the date and time immediately on the load
updateDateTime();
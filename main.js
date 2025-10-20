


function updateTime() {
    const utcTimeElement = document.getElementById("utcTime");
    const msElement = document.getElementById("currentTime");
    const now = new Date();
   
    // Show UTC string
    utcTimeElement.textContent = `Current Time UTC: ${now.toUTCString()}`;
}

setInterval(updateTime, 100);
updateTime();
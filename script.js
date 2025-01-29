// Function to update UTC time dynamically
function updateTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const now = new Date();
  utcTimeElement.textContent = `UTC Time: ${now.toUTCString()}`;
}

// Call function immediately and update every second
updateTime();
setInterval(updateTime, 1000);
// Function to update UTC time dynamically
function updateTime() {
  const utcTimeElement = document.getElementById("utc-time");
  const now = new Date();
  utcTimeElement.textContent = `UTC Time: ${now.toUTCString()}`;
}

// Call function immediately and update every second
updateTime();
setInterval(updateTime, 1000);

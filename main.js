    // Display current UTC time
        function updateTime() {
            const now = new Date();
            const utcString = now.toUTCString();
            document.getElementById('utcTime').textContent = `Current Time (UTC): ${utcString}`;
        }

        // Update time immediately and then every second
        updateTime();
        setInterval(updateTime, 1000);
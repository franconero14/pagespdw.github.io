function updateDateTime() {
    var now = new Date();
    var hour = now.getHours();
    var greeting;
    
    if (hour >= 5 && hour < 12) {
        greeting = "Selamat pagi!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Selamat siang!";
    } else if (hour >= 18 && hour < 24) {
        greeting = "Selamat malam!";
    } else {
        greeting = "Selamat beristirahat!";
    }
    
    var dateTimeString = greeting + " " + now.toLocaleString();
    document.getElementById("currentDateTime").textContent = dateTimeString;
    }
    
    setInterval(updateDateTime, 1000);
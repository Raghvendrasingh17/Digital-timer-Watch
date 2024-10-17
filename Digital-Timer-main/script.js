let hourEle = document.getElementById("hour");
let minEle = document.getElementById("minute");
let secEle = document.getElementById("seconds");
let amPm = document.getElementById("ampm");
let greetingEle = document.getElementById("greeting");
let bodyEle = document.body;

function updateTime() {
    let now = new Date(); 
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ap = 'AM';
    
    if (h >= 12) {
        ap = 'PM';
    }
    if (h > 12) {
        h = h - 12;
    }
    hourEle.innerText = String(h).padStart(2, '0');
    minEle.innerText = String(m).padStart(2, '0');
    secEle.innerText = String(s).padStart(2, '0');
    amPm.innerText = ap;

    updateGreeting(now);

    setTimeout(updateTime, 1000); // Calling the function every second
}

// Function to show the greeting msg to user 
function updateGreeting(now) {
    let hour = now.getHours();
    if (hour >= 5 && hour < 12) {
        greetingEle.innerText = "Good Morning 🌅";
        bodyEle.style.backgroundImage = "url('assets/morning.jpg')";
    } else if (hour >= 12 && hour < 17) {
        greetingEle.innerText = "Good Afternoon 🌞";
        bodyEle.style.backgroundImage = "url('assets/afternoon.jpg')";
    } else if (hour >= 17 && hour < 20) {
        greetingEle.innerText = "Good Evening 🌇";
        bodyEle.style.backgroundImage = "url('assets/evening.jpg')";
    } else {
        greetingEle.innerText = "Good Night 🌙";
        bodyEle.style.backgroundImage = "url('assets/night.avif')";
    }
}

updateTime(); // Starting the clock here

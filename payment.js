const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-container");
function addTusk(){
    /* checking to have date in list*/
    if(inputBox.value === ''){
        alert("U most write something! ")
    }
    else {
        /* creating new tasks*/
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        /* creating span for close completed tasks*/
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    savetusk();
}

listCont.addEventListener("click", function(e){
    /*checking tasks*/
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savetusk();
    }
     /*remove tasks*/
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savetusk();
    }
}, false);

function savetusk(){
    /*Function to sace task*/
    localStorage.setItem("data", listCont.innerHTML);
}

function showTusk(){
     /*Function to show task*/
    listCont.innerHTML = localStorage.getItem("data");
}
showTusk();

function beyblade() {
    let x = document.getElementById("animate")
    x.style.marginLeft = "300px"
    x.style.transition = "1s"
}
function beybladeBack() {
    let x = document.getElementById("animate")
    x.style.marginLeft = "300px"
    x.style.transition = "1s"
}
// button animation
const button = document.querySelector('#myButton');
const output = document.querySelector('#output');

button.addEventListener('click', function () {
    alert('Button clicked!') = 'Button clicked!';
});

const playButton = document.querySelector('#playButton');
const audio = document.querySelector('#myAudio');

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
  }
});


    let countdownDate = new Date("Jan 5, 2024 00:00:00").getTime();
    let x = setInterval(function(){
        let now = new Date().getTime();
        let distance = countdownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60* 24));
        let hours = Math.floor((distance % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;


    }, 1000)


function openTab(tabName) {
    let i;
    let tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function showNotification(type, message) {
    var notification = document.getElementById('notification');

    if (type === 'success') {
        notification.style.backgroundColor = '#4CAF50'; // Green for success
    } else if (type === 'error') {
        notification.style.backgroundColor = '#f44336'; // Red for error
    }

    notification.innerHTML = message;
    notification.style.display = 'block';

    // Automatically hide the notification after a few seconds
    setTimeout(function () {
        notification.style.display = 'none';
    }, 3000); // Display for 3 seconds
}



function scrollToTimeline() {
    document.getElementById("timeline").scrollIntoView({ behavior: "smooth" });
}

function showMessage(type) {
    let message = "";

    if (type === "sad") {
        message = "Whenever you feel sad, remember you are the strongest, most beautiful soul I know. I’m always with you.";
    }

    if (type === "miss") {
        message = "Distance is temporary. My love for you is permanent. Every mile between us is worth it.";
    }

    if (type === "doubt") {
        message = "We survived distance for one year. That means we’re built for forever.";
    }

    document.getElementById("modalText").innerText = message;
    new bootstrap.Modal(document.getElementById('loveModal')).show();
}

function showProposal() {

    document.getElementById("modalText").innerText =
        "From the first day to this moment, I have chosen you. And I will choose you every single day. Will you continue this love story with me forever? ❤️";

    new bootstrap.Modal(document.getElementById('loveModal')).show();

    // 🎉 Confetti Blast
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
}


// Set your next meeting date here
let meetingDate = new Date("April 20, 2026 21:36:00").getTime();

let countdownFunction = setInterval(function () {

    let now = new Date().getTime();
    let distance = meetingDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "We Are Together ❤️";
    }

}, 1000);


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 8 + 1) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 50000);
}

setInterval(createHeart, 500);

function startExperience() {
  let music = document.getElementById("bgMusic");
  music.play();

  alert("Welcome to our love world ❤️");
}


const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
    }
  });

  requestAnimationFrame(drawStars);
}

drawStars();

let slides = [
  { type: "video", src: "video.mp4" },
  { type: "image", src: "pic.jpeg" },
  { type: "image", src: "pic1.jpeg" },
  { type: "image", src: "pic2.jpeg" },
  { type: "image", src: "pic3.jpeg" },
  { type: "image", src: "pic4.jpeg" },
  { type: "image", src: "pic5.jpeg" },
  // { type: "video", src: "assets/videos/video2.mp4" }
];

let slideIndex = 0;
let slideTimer;

function showSlide() {
  let img = document.getElementById("slideImage");
  let video = document.getElementById("slideVideo");
  let videoSource = document.getElementById("videoSource");

  let current = slides[slideIndex];

  if (current.type === "image") {
    video.pause();
    video.style.display = "none";

    img.src = current.src;
    img.style.display = "block";

    slideTimer = setTimeout(nextSlide, 3000);
  } 
  else if (current.type === "video") {
    img.style.display = "none";

    videoSource.src = current.src;
    video.load();
    video.style.display = "block";
    video.play();

    video.onended = nextSlide;
  }
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

// 🔘 Buttons
function showPhotos() {
  slides = allSlides.filter(s => s.type === "image");
  slideIndex = 0;
  showSlide();
}

function showVideos() {
  slides = allSlides.filter(s => s.type === "video");
  slideIndex = 0;
  showSlide();
}

function resumeAuto() {
  slides = [...allSlides];
  slideIndex = 0;
  showSlide();
}

// start auto
showSlide();





let messages = [
  { text: "Hey…", type: "received" },
  { text: "Do you remember our first chat?", type: "sent" },
  { text: "Of course I do ❤️", type: "received" },
  { text: "One year later… I still choose you.", type: "sent" },
  { text: "Distance can't stop us.", type: "received" },
  { text: "Will you stay forever?", type: "sent" }
];

let msgIndex = 0;

function showChat() {
  if (msgIndex < messages.length) {
    let chatBox = document.getElementById("chatBox");

    let msgDiv = document.createElement("div");
    msgDiv.classList.add("message", messages[msgIndex].type);
    msgDiv.innerText = messages[msgIndex].text;

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    msgIndex++;
  }
}

setInterval(showChat, 2000);


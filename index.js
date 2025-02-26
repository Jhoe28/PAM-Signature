
let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");
let section = document.querySelector(".sectionFirst");

menuToggle.onclick = function () {
   header.classList.toggle('active');
   menuToggle.classList.toggle('topIn');
   section.classList.toggle('active');
}

function sendMail() {
   let parms = {
      subject = document.getElementById("subject").value,
      name = document.getElementById("name").value,
      phone_no = document.getElementById("phone_no").value,
      email = document.getElementById("email").value,
      message = document.getElementById("message").value,
   }
   emailjs.send("service_gs84s8p", "template_akotu9l",parms).then(alert("Email sent!!"));
}
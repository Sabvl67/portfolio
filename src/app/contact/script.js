function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value

    }
    emailjs.send("service_2hzms68","template_lbn3vr9",parms).then(alert("Email Sent!!"))
}
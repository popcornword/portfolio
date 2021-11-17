
function ready() {
    var body = document.body;

    body.classList.add("animate");

    function animateAvatarBackground() {
        document.getElementById("avatar").classList.add("animate-bg");
    }
      
    setTimeout(animateAvatarBackground, 600); 
}

document.addEventListener("DOMContentLoaded", ready);





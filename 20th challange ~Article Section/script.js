document.getElementById("read-more").addEventListener("click", function() {
    document.querySelector(".article").style.display = "none";
    document.querySelector(".full-article").style.display = "block";
});

document.getElementById("back-to-home").addEventListener("click", function() {
    document.querySelector(".full-article").style.display = "none";
    document.querySelector(".article").style.display = "block";
});

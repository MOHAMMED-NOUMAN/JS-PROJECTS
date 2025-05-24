var cont = document.querySelector("#card img");
var love = document.querySelector("#card i");

window.addEventListener("load", function() {
    love.style.transform = "scale(0)";
    love.style.opacity = "0";
});

cont.addEventListener("dblclick", function() {
    love.style.transform = "scale(0)";
    love.style.opacity = "0";
    
    setTimeout(function() {
        love.style.transform = "scale(1)";
        love.style.opacity = "0.8";
    }, 50);

    setTimeout(function() {
        love.style.opacity = "0";
    }, 1000);

    setTimeout(function() {
        love.style.transform = "scale(0)";
    }, 2000);
});

let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let box = document.querySelector('div.square_canvas');
  
let r = 0 , g = 0, b = 0;
var rho = 0.0;
var gamma;
var beta;
var luminance;

red.addEventListener("keyup", function (event) {
    r = red.value * 255;
    if (!r)
        r = 0;
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    
});
  
green.addEventListener("keyup", function (event) {
    g = green.value * 255;
    if (!g)
        g = 0;
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
  
blue.addEventListener("keyup", function (event) {
    b = blue.value * 255;
    if (!b)
        b = 0;
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
}); 

let btn = document.createElement("button");
    btn.innerHTML = "Convert";
    btn.onclick = function () {
    rho = 1 / (r + g + b) * r;
    gamma = 1 / (r + g + b) * g;
    beta = 1 / (r + g + b) * b;
    luminance = Math.max(r,g,b);
    luminance = luminance / 255;
        alert(" rho = " + rho.toFixed(2) + " gamma = " + gamma.toFixed(2) + " beta = " + beta.toFixed(2) + " luminance = " + luminance);
};

//Adds button to index.html
document.body.appendChild(btn);



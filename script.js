
let colorBtn = document.querySelector(".colorBtn")
const colors = [1, 2, 3, 4, 5, 6, 7, 9, "a", "b", "c", "d", "e", "f"]

// Write function to randomly generate bg color
colorBtn.addEventListener("click", function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++){
        hexColor += colors[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexColor
});



// Write function to get random number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


// External Contact Buttons

const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');
const email = document.getElementById('email');

github.addEventListener("click", function(){
    alert("Redirecting to GitHub!")
});

linkedin.addEventListener("click", function(){
    alert("Redirecting to LinkedIn!")
});

email.addEventListener("click", function(){
    alert("Redirecting to Email!")
});



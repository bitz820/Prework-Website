
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

const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function(){
console.log(sidebar.classList)
// if (sidebar.classList.contains('show-sidebar')){
//     sidebar.classList.remove('show-sidebar')
// }else(sidebar.classList.add('show-sidebar'))
sidebar.classList.toggle('show-sidebar')
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})

// dynamically change class of buttons to expand/collapse the questions

// Traversing the DOM via parent element
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')

//     })
// })

// using selector inside of the existing elements 
const questions = document.querySelectorAll('.question')
// console.log(questions)

questions.forEach(function(question){
    // console.log(question)
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            if (item !==question){
                item.classList.remove('show-text')
            }
        })

        question.classList.toggle('show-text')
    })
})
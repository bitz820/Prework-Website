
let colorBtn = document.querySelector(".colorBtn")
const colors = [1, 2, 3, 4, 5, 6, 7, 9, "a", "b", "c", "d", "e", "f"]

// Write function to randomly generate bg color
colorBtn.addEventListener("click", function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
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

github.addEventListener("click", function () {
    alert("Redirecting to GitHub!")
});

linkedin.addEventListener("click", function () {
    alert("Redirecting to LinkedIn!")
});

email.addEventListener("click", function () {
    alert("Redirecting to Email!")
});

const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function () {
    console.log(sidebar.classList)
    // if (sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar')
    // }else(sidebar.classList.add('show-sidebar'))
    sidebar.classList.toggle('show-sidebar')
});

closeBtn.addEventListener('click', function () {
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

questions.forEach(function (question) {
    // console.log(question)
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text')
            }
        })

        question.classList.toggle('show-text')
    })
})

// Create an array of all projects so that user can scroll through them
const projects = [
    {
        id: 1,
        projectName: "Project 1",
        framework: 'Javascript',
        img: "https://4.bp.blogspot.com/-8U9UaLlJfII/WvZvgmx4czI/AAAAAAAAAoU/1bOJxQ9awFE7KdqgYPcBkeFsj5saEix5QCEwYBhgL/s1600/LABELS%2B-02.jpg",
        description: "Im baby beard yuccie hashtag, craft beer adaptogen dreamcatcher man bun normcore bushwick typewriter marfa pinterest organic small batch tumeric. Chia squid shabby chic actually bicycle rights kinfolk. Adaptogen dreamcatcher truffaut plaid pour-over pug. Vape pok pok hoodie farm-to-table etsy gluten-free green juice taiyaki selvage meh."
    },
    {
        id: 2,
        projectName: "Project 2",
        framework: 'React',
        img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408926441l/21075221.jpg",
        description: " Ennui four dollar toast jianbing locavore photo booth XOXO. Pitchfork vinyl distillery butcher. Fam hoodie thundercats unicorn irony offal. Vinyl craft beer ugh pork belly keffiyeh flannel occupy. Seitan ennui sartorial chillwave tousled. Tofu meh hot chicken, raw denim ramps vexillologist ugh paleo cold-pressed master cleanse. Williamsburg bespoke quinoa ennui put a bird on it chillwave schlitz farm-to-table franzen cray gluten-free, you probably havent heard of them adaptogen pitchfork."
    },
    {
        id: 3,
        projectName: "Project 3",
        framework: 'Ruby',
        img: "https://pbs.twimg.com/media/E_MG4icWUAInJbS?format=jpg&name=large",
        description: "Raclette man bun affogato street art. Gentrify quinoa cloud bread, try-hard fanny pack mustache leggings squid hoodie dreamcatcher. Cray kale chips mustache kitsch, waistcoat stumptown freegan chicharrones keytar 90's fam kombucha brunch actually fingerstache. Lumbersexual wayfarers pinterest cardigan narwhal, lomo hashtag ugh air plant subway tile glossier kale chips leggings asymmetrical taxidermy. Typewriter VHS cray beard williamsburg biodiesel live-edge pok pok taiyaki whatever art party green juice trust fund hashtag. Ugh YOLO thundercats, microdosing fixie tattooed copper mug deep v jean shorts tbh man bun."
    },
    {
        id: 4,
        projectName: "Project 4",
        framework: 'Rails, React, Redux',
        img: "https://static.wixstatic.com/media/702263_59eeeb0fce9045158480f8b12837d34c~mv2.jpeg/v1/fit/w_2500,h_1330,al_c/702263_59eeeb0fce9045158480f8b12837d34c~mv2.jpeg",
        description: "Flexitarian tousled direct trade tbh blog. Pug tbh williamsburg 3 wolf moon brunch air plant keffiyeh four loko. Fanny pack activated charcoal freegan locavore. Before they sold out 8-bit bushwick, microdosing bitters heirloom biodiesel poutine food truck tattooed schlitz farm-to-table gluten-free."
    },
    {
        id: 5,
        projectName: "Project 5",
        framework: 'Capstone',
        img: "https://edmethods.com/wp-content/uploads/2019/10/Final-Project-2000x1200.png",
        description: "I'm baby banh mi chartreuse ugh, pitchfork fashion axe taiyaki literally green juice man braid microdosing flannel farm-to-table truffaut. Cred raclette fanny pack, hell of pug small batch hella organic seitan tilde taiyaki letterpress freegan lomo. Biodiesel taxidermy gentrify venmo schlitz bicycle rights selvage dreamcatcher paleo offal cloud bread viral skateboard. Bespoke church-key locavore small batch, cronut salvia ugh twee stumptown literally +1 bicycle rights tumblr. Street art tilde chambray wolf food truck."    
    },
];

// select items
const img = document.getElementById('project-img')
const projectName = document.getElementById('projectName')
const framework = document.getElementById('framework')
const description = document.getElementById('description')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let defaultItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showProject(defaultItem)
});

function showProject(project) {
    const item = projects[project];
    img.src = item.img;
    projectName.textContent = item.projectName;
    framework.textContent = item.framework;
    description.textContent = item.description
}

// show next project
nextBtn.addEventListener('click', function () {
    defaultItem++
    if (defaultItem > projects.length - 1) {
        defaultItem = 0
    }
    showProject(defaultItem)

});

// show last project
prevBtn.addEventListener('click', function () {
    defaultItem--
    if (defaultItem < 0) {
        defaultItem = projects.length - 1
    }
    showProject(defaultItem)
})

// random
randomBtn.addEventListener('click', function () {
    let randomNum = Math.floor(Math.random() * projects.length)
    showProject(randomNum)
})
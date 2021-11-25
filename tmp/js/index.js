const hamburger = document.querySelector("#hamburger");
const navUL = document.querySelector("#nav-ul");

const header = document.querySelector("header");

let first_click = true;

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");    
});



const projs = {
  "projects": [
    {
      "title": "Tapping Game iOS",
      "description": "The Tapping Game is sort of Duck-Hunt inspired game, try it out!",
      "language": {
          "name": "Swift",
          "class": "orange"
        },
      "url": "https://github.com/Keffin/Tapping-Game-iOS"
    },
    {
      "title": "Discord and Spotify bot",
      "description": "Discord bot with a small touch of Spotify",
      "language": {
          "name": "Python",
          "class": "blue" 
        },
      "url": "https://github.com/Keffin/Discord-bot-and-spotify"
    },
    {
      "title": "Tic-Tac-Toe", 
      "description": "A simple terminal-based Tic-Tac-Toe game",
      "language": {
          "name": "Java",
          "class": "brown"
      },
    "url": "https://github.com/Keffin/Simple-Tictactoe"
    }
  ]
};



function proj_view(proj){
  let ul = document.createElement("ul"); 
  for (let i = 0; i < proj.projects.length; i++){
    let li = document.createElement("li"); 
    li.appendChild(document.createTextNode(proj.projects[i].title); 
    ul.appendChild(li); 
  }
  return ul; 
}

document.querySelector("#projects").appendChild(proj_view(projs));


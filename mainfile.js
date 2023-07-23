


var i = 0;
var txt =
  "clock back to when people lived in small villages and took care of each other.";
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("animation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content")

tabs.addEventListener("click", (event) => {
  const id = event.target.dataset.id;

  if (id) {
    btns.forEach((btn)=>{
btn.classList.remove("live")
    })
    event.target.classList.add("live");
    articles.forEach((article)=>{
article.classList.remove("live");
    })
    const element = document.getElementById(id)
    element.classList.add("live")
  }
});

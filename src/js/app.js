import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  function addArticle() {
    const myDiv = document.getElementById('main')

    const artc = document.createElement('article')
    artc.className = "message";
    artc.innerHTML = "Hello there!"
    
    myDiv.append(artc*5)
  }

  const button = document.querySelector(".button");
  button.addEventListener("click", addArticle());
});

import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  function addArticle() {
    const artc = document.createElement("article")
    artc.className = "message";
    artc.innerHTML = "Hello there!"
    
    document.body.appendChild((artc)*5)
  }

  const button = document.querySelector(".button");
  button.addEventListener("click", addArticle());
});

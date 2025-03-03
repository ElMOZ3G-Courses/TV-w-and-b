function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
const a1 = document.getElementById('a1')
function search() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const movies = document.querySelectorAll(".movie-card, .series-card");

    movies.forEach(movie => {
        const title = movie.querySelector("h3").textContent.toLowerCase();
        if (title.includes(query)) {
            movie.style.display = "block";
            a1.style.display = 'none'
        } else {
            movie.style.display = "none";
            a1.style.display = 'block'
        }
    });
}
function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("comment-list");

    if (commentInput.value.trim() !== "") {
        const newComment = document.createElement("p");
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}
const afla = document.getElementById('afla')
const sec = document.getElementById('movie')
afla.onclick = function(){
    sec.scrollIntoView()
}
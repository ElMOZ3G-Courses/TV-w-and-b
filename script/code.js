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
setTimeout(()=>{
    afla.onclick = function() {
        const scrollElements = document.querySelectorAll(".scroll-animation");
        const elementInView = (el) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight)
            );
        };
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el)) {
                    el.classList.add("active");
                }
            });
        };
        window.addEventListener("scroll", handleScrollAnimation);
        window.addEventListener("load", handleScrollAnimation);

        sec.scrollIntoView()
    }
},2000)

function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}
showNotification("تمت إضافة فيلم جديد!");
const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
        backToTopButton.classList.add("show"); 
    } else {
        backToTopButton.classList.remove("show"); 
        setTimeout(() => {
            backToTopButton.style.display = "none"; 
        }, 500);
    }
};
backToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
const categories = document.querySelectorAll(".categories ul li");
categories.forEach((item, index) => {
    item.style.setProperty("--i", index);
});

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
const scrollUpElements = document.querySelectorAll(".scroll-up-animation, .scroll-up-animation-scale");
const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};
const handleScrollUpAnimation = () => {
    scrollUpElements.forEach((el) => {
        if (elementInView(el)) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
};
window.addEventListener("scroll", handleScrollUpAnimation);
window.addEventListener("load", handleScrollUpAnimation);
const re = document.getElementById('re')
const mss = document.getElementById('mss')
re.onclick = function(){
    window.location.reload()
}
const series = document.querySelectorAll('.series');
mss.onclick = function(){
    series.scrollIntoView()
}
const ramadan25 = document.getElementById('ramadan25');
ramadan25.onclick = function(){
    window.location.href = 'log/sD%5E&%5E977%23+efeVgjOU=+!ds2@dsdVDDFTV/series.html'
}


// تحديد العناصر التي نريد إضافة الانيميشن لها
const scrollElements = document.querySelectorAll(".scroll-animation");

// وظيفة للتحقق من ظهور العنصر في منطقة العرض


// وظيفة لإضافة class "active" عند ظهور العنصر
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            el.classList.add("active");
        }
    });
};

// تشغيل الوظيفة عند التمرير
window.addEventListener("scroll", handleScrollAnimation);

// تشغيل الوظيفة عند تحميل الصفحة لضمان ظهور العناصر المرئية
window.addEventListener("load", handleScrollAnimation);

// وظيفة لإظهار/إخفاء قائمة البرجر
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
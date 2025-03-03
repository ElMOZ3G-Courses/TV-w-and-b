function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
function showMore() {
    const seriesGrid = document.querySelector(".series-grid");
    // إضافة المزيد من البطاقات هنا
}
// تحديد العناصر التي نريد إضافة الانيميشن لها
const scrollElements = document.querySelectorAll(".scroll-animation");

// وظيفة للتحقق من ظهور العنصر في منطقة العرض
const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

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
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

const gallery = document.querySelector('.gallery');

        // وظيفة التمرير
        function scrollGallery(direction) {
            const scrollAmount = gallery.clientWidth; // احصل على عرض الـ gallery ديناميكيًا
            gallery.scrollBy({
                left: direction * scrollAmount, // اتجاه التمرير (1 لليمين، -1 لليسار)
                behavior: 'smooth' // تمرير سلس
            });
        }

        // بدء التمرير التلقائي (اختياري)
        const scrollSpeed = 4000; // سرعة التمرير (3 ثواني)
        let autoScrollInterval;

        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                scrollGallery(1); // التمرير لليمين تلقائيًا
            }, scrollSpeed);
        }

        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }

        // بدء التمرير التلقائي عند تحميل الصفحة (اختياري)
        window.onload = startAutoScroll;
        scrollGallery.onload;

        // إيقاف التمرير التلقائي عند التمرير يدويًا (اختياري)
        gallery.addEventListener('mouseenter', stopAutoScroll);
        gallery.addEventListener('mouseleave', startAutoScroll);
        gallery.addEventListener('mouseleave', startAutoScroll);
const kamelbtn = document.getElementById('kamel-btn')
kamelbtn.addEventListener('click', () => {
    window.location.href = 'video-kamel-el-add3/=2/video.html'
})

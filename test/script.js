const videoItems = document.querySelectorAll('.video-item');
const mainVideo = document.getElementById('main-video');
const videoDetails = document.querySelector('.video-details h2');

        // إضافة حدث النقر لعناصر الفيديو
videoItems.forEach((item) => {
    item.addEventListener('click', () => {
        const videoSrc = item.getAttribute('data-video-src');
        const videoTitle = item.querySelector('.video-info h4').textContent;

                // تغيير الفيديو
        mainVideo.src = videoSrc;

                // تحديث تفاصيل الفيديو
        videoDetails.textContent = videoTitle;
    });
})
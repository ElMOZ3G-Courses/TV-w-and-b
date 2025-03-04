// تغيير الفيديو عند النقر على عنصر في القائمة
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
});
const back = document.getElementById('back1')
back.addEventListener('click', () => {
    window.location.href = '/log/sD%5E&%5E977%23+efeVgjOU=+!ds2@dsdVDDFTV/series.html'
})

const h22 = document.getElementById('h22')
h22.addEventListener('click', () => {
    videoTitle.src = 'https://youtu.be/mHyA_Dju3Hs?si=EtTGLJvlhmIeibcO'
})
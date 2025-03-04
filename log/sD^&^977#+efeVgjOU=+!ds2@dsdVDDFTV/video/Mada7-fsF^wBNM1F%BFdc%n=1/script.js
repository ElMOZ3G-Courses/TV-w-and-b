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
    videoTitle.src = 'https://firebasestorage.googleapis.com/v0/b/tv-mazbot.appspot.com/o/ramadan2025%2FElmadah-5%2FEl.Maddah.Ostouret.El.Ahd.S5.EP2.mkv?alt=media&token=c9ecb481-4960-4538-83e8-7eaf5cf280b9'
})
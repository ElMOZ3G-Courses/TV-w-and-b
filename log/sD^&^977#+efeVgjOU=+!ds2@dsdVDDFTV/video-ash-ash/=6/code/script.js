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
const h22 = document.getElementById('h22')
const htext = document.getElementById('hh')
const video3 = document.getElementById('video3')
const video4 = document.getElementById('video4')
const video5 = document.getElementById('video5')
const h33 = document.getElementById('h33')
const h44 = document.getElementById('h44')
const h55 = document.getElementById('h55')
const h66 = document.getElementById('h66')
const video6 = document.getElementById('video6')
h22.addEventListener('click', () => {
    mainVideo.style.display = 'none'
    video2.style.display = 'block'
    video3.style.display = 'none'
    video4.style.display = 'none'
    video5.style.display = 'none'
    htext.innerHTML = 'اش اش الحلقة 2'
    // الحصول على العنصر iframe
    const iframe = document.getElementById('main-video');

    // إيقاف الفيديو (يعتمد على دعم الموقع)
    function stopVideo() {
        if (iframe) {
            // إرسال أمر إيقاف التشغيل إلى iframe
            iframe.src = iframe.src; // إعادة تحميل iframe لإيقاف الفيديو
        }
    }

    // استدعاء الدالة لإيقاف الفيديو
    stopVideo();
})
const h11 = document.getElementById('h11')
h11.addEventListener('click', () => {
    mainVideo.style.display = 'block'
    video2.style.display = 'none'
    video3.style.display = 'none'
    video4.style.display = 'none'
    video5.style.display = 'none'
    htext.innerHTML = 'اش اش الحلقة 1'
    // الحصول على العنصر iframe
    const iframe = document.getElementById('main-video');

    // إيقاف الفيديو (يعتمد على دعم الموقع)
    function stopVideo() {
        if (iframe) {
            // إرسال أمر إيقاف التشغيل إلى iframe
            iframe.src = iframe.src; // إعادة تحميل iframe لإيقاف الفيديو
        }
    }

    // استدعاء الدالة لإيقاف الفيديو
    stopVideo();
})

h33.addEventListener('click',()=>{
    mainVideo.style.display = 'none'
    video2.style.display = 'none'
    video3.style.display = 'block'
    video4.style.display = 'none'
    video5.style.display = 'none'
    htext.innerHTML = 'اش اش الحلقة 3'
    // الحصول على العنصر iframe
    const iframe = document.getElementById('main-video');

    // إيقاف الفيديو (يعتمد على دعم الموقع)
    function stopVideo() {
        if (iframe) {
            // إرسال أمر إيقاف التشغيل إلى iframe
            iframe.src = iframe.src; // إعادة تحميل iframe لإيقاف الفيديو
        }
    }

    // استدعاء الدالة لإيقاف الفيديو
    stopVideo();
})
h44.addEventListener('click', ()=>{
    mainVideo.style.display = 'none'
    video2.style.display = 'none'
    video3.style.display = 'none'
    video4.style.display = 'block'
    video5.style.display = 'none'
    htext.innerHTML = 'اش اش الحلقة 4'
    // الحصول على العنصر iframe
    const iframe = document.getElementById('main-video');

    // إيقاف الفيديو (يعتمد على دعم الموقع)
    function stopVideo() {
        if (iframe) {
            // إرسال أمر إيقاف التشغيل إلى iframe
            iframe.src = iframe.src; // إعادة تحميل iframe لإيقاف الفيديو
        }
    }

    // استدعاء الدالة لإيقاف الفيديو
    stopVideo();
})

const back1 = document.getElementById('back1')
back1.addEventListener('click', ()=>{
    window.location.href = '/log/sD%5E&%5E977%23+efeVgjOU=+!ds2@dsdVDDFTV/series.html'
})
h55.addEventListener('click', ()=>{
    mainVideo.style.display = 'none'
    video2.style.display = 'none'
    video3.style.display = 'none'
    video4.style.display = 'none'
    video5.style.display = 'block'
    htext.innerHTML = 'اش اش الحلقة 5'
    // الحصول على العنصر iframe
    const iframe = document.getElementById('main-video');

    // إيقاف الفيديو (يعتمد على دعم الموقع)
    function stopVideo() {
        if (iframe) {
            // إرسال أمر إيقاف التشغيل إلى iframe
            iframe.src = iframe.src; // إعادة تحميل iframe لإيقاف الفيديو
        }
    }

    // استدعاء الدالة لإيقاف الفيديو
    stopVideo();
})
h66.addEventListener('click', ()=>{
    mainVideo.style.display = 'none'
    video2.style.display = 'none'
    video3.style.display = 'none'
    video4.style.display = 'none'
    video5.style.display = 'none'
    video6.style.display = 'block'
    htext.innerHTML = 'اش اش الحلقة 6'
    // الحصول على العنصر iframe
    const iframe = document.getElementById('main-video');

    // إيقاف الفيديو (يعتمد على دعم الموقع)
    function stopVideo() {
        if (iframe) {
            // إرسال أمر إيقاف التشغيل إلى iframe
            iframe.src = iframe.src; // إعادة تحميل iframe لإيقاف الفيديو
        }
    }

    // استدعاء الدالة لإيقاف الفيديو
    stopVideo();
})

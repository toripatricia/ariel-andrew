// Open the image in lightbox
document.querySelectorAll('.photo-item').forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const captionText = item.querySelector('.caption').innerText;

    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');

    lightboxImg.src = imgSrc;
    lightboxCaption.innerText = captionText;
    lightbox.classList.add('active');
  });
});

// Close the lightbox when clicked outside the image
document.querySelector('.lightbox').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove('active');
  }
});

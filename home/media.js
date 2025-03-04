const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const trackTitle = document.getElementById('track-title');
const trackList = document.getElementById('track-list');

// Track list
const tracks = [
    { title: 'Peculiar Grace', src: '/home/media-assets/Grace 2-trimmed.mp3' },
    { title: 'Du Bist Der Lenz', src: '/home/media-assets/Wagner 1-trimmed.mp3' },
    { title: 'Morro, ma prima in grazia', src: '/home/media-assets/Morro 2-trimmed.mp3' },
    { title: 'Moments in the Woods', src: '/home/media-assets/Moments.mp3' }
];
let currentTrack = 0;

// Load a track
function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    updateActiveTrack(index);
    progress.value = 0;
}

// Update active track in the list
function updateActiveTrack(index) {
    document.querySelectorAll('#track-list li').forEach((li, idx) => {
        li.classList.toggle('active', idx === index);
    });
}

// Play or Pause
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;'; // Solid black pause icon
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '&#9654;'; // Solid black play icon
    }
});

// Next Track
nextBtn.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.innerHTML = '&#10074;&#10074;'; // Solid black pause icon
});

// Previous Track
prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.innerHTML = '&#10074;&#10074;'; // Solid black pause icon
});

// Update Progress Bar
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent || 0;
});

// Seek
progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Click on Track List
trackList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        currentTrack = parseInt(e.target.dataset.index, 10);
        loadTrack(currentTrack);
        audio.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;'; // Solid black pause icon
    }
});

// Load the initial track
loadTrack(currentTrack);


// scroll animation


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(element => {
    observer.observe(element);
  });
});

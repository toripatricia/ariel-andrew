const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const trackTitle = document.getElementById('track-title');
const trackList = document.getElementById('track-list');

// Track list
const tracks = [
    { title: 'Track 1', src: '/home/media-assets/Grace 2.mp3' },
    { title: 'Track 2', src: '/home/media-assets/Wagner 1.mp3' },
    { title: 'Track 3', src: '/home/media-assets/Morro 2.mp3' }
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
        playPauseBtn.textContent = '⏸';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
});

// Next Track
nextBtn.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = '⏸';
});

// Previous Track
prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = '⏸';
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
        playPauseBtn.textContent = '⏸';
    }
});

// Load the initial track
loadTrack(currentTrack);

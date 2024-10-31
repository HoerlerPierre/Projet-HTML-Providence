function afficherDiv(divId) {
    var divs = document.getElementsByClassName("selec");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }
    var div = document.getElementById(divId);
    div.style.display = "block";
}

const artistName = document.getElementById('artistName');
const albumName = document.getElementById('albumName');
const songTitle = document.getElementById('songTitle');
const stopButton = document.getElementById('stopButton');
const imageBoxes = document.querySelectorAll('.albsize');
const playButton = document.getElementById('playButton');
const volumeUpButton = document.getElementById('volumeUpButton');
const volumeDownButton = document.getElementById('volumeDownButton');
const audioPlayer = document.getElementById('audioPlayer');

audioPlayer.volume = 0.1;

// nom des artistes
imageBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const artist = box.getAttribute('data-artist');
        const title = box.getAttribute('data-titre');
        const album = box.getAttribute('data-album');
        artistName.textContent = `Artiste: ${artist}`;
        albumName.textContent = `Album: ${album}`;
        songTitle.textContent = `Titre: ${title}`;
    });
});

// selection de la musique
let selectedMusic = null;
imageBoxes.forEach(box => {
    box.addEventListener('click', () => {
        imageBoxes.forEach(b => b.classList.remove('selected'));
        
        box.classList.add('selected');
        
        selectedMusic = box.getAttribute('data-music');
    });
});

// joeur de la musique
playButton.addEventListener('click', () => {
    if (selectedMusic) {
        audioPlayer.src = selectedMusic;
        audioPlayer.play();
    } else {
        alert("Veuillez sélectionner une image avant de jouer la musique !");
    }
});

// Augmenter le volume
volumeUpButton.addEventListener('click', () => {
    if (audioPlayer.volume < 1) {
        audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.05);
    }
});

// Baisser le volume
volumeDownButton.addEventListener('click', () => {
    if (audioPlayer.volume > 0) {
        audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.05);
    }
});

stopButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});
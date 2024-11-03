document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");
    const stopButton = document.getElementById("stopButton");
    const volumeUpButton = document.getElementById("volumeUpButton");
    const volumeDownButton = document.getElementById("volumeDownButton");
    const vinylImage = document.getElementById("vinylImage");
    let currentSong = null;

    // mettre a jour les
    function updateInfo(artist, album, title, songSrc) {
        document.getElementById("artistName").textContent = `Artiste: ${artist}`;
        document.getElementById("albumName").textContent = `Album: ${album}`;
        document.getElementById("songTitle").textContent = `Titre: ${title}`;
        if (currentSong) {
            currentSong.pause(); 
        }
        currentSong = new Audio(songSrc);
        currentSong.volume = 0.2; 
    }

    // rotation vinyle
    function startVinylRotation() {
        vinylImage.classList.add("vinyl-rotate");
    }
    function stopVinylRotation() {
        vinylImage.classList.remove("vinyl-rotate");
    }

    // ajout selec au click

    function selectImage(element) {
        document.querySelectorAll(".clickable .albmimg").forEach(img => {
            img.classList.remove("selected");
        });
        element.classList.add("selected");
    }

    // reset et verif musique

    playButton.addEventListener("click", function() {
        if (currentSong) {
            currentSong.play();
            startVinylRotation();
        } else {
            alert("Veuillez sélectionner une musique.");
        }
    });

    stopButton.addEventListener("click", function() {
        if (currentSong) {
            currentSong.pause();
            currentSong.currentTime = 0; 
            stopVinylRotation();
        }
    });


    // volume du lecteur

    volumeUpButton.addEventListener("click", function() {
        if (currentSong) {
            currentSong.volume = Math.min(currentSong.volume + 0.1, 1); 
        }
    });

    volumeDownButton.addEventListener("click", function() {
        if (currentSong) {
            currentSong.volume = Math.max(currentSong.volume - 0.1, 0); 
        }
    });

    // data

    document.querySelectorAll(".clickable").forEach(function(element) {
        element.addEventListener("click", function() {
            const artist = element.getAttribute("data-artist");
            const album = element.getAttribute("data-album");
            const title = element.getAttribute("data-title");
            const songSrc = element.getAttribute("data-src");

            updateInfo(artist, album, title, songSrc);
            stopVinylRotation(); // Arrêter la rotation du vinyle quand une nouvelle chanson est sélectionnée

            // Ajouter le style de sélection à l'image cliquée
            const imgElement = element.querySelector(".albmimg");
            selectImage(imgElement);
        });
    });

    // Arrêter la rotation du vinyle quand la musique se termine
    if (currentSong) {
        currentSong.addEventListener("ended", stopVinylRotation);
    }
});

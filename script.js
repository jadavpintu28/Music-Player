const song = document.getElementById("song");
const img = document.querySelector(".song-img");
const icon = document.getElementById("icon");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const titel = document.getElementById("titel");
const singer = document.getElementById("singer");


const songs = [
    {
        name:"song1",
        titel:"Song: Barish ki jaye",
        singer:"B Praak",
    },
    {
        name:"song2",
        titel:"Song:Mann Bharriya ",
        singer:"B Praak",
    },
    {
        name:"song3",
        titel:"Song: Soch",
        singer:"Hardy Sandhu",
    },
    {
        name:"song4",
        titel:"Song: Yaarr Ni Milyaa ",
        singer:"Hardy Sandhu",
    },
    {
        name:"song5",
        titel:"Song: Arjan Vailly",
        singer:"Bhupinder Babbal",
    },
    {
        name:"song6",
        titel:"Song: Keshariya",
        singer:"Arijit Singh"
    }
    
]


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime
}

     let isPlaying = false;
   
    function playSong(){
        if(icon.classList.contains("fa-pause")){
            isPlaying = false;
            song.pause()
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");

            img.classList.remove("anima");
        }else{
            isPlaying = true;
            song.play()
            icon.classList.add("fa-pause");
            icon.classList.remove("fa-play");

            img.classList.add("anima");
        }
    }
    
    icon.addEventListener("click",playSong)

    


if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime
    },500);
}

progress.onchange = function(){
    song.play()
    song.currentTime = progress.value;
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
}

const loadSongs = (songs)=>{
    titel.textContent = songs.titel
    singer.textContent = songs.singer
    song.src = "music/" + songs.name + ".mp3"
    img.src = "images/" + songs.name + ".jpg"
}

songIndex = 0;

next.addEventListener('click',()=>{
    const nextSong = ()=>{
        songIndex = (songIndex + 1)% songs.length;
        loadSongs(songs[songIndex])
    
        playSong()
    }
    nextSong()
})


prev.addEventListener("click",()=>{
    const prevSong = ()=>{
        songIndex = (songIndex - 1 + songs.length)% songs.length;
        loadSongs(songs[songIndex])
    
        playSong()
    }
    prevSong()
})



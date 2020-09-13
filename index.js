//start running when window loads
window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound")
    const boards = document.querySelectorAll(".boards div")

    //list of names of songs to display
    nameOfSong = ["chinese new year by sales",
                    "cool by dua lipa",
                    "we are young by fun",
                    "watermelon sugar by harry styles",
                    "I see you by kygo ft billy raffoul",
                    "shooting stars by bag raiders",
                    "together by sia"]
    
    //list of board colours to match respective names of songs                
    boardColour = ["blue","brown","yellow","darkgreen","darkred","blueviolet","rgb(0, 22, 3)"]


    
    var song_index
    //loop through to play songs
    boards.forEach((board,index) => {
        var number_of_clicks = 0
        const text = document.getElementById("text")
        const music_name = document.getElementById("songName")
        board.addEventListener("click", function(){
            //statement checks if song changes
            if(song_index != sounds[index]){
                //stops previously playing song
                sounds.forEach((sound) => {
                    sound.pause()
                    sound.currentTime = 0
                })
            }
            song_index = sounds[index]
            number_of_clicks += 1
            //play song
            if(number_of_clicks % 2 != 0){
                sounds[index].play()
                text.style.fontSize = "100%"
                text.innerHTML = "Now playing"
                music_name.style.color = boardColour[index]
                music_name.innerHTML = `${nameOfSong[index]}`
            }
            //pause song
            else{sounds[index].pause()}
        })
    })
})
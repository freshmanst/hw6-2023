let video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;



    

    console.log("Video initialized");
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// video.volume = 1; 
	document.querySelector("#volume").textContent = (video.volume * 100) + "%";
    console.log("Volume:", video.volume);
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;  
	console.log("New speed:", video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;  
	console.log("New speed:", video.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
		console.log("Going back to the start");
	}
	console.log("Current location:", video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "Unmute";
	}
});



document.querySelector("#slider").addEventListener("input", function() {
	
    var volume = this.value;
    video.volume = volume / 100;
    document.querySelector("#volume").textContent = volume + "%"; 
    console.log("Volume:", video.volume);
});



document.querySelector("#vintage").addEventListener("click", function() {

    if (video.classList.contains("oldSchool")) {
	} else {
		video.classList.add("oldSchool");
	}
    console.log("Style toggled: ", video.classList.contains("oldSchool"));
});

document.querySelector("#orig").addEventListener("click", function() {

    if (video.classList.contains("oldSchool")) {
		video.classList.remove("oldSchool");
	} 
    console.log("Style toggled: ", video.classList.contains("oldSchool"));
});



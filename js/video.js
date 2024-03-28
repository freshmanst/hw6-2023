var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("video");

    video.autoplay = false;
    video.loop = false;

    console.log("Video initialized, autoplay and looping turned off");
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
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



document.querySelector("#volumeSlider").addEventListener("input", function() {
    var volume = this.value;
    video.volume = volume / 100;
    document.querySelector("#volume").textContent = volume + "%"; // Ensure this selector matches the element in your HTML
    console.log("Volume:", video.volume);
});



document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.toggle("oldSchool");
    console.log("Style toggled: ", video.classList.contains("oldSchool"));
});



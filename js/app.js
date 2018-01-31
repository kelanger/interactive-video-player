const video = document.getElementById("video");
const captions = document.getElementsByClassName("cap-text");

video.addEventListener("timeupdate", () => { 
	let ch;

	if (video.currentTime < 4.130 ) {
		captions[0].style.color = "orange";
		ch = captions[0];
	}
	else if (video.currentTime < 7.535 ) {
		captions[1].style.color = "orange";
		ch = captions[1];
	}
	else if (video.currentTime < 11.270 ) {
		captions[2].style.color = "orange";
		ch = captions[2];
	}
	else if (video.currentTime < 13.960 ) {
		captions[3].style.color = "orange";
		ch = captions[3];
	}
	else if (video.currentTime < 17.940 ) {
		captions[4].style.color = "orange";
		ch = captions[4];
	}
	else if (video.currentTime < 22.370 ) {
		captions[5].style.color = "orange";
		ch = captions[5];
	}
	else if (video.currentTime < 26.880 ) {
		captions[6].style.color = "orange";
		ch = captions[6];
	}
	else if (video.currentTime < 30.920 ) {
		captions[7].style.color = "orange";
		ch = captions[7];
	}
	else if (video.currentTime < 34.730 ) {
		captions[8].style.color = "orange";
		ch = captions[8];
	}
	else if (video.currentTime < 39.430 ) {
		captions[9].style.color = "orange";
		ch = captions[9];
	}
	else if (video.currentTime < 41.190 ) {
		captions[10].style.color = "orange";
		ch = captions[10];
	}
	else if (video.currentTime < 46.300 ) {
		captions[11].style.color = "orange";
		ch = captions[11];
	}
	else if (video.currentTime < 49.270 ) {
		captions[12].style.color = "orange";
		ch = captions[12];
	}
	else if (video.currentTime < 53.760 ) {
		captions[13].style.color = "orange";
		ch = captions[13];
	}
	else if (video.currentTime < 57.780 ) {
		captions[14].style.color = "orange";
		ch = captions[14];
	}
	else if (video.currentTime < 100.150 ) {
		captions[15].style.color = "orange";
		ch = captions[15];
	}

	for (i = 0; i < captions.length; i++) { 
    	if (captions[i] !== ch) {
    		captions[i].style.color = "black";
    	}
	}
});

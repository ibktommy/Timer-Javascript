// Select and Create Variables
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const durationInput = document.querySelector("#duration");

// Create Timer Class
class Timer {
	constructor(startBtn, pauseBtn, durationInput) {
		[startBtn, pauseBtn, durationInput] === this;

		// Event Listener
		startBtn.addEventListener("click", this.start);
	}

	start() {
		console.log("We are Starting!");
	}
}

// Create Class Instance
const timer = new Timer(startBtn, pauseBtn, durationInput);

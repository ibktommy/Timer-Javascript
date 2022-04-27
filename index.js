// Select Variables
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const timerInput = document.querySelector("#duration");

// Create Class Object
class Timer {
	constructor(startBtn, pauseBtn, timerInput) {
		console.log(this);

		[startBtn, pauseBtn, timerInput] === this;

		startBtn.addEventListener("click", this.startTimer);
		pauseBtn.addEventListener("click", this.pauseTimer);
	}

	startTimer = () => {
		this.tick();
		this.timerInterval = setInterval(this.tick, 1000);
	};

	pauseTimer = () => {
		clearInterval(this.timerInterval);
	};

	tick = () => {
		console.log("Tick!");
	};
}

// Create Class Instance
const timerInstance = new Timer(startBtn, pauseBtn, timerInput);

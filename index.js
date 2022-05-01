// Select Variables
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const timerInput = document.querySelector("#duration");

// Create Class Object
class Timer {
	constructor(startBtn, pauseBtn, timerInput) {
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
		if (this.timeInputRemaining <= 0) {
			this.pauseTimer();
		} else {
			this.timeInputRemaining = this.timeInputRemaining - 1;
		}
	};

	get timeInputRemaining() {
		return parseFloat(timerInput.value);
	}

	set timeInputRemaining(time) {
		console.log(time);
		return (timerInput.value = time);
	}
}

// Create Class Instance
const timerInstance = new Timer(startBtn, pauseBtn, timerInput);

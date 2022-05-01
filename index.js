// Select Variables
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const timerInput = document.querySelector("#duration");

// Create Class Object
class Timer {
	constructor(startBtn, pauseBtn, timerInput, setOfCallbacks) {
		[startBtn, pauseBtn, timerInput] === this;

		if (setOfCallbacks) {
			this.onStart = setOfCallbacks.onStart;
		}

		startBtn.addEventListener("click", this.startTimer);
		pauseBtn.addEventListener("click", this.pauseTimer);
	}

	startTimer = () => {
		if (this.onStart) {
			this.onStart();
		}
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
const timerInstance = new Timer(startBtn, pauseBtn, timerInput, {
	onStart() {
		console.log("Timer Started!");
	},
	onTick() {},
	onComplete() {},
});

// Create Class Object
class Timer {
	constructor(startBtn, pauseBtn, timerInput, setOfCallbacks) {
		[startBtn, pauseBtn, timerInput] === this;

		if (setOfCallbacks) {
			this.onStart = setOfCallbacks.onStart;
			this.onTick = setOfCallbacks.onTick;
			this.onComplete = setOfCallbacks.onComplete;
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
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeInputRemaining = this.timeInputRemaining - 1;
			if (this.onTick) {
				this.onTick();
			}
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

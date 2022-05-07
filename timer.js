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
			this.onStart(this.timeInputRemaining);
		}
		this.tick();
		this.timerInterval = setInterval(this.tick, 50);
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
			this.timeInputRemaining = this.timeInputRemaining - 0.05;
			if (this.onTick) {
				this.onTick(this.timeInputRemaining);
			}
		}
	};

	get timeInputRemaining() {
		return parseFloat(timerInput.value);
	}

	set timeInputRemaining(time) {
		return (timerInput.value = time.toFixed(2));
	}
}

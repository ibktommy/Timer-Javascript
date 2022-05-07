// Select Variables
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const timerInput = document.querySelector("#duration");

// Create Class Instance
const timerInstance = new Timer(startBtn, pauseBtn, timerInput, {
	onStart() {
		console.log("Timer Started!");
	},
	onTick() {
		console.log("TImer just ticked!");
	},
	onComplete() {
		console.log("Timer is Complete");
	},
});

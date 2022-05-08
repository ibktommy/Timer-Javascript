// Select Variables
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const timerInput = document.querySelector("#duration");
const circle = document.querySelector("circle");
const para = document.querySelector(".para");

// Calculate Perimeter of Circle
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

// Create Offset Attribute Value
let duration;

// Create Class Instance
const timerInstance = new Timer(startBtn, pauseBtn, timerInput, {
	onStart(totalDuration) {
		duration = totalDuration;
	},

	onTick(timeInputRemaining) {
		circle.setAttribute("stroke-dashoffset", (perimeter * timeInputRemaining) / duration - perimeter);
	},

	onComplete() {
		startBtn.style.opacity = 0.4;
		pauseBtn.style.opacity = 0.4;
		para.classList.remove("hidden");
		para.textContent = "TIMER IS COMPLETE";

		setTimeout(() => {
			para.classList.add("hidden");
			startBtn.style.opacity = 1;
			pauseBtn.style.opacity = 1;
		}, 1500);
	},
});

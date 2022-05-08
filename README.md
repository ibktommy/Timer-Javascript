# Timer-Javascript

## Overview
![screenshot](https://github.com/ibktommy/Timer-Javascript/blob/master/Screenshot.png)

## How The App Works
<li>This is a Timer Countdown that I created using Javascript.</li>
<li>The App was coded mainly with Javascript Class</li>
<li>The Timer app includes a surrounding circle (an svg icon), an input field with a default value of 30 seconds and two button with the play and pause buttons respectively.</li>
<li>When the play button is clicked, the input number counts down to zero and the svg circle icon also disappears in response to decrement of the timer seconds.</li>
<li>When the pause button is clicked, the timer seconds is paused and the circle is paused too. And when the play button is clicked once again, the circle resets as a full circle but responds to the updated seconds in the input field.</li>
<li>The user can input a new time as desired</li>
<li>The Timer stops at exactly 0.00 whereby the circle would have also disappeared totally to mark the end of the timer</li>
<li>When the Timer countdowns to zero, a message is shown below the circle that displays "Timer Completed" and it disappears after some seconds. Meanwhile the play and pause button also becomes a bit transparent</li>

## How I created the App
<li>I created two separate Javascript file. The index.js file was where I declared the variables I want to use and set them and also I created the class instance here</li>
<li>The timer.js file is where I created the class object with the custructor functions and where I created the methods that are called for each action in the app</li>
<li>I created the startTimer, pauseTimer, Tick method to control the pause button, play button and input value chnages respectively</li>
<li>In the index.js file, I worked out a formula that allows the circle to repond to the input value changes so that the circle disappears with the decreasing value of the input</li>
<li>The circle svg icon was created as a custom icon right in the HTML so as to be able to modify it as required by the timer countdown</li>

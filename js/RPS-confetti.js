var maxparticleConfettiCount = 250; //set max confetti count
var particleConfettisConfettipeed = 2; //set the particleConfetti animation speed
var startConfettiInner; //call to start confetti animation
var stopConfettiInner; //call to stop adding confetti
var removeConfettiInner; //call to stop the confetti animation and remove all confetti immediately


    var colorsConfetti = ["#bcd610", "#A500F8", "#FF0059", "#ff7600", "#FFCA00", "#FFF"]

	// var colorsConfetti = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
	var streamingConfetti = false;
	var animationTimerConfetti = null;
	var particleConfettisConfetti = [];
	var waveAngleConfetti = 0;
	
	function resetparticleConfetti(particleConfetti, width, height) {
		particleConfetti.color = colorsConfetti[(Math.random() * colorsConfetti.length) | 0];
		particleConfetti.x = Math.random() * width;
		particleConfetti.y = Math.random() * height - height;
		particleConfetti.diameter = Math.random() * 10 + 5;
		particleConfetti.tilt = Math.random() * 10 - 10;
		particleConfetti.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particleConfetti.tiltAngle = 0;
		return particleConfetti;
	}

	function startConfettiInner() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, 16.6666667);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "position:absolute; display:block;z-index:999999;pointer-events:none");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
		}
		var context = canvas.getContext("2d");
		while (particleConfettisConfetti.length < maxparticleConfettiCount)
			particleConfettisConfetti.push(resetparticleConfetti({}, width, height));
		streamingConfetti = true;
		if (animationTimerConfetti === null) {
			(function runAnimation() {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				if (particleConfettisConfetti.length === 0)
					animationTimerConfetti = null;
				else {
					updateparticleConfettisConfetti();
					drawparticleConfettisConfetti(context);
					animationTimerConfetti = requestAnimFrame(runAnimation);
				}
			})();
		}
	}

	function stopConfettiInner() {
		streamingConfetti = false;
	}

	function removeConfettiInner() {
		stopConfettiInner();
		particleConfettisConfetti = [];
	}


	function drawparticleConfettisConfetti(context) {
		var particleConfetti;
		var x;
		for (var i = 0; i < particleConfettisConfetti.length; i++) {
			particleConfetti = particleConfettisConfetti[i];
			context.beginPath();
			context.lineWidth = particleConfetti.diameter;
			context.strokeStyle = particleConfetti.color;
			x = particleConfetti.x + particleConfetti.tilt;
			context.moveTo(x + particleConfetti.diameter / 2, particleConfetti.y);
			context.lineTo(x, particleConfetti.y + particleConfetti.tilt + particleConfetti.diameter / 2);
			context.stroke();
		}
	}

	function updateparticleConfettisConfetti() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particleConfetti;
		waveAngleConfetti += 0.01;
		for (var i = 0; i < particleConfettisConfetti.length; i++) {
			particleConfetti = particleConfettisConfetti[i];
			if (!streamingConfetti && particleConfetti.y < -15)
				particleConfetti.y = height + 100;
			else {
				particleConfetti.tiltAngle += particleConfetti.tiltAngleIncrement;
				particleConfetti.x += Math.sin(waveAngleConfetti);
				particleConfetti.y += (Math.cos(waveAngleConfetti) + particleConfetti.diameter + particleConfettisConfettipeed) * 0.5;
				particleConfetti.tilt = Math.sin(particleConfetti.tiltAngle) * 15;
			}
			if (particleConfetti.x > width + 20 || particleConfetti.x < -20 || particleConfetti.y > height) {
				if (streamingConfetti && particleConfettisConfetti.length <= maxparticleConfettiCount)
					resetparticleConfetti(particleConfetti, width, height);
				else {
					particleConfettisConfetti.splice(i, 1);
					i--;
				}
			}
		}
	}
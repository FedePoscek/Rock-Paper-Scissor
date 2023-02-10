var maxParticleCountStorm = 250; //set max storm count
var particlesStormpeedStorm = 2; //set the particle animation speed
var startStormInner; //call to start storm animation
var stopStormInner; //call to stop adding storm
var removeStormInner; //call to stop the storm animation and remove all storm immediately


    var colors = ["#EAECEE", "#ABB2B9", "#566573", "#273746", "#CACFD2"]

	// var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
	var streamingStorm = false;
	var animationTimer = null;
	var particlesStorm = [];
	var waveAngle = 0;
	
	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0];
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = 3;
		particle.tilt = 10;
		particle.tiltAngleIncrement = 0.05;
		particle.tiltAngle = 90;
		return particle;
	}

	function startStormInner() {
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
		var canvas = document.getElementById("storm-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "storm-canvas");
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
		while (particlesStorm.length < maxParticleCountStorm)
			particlesStorm.push(resetParticle({}, width, height));
		streamingStorm = true;
		if (animationTimer === null) {
			(function runAnimation() {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				if (particlesStorm.length === 0)
					animationTimer = null;
				else {
					updateparticlesStorm();
					drawparticlesStorm(context);
					animationTimer = requestAnimFrame(runAnimation);
				}
			})();
		}
	}

	function stopStormInner() {
		streamingStorm = false;
	}

	function removeStormInner() {
		stopStormInner();
		particlesStorm = [];
	}


	function drawparticlesStorm(context) {
		var particle;
		var x;
		for (var i = 0; i < particlesStorm.length; i++) {
			particle = particlesStorm[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			context.strokeStyle = particle.color;
			x = particle.x + particle.tilt;
			context.moveTo(x + particle.diameter / 2, particle.y);
			context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
			context.stroke();
		}
	}

	function updateparticlesStorm() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0;
		for (var i = 0; i < particlesStorm.length; i++) {
			particle = particlesStorm[i];
			if (!streamingStorm && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle);
				particle.y += (Math.cos(waveAngle) + particle.diameter + particlesStormpeedStorm) * 2.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingStorm && particlesStorm.length <= maxParticleCountStorm)
					resetParticle(particle, width, height);
				else {
					particlesStorm.splice(i, 1);
					i--;
				}
			}
		}
	}
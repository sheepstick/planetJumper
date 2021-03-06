function main() {
	canvas = document.createElement("canvas");
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	ctx.fillStyle = "white";

	// Listen for key presses and mouse clicks.
	keystate = {};
	document.addEventListener("keydown", function(evt) {
		keystate[evt.keyCode] = true;
	});
	document.addEventListener("keyup", function(evt) {
		delete keystate[evt.keyCode];
	});
	document.addEventListener("mousedown", getMousePosition, false);

	init();

	var loop = function() {
		update();
		draw();

		// Loop about 60 fps.
		window.requestAnimationFrame(loop, canvas);
	};
	window.requestAnimationFrame(loop, canvas);
}
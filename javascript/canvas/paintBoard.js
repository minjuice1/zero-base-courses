(function () {
	const $container = document.querySelector("main");
	const $canvas = document.querySelector(".canvas");
	const ctx = $canvas.getContext("2d");
	const $tools = document.querySelector(".tools");
	const $colors = document.querySelector(".color-btns");
	const $liners = document.querySelector(".width-liners");
	const $goback = document.querySelector(".goback-btn");
	const $gohead = document.querySelector(".gohead-btn");
	const $download = document.querySelector(".download-btn");
	let drawingMode;
	let color = "black";
	let liner = 10;
	let tool = "pencil";

	function startDrawHandler() {
		drawingMode = true;
	}

	function finishDrawHandler() {
		drawingMode = false;
	}

	function setColor(e) {
		color = e.target.dataset.color;
		ctx.fillStyle = color;
	}

	function setTool(e) {
		console.log(e);
		tool = e.target.dataset.tool;
		if (tool === "eraser") ctx.fillStyle = "#eee";
	}

	function setLiner(e) {
		liner = e.target.dataset.liner;
	}

	function drawHandler(e) {
		if (!drawingMode) return;
		if (tool === "paint")
			ctx.fillRect(0, 0, $canvas.clientWidth, $canvas.height);
		ctx.beginPath();
		ctx.arc(e.offsetX, e.offsetY, liner, 0, Math.PI * 2, false);
		ctx.fill();
	}

	function setReturn(e) {
		console.log("return");
	}

	function setKeep(e) {
		console.log("keep");
	}

	function download() {
		const url = $canvas.toDataURL();
		const downloader = document.createElement("a");
		downloader.style.display = "none";
		downloader.setAttribute("href", url);
		downloader.setAttribute("download", "paintBoard.png");
		$container.appendChild(downloader);
		downloader.click();
		setTimeout(() => {
			$container.removeChild(downloader);
		}, 100);
	}

	$canvas.addEventListener("mousedown", startDrawHandler);
	$canvas.addEventListener("mousemove", drawHandler);
	$canvas.addEventListener("mouseup", finishDrawHandler);
	$colors.addEventListener("click", setColor);
	$liners.addEventListener("click", setLiner);
	$tools.addEventListener("click", setTool);
	$goback.addEventListener("click", setReturn);
	$gohead.addEventListener("click", setKeep);
	$download.addEventListener("click", download);
})();

function writeZero(div) {
	if (div.innerHTML == "") {
		div.innerHTML = "o";
		writeEx();
	}
}

function writeEx() {
	var cells = document.querySelectorAll(".cell");
	var emptyCells = [];
	for (var i = 0; i < cells.length; i++) {
		if (cells[i].innerHTML == "") {
			emptyCells.push(cells[i]);
		}
	}
	var random = Math.floor(Math.random() * emptyCells.length);
	emptyCells[random].innerHTML = "x";
}

window.onload = function () {
	writeEx();
};


function clickBox() {
	let player = "0";
	for (let i = 1; i <= 9; ++i) {
		document.getElementById(i).onclick = function () {
			let boxValue = document.getElementById(i).innerHTML;
			if (boxValue === "") {
				if (player === "X") {
					player = "0";
				} else {
					player = "X";
				}
				document.getElementById(i).innerHTML = player;
			}
		}
	}
}

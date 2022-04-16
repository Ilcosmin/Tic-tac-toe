function clickBox() {
	let player = "0";
	let clickNumber = 0;
	for (let i = 1; i <= 9; ++i) {
		document.getElementById(i).onclick = function () {
			let boxContent = document.getElementById(i).innerHTML;
			if (boxContent === "") {
				if (player === "X") {
					player = "0";
				} else {
					player = "X";
				}
				document.getElementById(i).innerHTML = player;
			}
			++clickNumber;
			selectWiner(player, clickNumber);
		}
	}
	
}

function selectWiner(player, clickNumber) {
	let winner;
	for (let k = 4; k <= 6; ++k) {	
		if (document.getElementById(k - 3).innerHTML === player && document.getElementById(k).innerHTML === player && document.getElementById(k + 3).innerHTML === player) {
			winner = player;
		}
	}
	for (let k = 2; k <= 8; k += 3) {
		if (document.getElementById(k - 1).innerHTML === player && document.getElementById(k).innerHTML === player && document.getElementById(k + 1).innerHTML === player) {
			winner = player;
		}
	}
	if (document.getElementById("1").innerHTML === player && document.getElementById("5").innerHTML === player && document.getElementById("9").innerHTML === player) {
			winner = player;
	} else if (document.getElementById("3").innerHTML === player && document.getElementById("5").innerHTML === player && document.getElementById("7").innerHTML === player) {
			winner = player;
	}
	let finalMessage = document.getElementById("finalParagraph");
	if (winner === player) {
		finalMessage.innerHTML = "Player " + winner + " win!";
	} else if (clickNumber === 9) {
		finalMessage.innerHTML = "Draw, nobody win!";
	}
}

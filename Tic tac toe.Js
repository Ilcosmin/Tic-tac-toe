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
			document.getElementById(k - 3).style.backgroundColor = "yellow";
			document.getElementById(k).style.backgroundColor = "yellow";
			document.getElementById(k + 3).style.backgroundColor = "yellow";
		}
	}
	for (let k = 2; k <= 8; k += 3) {
		if (document.getElementById(k - 1).innerHTML === player && document.getElementById(k).innerHTML === player && document.getElementById(k + 1).innerHTML === player) {
			winner = player;
			document.getElementById(k - 1).style.backgroundColor = "yellow";
			document.getElementById(k).style.backgroundColor = "yellow";
			document.getElementById(k + 1).style.backgroundColor = "yellow";
		}
	}
	if (document.getElementById("1").innerHTML === player && document.getElementById("5").innerHTML === player && document.getElementById("9").innerHTML === player) {
			winner = player;
			document.getElementById("1").style.backgroundColor = "yellow";
			document.getElementById("5").style.backgroundColor = "yellow";
			document.getElementById("9").style.backgroundColor = "yellow";
	} else if (document.getElementById("3").innerHTML === player && document.getElementById("5").innerHTML === player && document.getElementById("7").innerHTML === player) {
			winner = player;
			document.getElementById("3").style.backgroundColor = "yellow";
			document.getElementById("5").style.backgroundColor = "yellow";
			document.getElementById("7").style.backgroundColor = "yellow";
	}
	let finalMessage = document.getElementById("finalParagraph");
	if (winner === player) {
		finalMessage.innerHTML = "Player " + winner + " win!";
		finalMessage.style.backgroundColor = "blue";
	} else if (clickNumber === 9) {
		finalMessage.innerHTML = "Draw, nobody win!";
		finalMessage.style.backgroundColor = "red";
	}
}

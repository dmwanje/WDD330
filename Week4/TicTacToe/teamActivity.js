let player = "X";

const box = document.getElementsByClassName("cell");

for(let i=0; i < box.length; i++) {
box[i].addEventListener('touchend', play);

}

function play(event) {

event.target.innerHTML = player;
if(player == "X") {
   player == "0";

}
 else {
     player = "X";
 }
}
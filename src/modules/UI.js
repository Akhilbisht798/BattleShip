
function CreateBoard(data, player) {
    let container = document.querySelector(".container");
    let div = document.createElement('div');
    div.classList.add("Board");
    div.dataset.playerBoard = data;// 0 for human player and 1 for ai player.
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let box = document.createElement('div');
            box.classList.add('Board-Box');
            box.dataset.row = i;
            box.dataset.col = j;
            box.dataset.cont = data;
            box.innerHTML = `${i} ${j}`;
            box.addEventListener("click", function (e) { PlaceShip(e, player) });
            div.appendChild(box);
        }
    }
    container.appendChild(div);
}
//Ui for placing ship in the array.
function PlaceShip(e, player) {
    const c = e.target.dataset.col;
    const r = e.target.dataset.row;
    player.placeShip(r, c)
    if (player.Ships.length === 0) {
        const box = document.querySelectorAll(".Board")[0];
        box.innerHTML = "";
        return true;
    }
}

export {
    CreateBoard,
    PlaceShip,
}
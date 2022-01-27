
const bars = document.getElementById("bars")
const table = document.getElementById("table")
const content = document.getElementById("content")


let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


let dice1 = 0
let dice2 = 0
let sum = 0


const roll = () => {
    for(i=0; i<1000; i++){
        dice1 = Math.floor(Math.random() * 6 + 1)
        dice2 = Math.floor(Math.random() * 6 + 1)
        sum = dice1 + dice2
        count[sum-2]++
    }
    for(i=0; i<11; i++){
        const div = document.createTextNode( i+2 + ": " + count[i] )
        table.appendChild(div)
        const br = document.createElement("br")
        table.appendChild(br)
    }
    for(i=0; i<11; i++){
        const diceBar = document.createElement("div")
        bars.appendChild(diceBar)
        diceBar.style.backgroundColor = "#ff0000"
        diceBar.style.height = "10px"
        diceBar.style.width = count[i] + "px"
        diceBar.style.size = "10px"

        const space = document.createElement("br")
        bars.appendChild(space)
		
    }
	
    return count
	
}

const rollButton = document.getElementById("botao");

rollButton.addEventListener("click", roll);
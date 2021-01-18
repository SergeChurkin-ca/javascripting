const message = document.querySelector('.message')

const score = document.querySelector(".score");

const buttons = document.querySelectorAll("button");

console.log(buttons)


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame)
}

function playGame(e) {

    let human = e.target.innerText
    let computer = Math.floor(Math.random() * Math.floor(3))
    computer === 2 ? computer = 'Rock' : computer === 1 ? computer = 'Paper' : computer = 'Scissors'

    message.innerText = ('Human: ' + (human) + "\n" + ' Computer:' + computer)

    function result() {
        return computer === human ? 'Draw' :
            computer === 'Rock' && human === 'Paper' ? 'human wins' :
            computer === 'Rock' && human === 'Scissors' ? 'human wins' :

            computer === 'Paper' && human === 'Rock' ? 'computer wins' :
            computer === 'Paper' && human === 'Scissors' ? 'human wins' :

            computer === 'Scissors' && human === 'Paper' ? 'computer wins' :
            computer === 'Scissors' && human === 'Rock' ? 'computer wins' : 'error'
    }

    console.log(result())
    message.innerText = result()
}
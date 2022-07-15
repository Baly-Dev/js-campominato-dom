// variables
const grid = document.getElementById('grid')
const btnSelect = document.getElementById('btnSelect')
const btnReset = document.getElementById('btnReset')

let width = 10
let level = 'easy'

let cells = []
let bombs = []
let cellClass;

btnSelect.addEventListener('click', function(){
    level = document.getElementById('difficulty').value

    if (level == 'impossible'){
        width = 7
        cellClass = 'cell-7'
    }else if(level == 'hard'){
        width = 9
        cellClass = 'cell-9'
    }else {
        width = 10
        cellClass = 'cell-10'
    }

    getGrid(width)
})

// function getGrid
function getGrid(width){
    // ciclo per creazione griglia
    for (i=0; i < width * width; i++){
        // creo e aggiungo una cella nel document e nella lista cells 
        const cell = document.createElement('div')

        cell.setAttribute('id', i) 
        cell.classList.add(cellClass)

        cell.append(i)

        grid.append(cell)
        cells.push(cell)
    }
    getBombs(width * width)
    console.log(bombs)
    selectCell()
    
}

// function selectCell
function selectCell(){
    let selectedCell = []
    for (i = 0; i < cells.length; i++){
        let currentCellId = document.getElementById(i)
        currentCellId.addEventListener('click', function(){
            if (this.classList.contains('cell-clicked')){
                this.classList.remove('cell-clicked')
            }else if(bombs.includes(parseInt(this.getAttribute('id')))){
                this.classList.add('cell-bomb')
            }else{
                this.classList.add('cell-clicked')
                selectedCell.push(this)
                console.log(selectedCell)
            }
        })
    }
}

// function getBombs
function getBombs(random){
    for (let i = 0; i < 16; i++){
        bombs.push(Math.floor(Math.random() * (random - 1 + 1) + 1))
    }
}

// finction showBomb
function showBomb(){
    for (let i = 0; i < cells.length; i++){
        let cell = document.getElementById(i)
        cell.addEventListener('click', function(){
            if (bombs.includes(this.getAttribute('id'))){
                this.classList.remove('cell-clicked')
                this.classList.add('cell-bomb')
            }
        })

    }
}


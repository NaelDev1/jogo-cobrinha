const info = document.getElementById("infoBottom");
const btStart= document.getElementById("btStart");
const btPause = document.getElementById("btPause");
let gameIsRunning= false;
let isPauseGame = false;
let snakeVelocity = 5;

const keysToResolve = [];
const handlekey =(e) => {
    console.log(e)
    keysToResolve.push(e.key);
}
btStart.onclick =((e) => {
  if(!gameIsRunning ) {
    gameIsRunning = true;
    info.innerText = "";
    return;
  }
  console.clear();
  console.info("O jogo já está em excução");
});

btPause.onclick = (e) => {
  if(gameIsRunning) {
    gameIsRunning = false;
    if(isPauseGame == false)
      isPauseGame = true;
    else {
      console.info("O jogo já está pausado");
    }
  }
    
}


window.addEventListener('keydown', handlekey);

//this begin and running until the app is open or until the user reload the app
const beginPlay = async () => {
  while(true) {
 const eatingFruits = 0;
 //if the game is runnig
  while(gameIsRunning) {
    
    await new Promise((resolve) => setTimeout(resolve,1000 /snakeVelocity ));

   if(gameIsRunning){
          console.log("O jogo está rodando");
          if(keysToResolve != undefined && keysToResolve.length != 0){
            console.log(keysToResolve[keysToResolve.length - 1]);
            console.log(keysToResolve);
            await renderGame(keysToResolve[0]);
            keysToResolve.shift();

          
        }
        else await renderGame(undefined)
        
    }
  }
  if(!isPauseGame)
    isPauseGame;
  while(!gameIsRunning) {
     await new Promise((resolve) => setTimeout(resolve,80));
   if(!gameIsRunning) {
   if(isPauseGame)
      info.innerText = "The game is paused";
    else 
    info.innerText = "Tap the button bellow to play the game,and anjoy :)";
   }
   
  }



  }

}


const  ClearInternal = async () => {
  while(true) {
 await new Promise((resolve ) => setTimeout(resolve, 5000));
console.clear();
  }
   
}



const Render =  () => {

beginPlay();
ClearInternal();
}

Render();
 
  let direction = 'ArrowRight'
    const varName = 'S_' + Math.random().toString(36).substring(2,10);

  const antiCheatMemory = {};
  antiCheatMemory[varName] = 0;



  let canvas = document.getElementById('snake')
  let smallDisplay = window.matchMedia('(max-width: 550px)')
  if (smallDisplay.matches) {
    canvas.style.width = '320px'
    canvas.style.height = '320px'
    document.documentElement.classList.add('small')
  }

  let context = canvas.getContext('2d')
  let box = 32

  let snake = []

  snake[0] = {
    x: 8 * box,
    y: 8 * box
  }

  let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
  }

  function criaBG() {
  context.fillStyle = 'lightGreen'
  context.fillRect(0, 0, 16 * box, 16 * box) // posicao x, posicao y, largura, altura
  }


  function criaSnack() {
    for (i = 0; i < snake.length; i++) {
      context.fillStyle = 'green'
      context.fillRect(snake[i].x, snake[i].y, box, box)
    }
  }

  const foodImg = new Image();
  foodImg.src = './assets/apple.png';
  // foodImg.onload =() => {
  //   context.drawImage(foodImg,food.x, food.y, box, box)
  // }
  function drawFood() {
    context.drawImage(foodImg,food.x, food.y, box, box)
    //context.fillRect(food.x, food.y, box, box)
  }
let keys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft']
   

const renderGame  = async (currentKey) => {

  
    if(currentKey != undefined && keys.includes(currentKey) != undefined)
    direction = currentKey;

    console.log('new direction', direction);
  // if (snake[0].x > 15 * box && direction != 'left') snake[0].x = 0
  //   if (snake[0].x < 0 && direction != 'right') snake[0].x = 16 * box
  //   if (snake[0].y > 15 * box && direction != 'up') snake[0].y = 0
  //   if (snake[0].y < 0 && direction != 'down') snake[0].y = 16 * box

    

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (direction == 'ArrowRight') snakeX += box
    if (direction == 'ArrowLeft') snakeX -= box
    if (direction == 'ArrowUp') snakeY -= box
    if (direction == 'ArrowDown') snakeY += box

    if (snakeX != food.x || snakeY != food.y) {
      snake.pop()
    } else {
      food.x = Math.floor(Math.random() * 15 + 1) * box
      food.y = Math.floor(Math.random() * 15 + 1) * box

      
      // qtScores += 100
      // score.innerText = `Pontuação: ${qtScores}`
    }

    // for (let i = 1; i < snake.length; i++) {
    //   if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
    //     //clearInterval(jogo)
    //     if (qtScores > parseInt(localStorage.getItem('record'))) {
    //       localStorage.setItem('record', `${qtScores}`)
    //     }
    //     alert('Game Over! Que pena, você PERDEU!  :(')
    //     record.innerText = `Recorde: ${localStorage.getItem('record')}`
    //   }
    // }

    let newHead = {
      x: snakeX,
      y: snakeY
    }

    snake.unshift(newHead)
     criaBG()
    criaSnack() 
    drawFood()


}


  
//   const scroreElement = document.getElementById('score');
//   const recordElement = document.getElementById('score');



//   





// const btnLeft = document.querySelector('.left')
// const btnUp = document.querySelector('.up')
// const btnRight = document.querySelector('.right')
// const btnDown = document.querySelector('.down')



// 



// function mudarDirecao(event) {
//   console.log(event.keyCode)
//   if (event.key == 'ArrowRight' && direction != 'left') direction = 'right'
//   if (event.key == 'ArrowLeft' && direction != 'right') direction = 'left'
//   if (event.key == 'ArrowUp' && direction != 'down') direction = 'up'
//   if (event.key == 'ArrowDown' && direction != 'up') direction = 'down'
// }

// window.addEventListener('keydown', mudarDirecao)

// // Controle por Botões

// btnLeft.addEventListener('click', function () {
//   if (direction != 'right') direction = 'left'
// })

// btnUp.addEventListener('click', function () {
//   if (direction != 'down') direction = 'up'
// })

// btnRight.addEventListener('click', function () {
//   if (direction != 'left') direction = 'right'
// })

// btnDown.addEventListener('click', function () {
//   if (direction != 'up') direction = 'down'
// })








// let jogo = setInterval(iniciarJogo, 200)
// })



// let record = document.getElementById('record')
// let score = document.getElementById('score')
// let qtScores = 0

// if (localStorage.getItem('record') == null) {
//   localStorage.setItem('record', '0')
// }

// record.innerText = `Recorde: ${localStorage.getItem('record')}`
//  // define um intervalo de tempo depois de executado uma determinada ação

// Essa const recebe a imagem do aluno diretamente do html
const alun = document.querySelector(".alun");

// Essa const recebe a imagem dos tubos diretamente do html

const pipe = document.querySelector(".pipe");

/* 
essa é a função que faz o aluno pular
toda vez que o usuário pressionar uma tecla
*/ 

const jump = () => {
  alun.classList.add("jump");

  setTimeout(() => {

    alun.classList.remove("jump"); 

  }, 500);
}

const loop = setInterval(() => {
   console.log(loop);
   const pipePosition = pipe.offsetLeft; 
   const alunPosition = +window.getComputedStyle(alun).bottom.replace('px', '');
   console.log(alunPosition);
   
   if (pipePosition <= 120 && pipePosition > 0 && alunPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    alun.style.animation = 'none';
    alun.style.bottom = `${alunPosition}px`;

    alun.src = './imagens/game-over.png';
    alun.style.width = '75px';
    alun.style.marginLeft = '50px';
    alun.style.marginBottom = '5px';
   
    clearInterval(loop);

   }

}, 10)

// Esse comando gera a saida da animação, e declara o evento.

document.addEventListener("keydown", jump);
const aluno = document.querySelector('.aluno');
const certrasgado = document.querySelector('.certrasgado');

const jump = () => {
    aluno.classList.add('jump');

    setTimeout(() => {

        aluno.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    const certrasgadoPosition = certrasgado.offsetLeft;
    const alunoPosition = +window.getComputedStyle(aluno).bottom.replace('px', );

    console.log(alunoPosition);
    
    if (certrasgadoPosition <= 120 && alunoPosition < 80)
    {

        certrasgado.style.animation = 'none';
        certrasgado.style.left = `${certrasgadoPosition}px`;

    }
    
}, 10);


document.addEventListener('keydown', jump);
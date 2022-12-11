import React from 'react'

const Proyectos = () => {
    return (
    <div id="proyectos" class="flex flex-col  py-52 px-6 ">
        <h2 class="font-DynaPuff items-center text-rosado text-2xl flex flex-col text-center mb-4 ">Proyectos</h2>
        <div class=" flex flex-col justify-around items-center m-auto ">
            <div class=" flex flex-col rounded-lg w-60 h-44 p-auto my-4 ">
            <img src="./img/calculadora.png" class=" w-60 h-44 rounded-lg"></img>
            <div class="rounded-lg bg-negro flex justify-around mt-1 ">
                <a href="https://github.com/lilajoha29/calculadora" ><img src="./img/github.svg" class="w-6 h-6"></img></a>
                <p class="rounded-lg text-blanco flex justify-center ">Calculadora</p>
                <a href="https://cute-kringle-2e46b8.netlify.app/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 text-blanco">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg></a>
            </div>
            </div>
            <div class=" flex flex-col rounded-lg w-60 h-44 p-auto m-10 ">
            <img src="./img/juego.png" class="w-60 h-44 rounded-lg"></img>
            <div class="rounded-lg bg-negro flex justify-around mt-1">
                <a href="https://github.com/H4r0l/Wheel-of-DOM"><img src="./img/github.svg" class="w-6 h-6"></img></a>
                <p class="rounded-lg text-blanco flex justify-center ">Juego Piratas</p>
                <a href="https://wheelofdompirates.netlify.app/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 text-blanco">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg></a>
            </div>
            </div>
            <div class=" flex flex-col rounded-lg w-60 h-44 p-auto my-4">
            <img src="./img/tetris.png" class="w-60 h-44 rounded-lg"></img>
            <div class="rounded-lg bg-negro flex justify-around mt-1">
                <a href="https://github.com/JeffersonPulido/TetrisGame"><img src="./img/github.svg" class="w-6 h-6"></img></a>
                <p class="rounded-lg text-blanco flex justify-center ">Tetris</p>
                <a href="https://tetrisgameapp.netlify.app"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 text-blanco">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg></a>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Proyectos
import React from 'react'

const Hv = () => {
    return (
    <div><div id="inicio" class="relative flex flex-col items-center">
        <div class="absolute inset-1 bg-rosado  rounded-full blur h-96 w-96 mt-5 m-auto"></div>
        <img src="./img/logoW.svg" class="relative w-96 pb-100"></img>
        <div class="pr-4">
            <h2 class="font-DynaPuff text-blanco text-lg">¡Hello, Welcome! I'am</h2>
            <h1 class="font-DynaPuff text-rosado text-2xl ">Lily Johana Castillo Forero</h1>
        </div>
        <div class="pl-32 pb-52">
            <button id="boton" href="./hv.html"
                class="font-DynaPuff bg-rosado text-blanco rounded-lg flex flex-row pr-3 pl-3 hover:text-rosado hover:bg-blanco">from
                my
                <span class="flex items-center space-x-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-blanco hover:text-rosado">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                </span>
            </button>
        </div>
        </div>
    </div>
    )
}

export default Hv
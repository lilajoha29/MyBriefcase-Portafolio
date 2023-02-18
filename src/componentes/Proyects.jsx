import React from 'react'
import CalculadoraImg from '../assets/img/calculadora.png'
import JuegoImg from '../assets/img/juego.png'
import TetrisImg  from '../assets/img/tetris.png'
import { SiGithub } from "react-icons/si";
import { FiMonitor } from "react-icons/fi";

export const Proyects = () => {
    return (
    <div id="MyWork" className="flex flex-col  py-52 px-6 ">
        <h2 className="font-DynaPuff items-center text-rosado text-2xl flex flex-col text-center mb-4 sm:text-4xl ">My work</h2>
        <div className=" flex flex-col justify-around items-center lg:flex-row ">
            <div className=" flex flex-col rounded-lg w-60 h-44 p-auto my-4 sm:w-96 sm:h-52">
                <img src={CalculadoraImg} className=" w-60 h-44 rounded-lg sm:w-96 sm:h-52"></img>
                <div className="rounded-lg bg-negro flex justify-around mt-1 ">
                        <a href="https://github.com/lilajoha29/calculadora" ><SiGithub className="w-6 h-6 sm:h-8 text-blanco"/></a>
                    <p className="rounded-lg text-blanco flex justify-center sm:text-lg ">Calculadora</p>
                    <a href="https://cute-kringle-2e46b8.netlify.app/"><FiMonitor className="w-6 h-6 sm:h-8 text-blanco" />
                    </a>
                </div>
            </div>
            <div className=" flex flex-col rounded-lg w-60 h-44 p-auto m-10 sm:w-96 sm:h-52 ">
                <img src={JuegoImg} className="w-60 h-44 rounded-lg sm:w-96 sm:h-52"></img>
                <div className="rounded-lg bg-negro flex justify-around mt-1">
                        <a href="https://github.com/H4r0l/Wheel-of-DOM"><SiGithub className="w-6 h-6 sm:h-8 text-blanco" /></a>
                    <p className="rounded-lg text-blanco flex justify-center sm:text-lg">Juego Piratas</p>
                        <a href="https://wheelofdompirates.netlify.app/"><FiMonitor className="w-6 h-6 sm:h-8 text-blanco" /></a>
                </div>
            </div>
            <div className=" flex flex-col rounded-lg w-60 h-44 p-auto my-4 sm:w-96 sm:h-52">
                <img src={TetrisImg} className="w-60 h-44 rounded-lg sm:w-96 sm:h-52"></img>
                <div className="rounded-lg bg-negro flex justify-around mt-1">
                        <a href="https://github.com/JeffersonPulido/TetrisGame"><SiGithub className="w-6 h-6 sm:h-8 text-blanco" /></a>
                    <p className="rounded-lg text-blanco flex justify-center sm:text-lg">Tetris</p>
                        <a href="https://tetrisgameapp.netlify.app"><FiMonitor className="w-6 h-6 sm:h-8 text-blanco" /></a>
                </div>
            </div>
        </div>
    </div>
    )
}


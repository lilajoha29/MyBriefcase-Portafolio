import React from 'react'
import CalculadoraImg from '../../assets/img/calculadora.png'
import JuegoImg from '../../assets/img/juego.png'
import TetrisImg from '../../assets/img/tetris.png'
import CasaHormiga from '../../assets/img/casaHormiga.png'
import SabujCha from '../../assets/img/sabujsha.png'
import Programate from '../../assets/img/ProgramateSchool.png'
import { SiGithub } from "react-icons/si";
import {ImSphere} from "react-icons/im";


export const Proyects = () => {
    return (
    <div id="MyWork" className="flex flex-col my-10 mx-6 ">
        <div className='flex flex-col items-center'>
            <img src="https://media.giphy.com/media/3ohhwlmaDkzhDJu0hy/giphy.gif" className='w-28'></img>
            <h2 className="font-DynaPuff items-center text-pastel text-4xl flex flex-col text-center mb-4 sm:text-4xl "> Mis proyectos </h2>
        </div>
        <div className=" flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center lg:justify-self-center">
            <div className=" flex flex-col rounded-lg bg-blanco w-72 justify-center m-10  md:justify-self-center shadow-2xl shadow-rosado">
                <img src={CalculadoraImg} className=" w-full rounded-2xl p-2 "></img>
                <div className="rounded-lg flex justify-around mb-2 ">
                    <a href="https://github.com/lilajoha29/calculadora" ><SiGithub className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping"/></a>
                    <p className=" font-DynaPuff rounded-lg text-negro  flex justify-center sm:text-lg ">Calculadora</p>
                    <a href="https://cute-kringle-2e46b8.netlify.app/"><ImSphere className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" />
                    </a>
                </div>
            </div>
            <div className=" flex flex-col rounded-lg bg-blanco w-72  justify-center m-10  md:justify-self-center shadow-2xl shadow-rosado ">
                <img src={JuegoImg} className="w-full rounded-2xl p-2"></img>
                <div className="rounded-lg flex justify-around mb-2 ">
                    <a href="https://github.com/H4r0l/Wheel-of-DOM"><SiGithub className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" /></a>
                    <p className="font-DynaPuff rounded-lg text-negro flex justify-center sm:text-lg lg:justify-self-center">Juego Piratas</p>
                    <a href="https://wheelofdompirates.netlify.app/"><ImSphere className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" /></a>
                </div>
            </div>
            <div className="flex flex-col rounded-lg bg-blanco w-72  justify-center m-10  md:justify-self-center shadow-2xl shadow-rosado">
                <img src={TetrisImg} className="w-full rounded-2xl p-2"></img>
                <div className="rounded-lg flex justify-between px-4 mb-2">
                    <a href="https://github.com/JeffersonPulido/TetrisGame"><SiGithub className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" /></a>
                    <p className="font-DynaPuff rounded-lg text-negro flex justify-center sm:text-lg lg:justify-self-center">Tetris</p>
                    <a href="https://tetrisgameapp.netlify.app"><ImSphere className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" /></a>
                </div>
            </div>
            <div className="flex flex-col rounded-lg bg-blanco w-72  justify-center m-10  md:justify-self-center shadow-2xl shadow-rosado">
                <img src={SabujCha} className="w-full rounded-2xl p-2 "></img>
                <div className="rounded-lg flex justify-around mb-2">
                    <a href="https://github.com/27Paola/Proyect-te-.git"><SiGithub className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" /></a>
                    <p className="font-DynaPuff rounded-lg text-negro flex justify-center sm:text-lg lg:justify-self-center ">SabujCha</p>
                    <a href="https://proyecto-te.netlify.app/"><ImSphere className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" /></a>
                </div>
            </div>
            <div className="flex flex-col rounded-lg bg-blanco w-72  justify-center m-10  md:justify-self-center shadow-2xl shadow-rosado">
                <img src={CasaHormiga} className="w-full rounded-2xl p-2 "></img>
                <div className="rounded-lg flex justify-around mb-2">
                    <a href="https://github.com/lilajoha29/casahormiga"><SiGithub className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" /></a>
                    <p className="font-DynaPuff rounded-lg text-negro flex justify-center sm:text-lg lg:justify-self-center ">Casa Hormiga</p>
                    <a href="https://casahormiga.netlify.app/"><ImSphere className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" /></a>
                </div>
            </div>
            <div className="flex flex-col rounded-lg bg-blanco w-72  justify-center m-10  md:justify-self-center shadow-2xl shadow-rosado">
                <img src={Programate} className="w-full rounded-2xl p-2 pb-3"></img>
                <div className="rounded-lg flex justify-around mb-2">
                    <a href="https://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT"><SiGithub className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" /></a>
                    <p className="font-DynaPuff rounded-lg text-negro flex justify-center sm:text-lg lg:justify-self-center ">Programate School</p>
                    <a href="https://programate-school-front.vercel.app/"><ImSphere className="w-6 h-6 sm:h-8 text-negro hover:text-rosado animate-pulse hover:animate-ping" /></a>
                </div>
            </div>
        </div>
    </div>
    )
}


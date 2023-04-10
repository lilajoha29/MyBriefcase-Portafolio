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
        <div className=" flex flex-col md:grid md:grid-cols-2 gap-6 justify-center items-center lg:justify-self-center">
            <div className=" flex flex-col rounded-lg w-60 h-44 justify-center m-10 sm:w-96 sm:h-52 lg:justify-self-center">
                <img src={CalculadoraImg} className=" w-60 h-44 rounded-lg sm:w-96 sm:h-52 shadow-md shadow-rosado"></img>
                <div className="rounded-lg flex justify-around mt-2 ">
                        <a href="https://github.com/lilajoha29/calculadora" ><SiGithub className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping"/></a>
                    <p className=" font-DynaPuff rounded-lg text-rosado flex justify-center sm:text-lg ">Calculadora</p>
                    <a href="https://cute-kringle-2e46b8.netlify.app/"><ImSphere className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" />
                    </a>
                </div>
            </div>
            <div className=" flex flex-col rounded-lg w-60 h-44 justify-center m-10 sm:w-96 sm:h-52 lg:justify-self-center ">
                <img src={JuegoImg} className="w-60 h-44 rounded-lg sm:w-96 sm:h-52 shadow-md shadow-rosado"></img>
                <div className="rounded-lg bg-negro flex justify-around mt-1 ">
                        <a href="https://github.com/H4r0l/Wheel-of-DOM"><SiGithub className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" /></a>
                    <p className="font-DynaPuff rounded-lg text-rosado flex justify-center sm:text-lg lg:justify-self-center">Juego Piratas</p>
                        <a href="https://wheelofdompirates.netlify.app/"><ImSphere className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" /></a>
                </div>
            </div>
            <div className=" flex flex-col rounded-lg w-60 h-44 justify-center m-10 sm:w-96 sm:h-52 lg:justify-self-center">
                <img src={TetrisImg} className="w-60 h-44 rounded-lg sm:w-96 sm:h-52 shadow-md shadow-rosado"></img>
                <div className="rounded-lg bg-negro flex justify-around mt-1">
                        <a href="https://github.com/JeffersonPulido/TetrisGame"><SiGithub className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" /></a>
                    <p className="font-DynaPuff rounded-lg text-rosado flex justify-center sm:text-lg ">Tetris</p>
                        <a href="https://tetrisgameapp.netlify.app"><ImSphere className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" /></a>
                </div>
            </div>
            <div className=" flex flex-col rounded-lg w-60 h-44 justify-center m-10 sm:w-96 sm:h-52 lg:justify-self-center">
                <img src={SabujCha} className="w-60 h-44 rounded-lg sm:w-96 sm:h-52 shadow-md shadow-rosado"></img>
                <div className="rounded-lg bg-negro flex justify-around mt-1">
                    <a href="https://github.com/27Paola/Proyect-te-.git"><SiGithub className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" /></a>
                <p className="font-DynaPuff rounded-lg text-rosado flex justify-center sm:text-lg ">SabujCha</p>
                <a href="https://proyecto-te.netlify.app/"><ImSphere className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" /></a>
            </div>
            </div>
            <div className=" flex flex-col rounded-lg w-60 h-44 justify-center m-10 sm:w-96 sm:h-52 lg:justify-self-center">
                <img src={CasaHormiga} className="w-60 h-44 rounded-lg sm:w-96 sm:h-52 shadow-md shadow-rosado"></img>
                <div className="rounded-lg bg-negro flex justify-around mt-1">
                    <a href="https://github.com/lilajoha29/casahormiga"><SiGithub className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" /></a>
                <p className="font-DynaPuff rounded-lg text-rosado flex justify-center sm:text-lg ">Casa Hormiga</p>
                <a href="https://casahormiga.netlify.app/"><ImSphere className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" /></a>
            </div>
            </div>
            <div className=" flex flex-col rounded-lg w-60 h-44 justify-center m-10 sm:w-96 sm:h-52 lg:justify-self-center">
                <img src={Programate} className="w-60 h-44 rounded-lg sm:w-96 sm:h-52 shadow-md shadow-rosado"></img>
                <div className="rounded-lg bg-negro flex justify-around mt-1">
                    <a href="https://github.com/lilajoha29/casahormigahttps://github.com/programateacademy/PROGRAMATE-SCHOOL-FRONT.git"><SiGithub className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" /></a>
                <p className="font-DynaPuff rounded-lg text-rosado flex justify-center sm:text-lg ">Programate School</p>
                <a href="https://programate-school-front.vercel.app/"><ImSphere className="w-6 h-6 sm:h-8 text-blanco hover:text-rosado animate-pulse hover:animate-ping" /></a>
            </div>
            </div>
        </div>
    </div>
    )
}


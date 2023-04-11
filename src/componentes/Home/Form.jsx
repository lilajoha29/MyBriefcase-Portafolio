import React from 'react'
import {ImSmile2} from "react-icons/im";
import Swal from 'sweetalert2'

export const Form = () => {

    const sendForm = () => {
        const name = document.getElementById('Nombre').value;
        const email = document.getElementById('Email').value;
        const message = document.getElementById('Mensaje').value;
        window.open(`https://wa.me/573103186284/?text=Asunto:%20${subject},%20Hola!%2C%20soy%20${name}%2C%20vi%20la%20pagina%20web%20y%20mi%20mensaje%20es%3A%20${message}.%0A%0AGracias%20y%20quedo%20pendiente%20de%20su%20respuesta.%0A%0AMi%20Correo%20Electr%C3%B3nico%20es%3A%20${email}`, '_blank');
        Swal.fire({
            title: '¡Gracias!',
            text: '¡Nos pondremos en contacto!',
            showConfirmButton: true,
            confirmButtonText: "¡Genial!",
            confirmButtonColor: '#59b528',
        })
    }

    return (
        <div id="form" className=' '>
            <div className='flex flex-col items-center'>
                <img src="https://media.giphy.com/media/l1J9H52unaRhtUHSg/giphy.gif" className='w-28 '></img>
                <h1 className='font-DynaPuff items-center text-pastel text-4xl flex flex-col text-center mb-4 sm:text-4xl '>Contactame</h1>
                <h2 className='font-DynaPuff text-center items-center text-blanco text-xl mb-4  '>Quieres saber mas, enviame un mensaje.</h2>
            </div>
            <form className='bg-pastel rounded-md m-5 p-5 shadow-blanco shadow-2xl mb-20 flex flex-col gap-2 md:mx-16'>
                <div>
                <label className='font-DynaPuff'>Nombre</label>
                <input id="Nombre" type='text' placeholder='Nombre' className='rounded-md p-2 w-full outline-none' required></input>
                </div>
                <div>
                <label className='font-DynaPuff'>Email</label>
                <input required id="Email" type='text' placeholder='Email' className=' rounded-md p-2 w-full outline-none'></input>
                </div>
                <div>
                <label className='font-DynaPuff'>Mensaje</label>
                <textarea required id="Mensaje"  type='text' placeholder='Mensaje' className=' rounded-md p-2 w-full h-24 outline-none' ></textarea>
                </div>
                
                    <button className='font-DynaPuff bg-rosado text-blanco  rounded-lg hover:text-rosado hover:bg-blanco shadow-negro/50 shadow-md w-fit p-2 flex flex-row' onClick={sendForm}>Enviar <ImSmile2 className="animate-bounce text-ms ml-1 mt-1 text-blanco hover:text-rosado"/></button>
                
            </form>
    </div>
    )
}



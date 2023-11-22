import React from 'react';
import {GiDiplodocus} from "react-icons/gi";


export const Experience = () => {
  return (
    <div>
        <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 
        <div className='py-5  '>
                <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl ">Experiencia <GiDiplodocus className='m-1 animate-pulse hover:animate-ping'/></h2>
            <div className='sm:px-10'>  

                {/* experiencia Muvy */}
                <div className=' py-3 sm:py-5'>
                    <p className="font-DynaPuff text-pastel flex flex-col text-right lg:text-lg">Muvy:</p>
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right lg:text-lg">Aplicación para trasporte</p><br />
                    <ul>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">
                      - Proyecto primera versión FrontEnd
                      </li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Manejo de FrontEnd en Next.js</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Estilos con Tailwind-Css</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Creación de 3 roles (Conductor, Usuario y Administrador)</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Enlace a llamadas al teléfono</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Activación manual por parte del conductor para recibir ofertas</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Activación manual por parte del administrador a cualquier otro rol</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Interfaz de usuario, web dinámica, ajustable y responsivo</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Página para recepción de clientes y la empresa.</li>
                    </ul>    
                </div>
            {/* experiencia educamas */}
                <div className=' py-3 sm:py-5'>
                    <p className="font-DynaPuff text-pastel flex flex-col text-right lg:text-lg">Fundación Programate School: </p>
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right lg:text-lg">Fundación de educación para alumnos de grado 11 del colegio</p><br />
                    <ul>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">
                      - Proyecto primera versión Fulstack
                      </li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Manejo de FrontEnd en React.js</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Estilos con Tailwind-Css</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Se crea un formulario de más de 50 preguntas con Formik</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Las validaciones del formulario se hicieron con Yup</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Interfaz de usuario, web dinámica, ajustable y responsivo</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Creación de 3 roles (Estudiante, administrador y superadministrador)</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Landing page, formulario de inscripción y plataforma para cada rol</li>
                    </ul>   
                </div>

{/* experiencia casa hormiga */}
                <div className=' py-3 sm:py-5'>
                    <p className="font-DynaPuff text-pastel flex flex-col text-right lg:text-lg">Casa Hormiga:</p>
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right lg:text-lg">Empresa de soluciones en diseño</p><br />
                    <ul>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">
                      - Proyecto primera versión FrontEnd
                      </li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Manejo de FrontEnd en React.js</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Estilos con Tailwind-Css</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Creación de formularios con Formik</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Carro de compras con envío a WhatsApp</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Interfaz de usuario, web dinámica, ajustable y responsivo</li>
                      <li className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">- Página para recepción de clientes y la empresa.</li>
                    </ul>    
                </div>  
        </div>
        </div>
    </div>
  )
}


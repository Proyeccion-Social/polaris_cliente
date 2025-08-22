import React from 'react'
import LogoPS from '../../Assets/LOGOPS.png'

const navbarlinks =[
  {
    id:1,
    title:"Inicio",
    Link:"/"

    
  },
  {
    id:2,
    title:"¿Qué somos?",
    Link:"/"

    
  },
  {
    id:3,
    title:"¿Quiénes somos?",
    Link:"/"

    
  },
  {
    id:4,
    title:"Portafolio",
    Link:"/"

    
  },
  {
    id:5,
    title:"Contactos",
    Link:"/"

    
  }
]
const navbarRedes = [
  {
    id:1,
    title:"Instagram",
    link:"https://www.instagram.com/proysocialud",
    icon:'bi bi-instagram'
  },
  {
    id:2,
    title:"Facebook",
    link:"https://www.facebook.com",
    icon:'bi bi-facebook'
  },
  {
    id:3,
    title:"Tik Tok",
    link:"https://www.tiktok.com",
    icon:'bi bi-tiktok'
  }
]
const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3 bg-neutral-900'>
        {/*Logo del NavBar*/}
        <div>
            <img src={LogoPS} alt='Logo PS' className='w-[100px]' />
        </div>
        {/*Navegación*/}
        <div>
            
            <ul className='flex sm: space-x-8 space-x-4'>
                {navbarlinks.map((link)=>(
                  <li key={link.id}>
                    <a 
                    className='text-white sm:text-lg text-sm hover:text-lime-400 '
                    href={link.Link}>
                      {link.title}</a>
                  </li>

                ))}
            </ul>
        </div>
          <div>
                <ul className='flex space-x-4'>
                  {navbarRedes.map((link)=>(
                    <li key={link.id}>
                      <a 
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-transform hover:scale-125
                    transform inline-block duration-300'
                      href={link.link}>
                        <i 
                        className={`${link.icon} text-lg text-white hover:text-lime-400 transition-transform hover:scale-110
                        transform inline-block duration-300`}>
                        </i>
                      </a>
                    </li>  

                  ))}

                </ul>
        </div>        
        </div>
    </nav>
  )
}

export default Navbar

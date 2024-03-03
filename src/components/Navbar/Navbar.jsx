import { useEffect } from 'react';
import style from './Navbar.module.css';
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useRef, useState } from "react";

export const Navbar = () => {
    const [logo, setLogo] = useState(false)

    // UseEffect para cambiar el logo cuando el ancho de la ventana cambia
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth
            if (windowWidth < 400) {
                setLogo(true)
            } else {
                setLogo(false)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [])

    // Referencia para el elemento nav
    const navRef = useRef()

    // Función para mostrar/ocultar el menú responsive
    const showNavbar = () => {
        navRef.current.classList.toggle(`${style.responsive_nav}`)
    }

    // Función para cerrar el menú después de hacer clic en un enlace
    const handleLinkClick = () => {
        navRef.current.classList.remove(`${style.responsive_nav}`)
    }

    // Este efecto se utiliza para manejar el comportamiento de desplazamiento suave al hacer clic en los enlaces del navbar.
    // Selecciona todos los enlaces dentro del navbar y agrega un evento 'click' a cada uno de ellos.
    // Cuando se hace clic en un enlace, se evita el comportamiento predeterminado del enlace, se calcula la altura del navbar y la posición de la sección de destino,
    // y se realiza un desplazamiento suave a la sección de destino ajustando la posición para que la sección no quede detrás del navbar
    useEffect(() => {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const targetId = this.getAttribute('href').substring(1)
                const targetPosition = document.getElementById(targetId).offsetTop
                const adjustedPosition = targetPosition - navbarHeight
                window.scrollTo({
                    top: adjustedPosition,
                    behavior: 'smooth'
                })
            })
        })
    }, [])

    return (
        <nav className={style.navbar}>
            {logo ?
                <a className={style.linkLogo2} href="#home">
                    <div className={style.logo2}><span className={style.spanLogo2}>X | </span>JF</div>
                </a> :
                <a className={style.linkLogo1} href="#home">
                    <div className={style.logo1}><span className={style.spanLogo1}>X | </span>JuanFerrero</div>
                </a>}
            <ul ref={navRef} className={style.navLinks}>
                <li className={style.item}><a className={style.links} href="#home" onClick={handleLinkClick}>Home</a></li>
                <li className={style.item}><a className={style.links} href="#aboutme" onClick={handleLinkClick}>Sobre Mí</a></li>
                <li className={style.item}><a className={style.links} href="#technology" onClick={handleLinkClick}>Tecnologías</a></li>
                <li className={style.item}><a className={style.links} href="#projects" onClick={handleLinkClick}>Proyectos</a></li>
                <li className={style.item}><a className={`${style.links} ${style.contact}`} href="#contact" onClick={handleLinkClick}>Contacto</a></li>
                <button onClick={showNavbar} className={`${style.close} ${style.nav_btn}`}>
                    <IoMdClose />
                </button>
            </ul>
            <button onClick={showNavbar} className={style.nav_btn}>
                <RiMenu3Fill />
            </button>
        </nav>
    )
}


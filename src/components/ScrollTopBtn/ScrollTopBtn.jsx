import { useEffect } from 'react';
import style from "./ScrollTopBtn.module.css";
import { GoMoveToTop } from "react-icons/go";

export const ScrollTopBtn = () => {

    //Utilizo useEffect para agregar y quitar event listeners cuando el componente se monta y desmonta.
    useEffect(() => {
        // Manejo el desplazamiento de la página y muestra u oculta el botón de desplazamiento hacia arriba.
        const handleScroll = () => {
            const scrollToTopBtn = document.getElementById("scrollToTopBtn")
            if (document.documentElement.scrollTop > 700) {
                scrollToTopBtn.style.display = "block"
            } else {
                scrollToTopBtn.style.display = "none"
            }
        }

        // Manejo el clic en el botón de desplazamiento hacia arriba y desplaza suavemente la página hacia arriba.
        const handleClick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        // Agrego event listeners para el desplazamiento y el clic en el botón cuando el componente se monta.
        window.addEventListener("scroll", handleScroll)
        const scrollToTopBtn = document.getElementById("scrollToTopBtn")
        scrollToTopBtn.addEventListener("click", handleClick)

        // Elimino los event listeners cuando el componente se desmonta para evitar posibles fugas de memoria.
        return () => {
            window.removeEventListener("scroll", handleScroll)
            scrollToTopBtn.removeEventListener("click", handleClick)
        }
    }, []) // La dependencia vacía [] asegura que este efecto se ejecute solo una vez al montar el componente.

    return (
        <button id="scrollToTopBtn" className={style.scrollTopBtn}><GoMoveToTop /></button>
    )
}

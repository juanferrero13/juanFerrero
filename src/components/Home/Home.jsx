import { useEffect } from 'react';
import style from './Home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
    useEffect(() => {
        // Inicializa AOS después de que el componente se monta y el DOM está listo
        AOS.init()
    }, [])

    // Función para desplazarse suavemente hacia la sección de contacto en el componente Contact
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            const navbarHeight = document.querySelector('nav').offsetHeight // Altura de la barra de navegación
            const contactSectionPosition = contactSection.getBoundingClientRect().top // Posición del elemento de contacto relativa a la ventana del navegador
            const scrollTop = document.documentElement.scrollTop; // Desplazamiento actual de la ventana
            const targetPosition = contactSectionPosition + scrollTop - navbarHeight // Posición ajustada del elemento de contacto con respecto al desplazamiento actual y la altura de la barra de navegación
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
            <div className={style.hero}>
                <h2 className={style.title}>Bienvenidos<br />a mi sitio web</h2>
                <button className={style.heroBtn} onClick={scrollToContact}>CONTÁCTAME</button>
            </div>
            <div className={style.home}>
                <h1 className={style.subtitle}>Hola! Soy Juan, Desarrollador Frontend.</h1>
                <p className={style.paragraph}>Frontend Developer con sólida experiencia en <strong>HTML5, CSS3, JavaScript y React.</strong> Me apasiona la programación y la tecnología en general. Crear sitios y apps web desde principio a fin con la más alta calidad es mi propósito, ofreciendo soluciones de excelencia.</p>
                <img className={style.img} data-aos="zoom-out-up" src="image/home-img-me.jpg" alt="foto-personal" />
            </div>
        </>
    );
}

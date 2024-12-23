import style from "./Projects.module.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoSass } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const fs = "https://github.com/juanferrero13/devtree_frontend"
const dw = "https://github.com/juanferrero13/DesarrolloWeb"
const js = "https://github.com/juanferrero13/JavaScript"
const react = "https://github.com/juanferrero13/React"
const tailwind = "https://github.com/juanferrero13/social-media-dashboard"
const reactAPI = "https://github.com/juanferrero13/dragonballz-app"

export const Projects = () => {
    return (
        <section className={style.projects}>
            <h2 className={style.projectTitle}>Proyectos</h2>
            <div className={style.container}>
                <div className={style.cards}>
                    <div className={`${style.cardName} ${style.fs}`}>
                        Full Stack
                        <p className={style.iconsCard}><SiExpress /> <BiLogoTypescript /> <FaReact /></p>
                    </div>
                    <h3 className={style.titleCard}>DevTree</h3>
                    <p className={style.paragraphCard}>DevTree es una aplicación diseñada para que desarrolladores compartan sus redes sociales. Este proyecto combina tecnologías como Express, TypeScript y React para ofrecer una experiencia moderna y eficiente.</p>
                    <a href={fs} target="_blank" rel="noreferrer"><button className={style.btnCard}>Visitar</button></a>
                </div>
                <div className={style.cards}>
                    <div className={`${style.cardName} ${style.dw}`}>
                        Desarrollo Web
                        <p className={style.iconsCard}><FaHtml5 /> <FaCss3Alt /> <BiLogoSass /></p>
                    </div>
                    <h3 className={style.titleCard}>Estilo Criollo</h3>
                    <p className={style.paragraphCard}>Estilo Criollo es un sitio web que se especializa en la venta de cuchillos principalmente. Además, ofrece otros productos como, tablas y accesorios para asado, mates, entre otros.</p>
                    <a href={dw} target="_blank" rel="noreferrer"><button className={style.btnCard}>Visitar</button></a>
                </div>
                <div className={style.cards}>
                    <div className={`${style.cardName} ${style.js}`}>
                        JavaScript
                        <p className={style.iconsCard}><IoLogoJavascript /></p>
                    </div>
                    <h3 className={style.titleCard}>JordanBrand</h3>
                    <p className={style.paragraphCard}>Jordan Brand es un e-commerce de zapatillas de básquet, exclusivamente de la marca Jordan. En este proyecto podrás encontrar un carrito de compras con todas las funcionalidades.</p>
                    <a href={js} target="_blank" rel="noreferrer"><button className={style.btnCard}>Visitar</button></a>
                </div>
                <div className={style.cards}>
                    <div className={`${style.cardName} ${style.react}`}>
                        React
                        <p className={style.iconsCard}><FaReact /></p>
                    </div>
                    <h3 className={style.titleCard}>deLaCabeza!</h3>
                    <p className={style.paragraphCard}>De La Cabeza es un e-commerce especializado en gorras, tanto clásicas como modernas y ofrece también gorros. En este proyecto implemento el uso de la base de datos Firebase/Firestore.</p>
                    <a href={react} target="_blank" rel="noreferrer"><button className={style.btnCard}>Visitar</button></a>
                </div>
                <div className={style.cards}>
                    <div className={`${style.cardName} ${style.tailwind}`}>
                        Tailwind CSS
                        <p className={style.iconsCard}><SiTailwindcss /></p>
                    </div>
                    <h3 className={style.titleCard}>Social Media Dashboard</h3>
                    <p className={style.paragraphCard}>
                        Social Media Dashboard es un proyecto compacto desarrollado con React, que proporciona datos dinámicos sobre interacciones en diversas redes sociales, y está estilizado con Tailwind CSS.</p>
                    <a href={tailwind} target="_blank" rel="noreferrer"><button className={style.btnCard}>Visitar</button></a>
                </div>
                <div className={style.cards}>
                    <div className={`${style.cardName} ${style.reactAPI}`}>
                        React + API
                        <p className={style.iconsCard}><FaReact /> <AiOutlineApi /></p>
                    </div>
                    <h3 className={style.titleCard}>DragonBallZ App</h3>
                    <p className={style.paragraphCard}>
                        DragonBallZ App es una aplicación que consume la API de DragonBallZ, proporcionando datos de los diferentes personajes; se implementa una paginacion para una mejor experiencia de usuario.</p>
                    <a href={reactAPI} target="_blank" rel="noreferrer"><button className={style.btnCard}>Visitar</button></a>
                </div>
            </div>
        </section>
    )
}

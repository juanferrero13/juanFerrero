import style from "./Projects.module.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoSass } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const dw = "https://github.com/juanferrero13/DesarrolloWeb"
const js = "https://github.com/juanferrero13/JavaScript"
const react = "https://github.com/juanferrero13/React"

export const Projects = () => {
    return (
        <div className={style.projects}>
            <h2 className={style.projectTitle}>Proyectos</h2>
            <div className={style.container}>
                <div className={style.cards}>
                    <div className={`${style.cardName} ${style.dw}`}>
                        Desarrollo Web
                        <p className={style.iconsCard}><FaHtml5 /> <FaCss3Alt /> <BiLogoSass /></p>
                    </div>
                    <h3 className={style.titleCard}>Estilo Criollo</h3>
                    <p className={style.paragraphCard}>Estilo Criollo es un sitio web que se especializa en la venta de cuchillos principalmente. Además, ofrece otros productos como, tablas y accesorios para asado, mates, entre otros.</p>
                    <a href={dw} target="_blank"><button className={style.btnCard}>Visitar</button></a>
                </div>
                <div className={style.cards}>
                    <div className={`${style.cardName} ${style.js}`}>
                        JavaScript
                        <p className={style.iconsCard}><IoLogoJavascript /></p>
                    </div>
                    <h3 className={style.titleCard}>JordanBrand</h3>
                    <p className={style.paragraphCard}>Jordan Brand es un e-commerce de zapatillas de básquet, exclusivamente de la marca Jordan. En este proyecto podrás encontrar un carrito de compras totalmente funcional.</p>
                    <a href={js} target="_blank"><button className={style.btnCard}>Visitar</button></a>
                </div>
                <div className={style.cards}>
                    <div className={`${style.cardName} ${style.react}`}>
                        React Js
                        <p className={style.iconsCard}><FaReact /></p>
                    </div>
                    <h3 className={style.titleCard}>deLaCabeza!</h3>
                    <p className={style.paragraphCard}>De La Cabeza es un e-commerce especializado en gorras, tanto clásicas como modernas y ofrece también gorros. En este proyecto implemento el uso de la base de datos Firebase/Firestore.</p>
                    <a href={react} target="_blank"><button className={style.btnCard}>Visitar</button></a>
                </div>
            </div>
        </div>
    )
}

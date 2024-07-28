import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { FaReact } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { FaSass } from "react-icons/fa"
import { FaGitAlt } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiPostman } from "react-icons/si"
import { SiHandlebarsdotjs } from "react-icons/si"
import { SiChakraui } from "react-icons/si"
import style from "./Technology.module.css"

export const Technology = () => {
    return (
        <section className={style.container}>
            <div className={style.titles}>
                <h2 className={style.subtitle}>Código limpio y bien estructurado</h2>
                <p className={style.paragraph}>Utilizo principalmente <strong className={style.strong1}>HTML5, CSS3, JavaScript y React</strong> para lograr sitios atractivos y dinámicos. También empleo el uso de frameworks como <strong className={style.strong1}> Bootstrap y Tailwind CSS.</strong></p>
                <p className={style.paragraph}>En mis proyectos he aplicado, además, otras tecnologías como<strong className={style.strong2}> SASS, GIT, GitHub, Next.js, Node.js, Firebase/Firestore, Express.js, MongoDB, Postman, Motores de Plantillas, Chakra UI, </strong>entre otras.</p>
                <p className={style.paragraph}>Mis diseños son <strong className={style.strong2}>responsivos,</strong> ofreciendo una experiencia óptima en cualquier dispositivo.</p>
            </div>
            <div className={style.logos}>
                <div className={`${style.logoContainer} ${style.logoContainerHtml}`}><FaHtml5 className={style.logo} /><p>HTML5</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerCss}`}><FaCss3Alt className={style.logo} /><p>CSS3</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerJs}`}><IoLogoJavascript className={style.logo} /><p>JavaScript</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerReact}`}><FaReact className={style.logo} /><p>React</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerBootstrap}`}><FaBootstrap className={style.logo} /><p>Bootstrap</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerTailwind}`}><SiTailwindcss className={style.logo} /><p>Tailwind</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerSass}`}><FaSass className={style.logo} /><p>SASS</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerGit}`}><FaGitAlt className={style.logo} /><p>GIT</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerGithub}`}><FaGithub className={style.logo} /><p>GitHub</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerNext}`}><TbBrandNextjs className={style.logo} /><p>Next.js</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerNode}`}><FaNodeJs className={style.logo} /><p>Node.js</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerFirebase}`}><IoLogoFirebase className={style.logo} /><p>Firebase</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerExpress}`}><SiExpress className={style.logo} /><p>Express.js</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerMongo}`}><SiMongodb className={style.logo} /><p>MongoDB</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerPostman}`}><SiPostman className={style.logo} /><p>Postman</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerHandlebars}`}><SiHandlebarsdotjs className={style.logo} /><p>Handlebars</p></div>
                <div className={`${style.logoContainer} ${style.logoContainerChakra}`}><SiChakraui className={style.logo} /><p>Chakra UI</p></div>
            </div>
        </section>
    )
}

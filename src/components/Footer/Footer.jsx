import { GrLinkedin } from "react-icons/gr"
import { FaGithub } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
import style from "./Footer.module.css"

export const Footer = () => {

    const whatsapp = 3517059824
    const linkedin = "https://www.linkedin.com/in/juanpabloferrero"
    const github = "https://github.com/juanferrero13"
    const discord = "https://discord.com/users/juanferrero."

    return (
        <section className={style.footer}>
            <div>
                <h3 className={style.title}>Redes Sociales</h3>
                <a href={linkedin} target="_blank" className={style.socialR}><GrLinkedin /></a>
                <a href={github} target="_blank" className={style.socialR}><FaGithub /></a>
                <a href={discord} target="_blank" className={style.socialR}><BsDiscord /></a>
                <a href={`https://api.whatsapp.com/send?phone=${whatsapp}`} target="_blank" className={style.socialR}><IoLogoWhatsapp /></a>
            </div>
            <p>Sitio desarrollado por <span>JUAN PABLO FERRERO</span> © 2024</p>
        </section>
    )
}

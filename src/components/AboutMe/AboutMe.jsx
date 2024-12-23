import style from "./AboutMe.module.css"

export const AboutMe = () => {

    const handleDownloadCV = () => {
        const downloadLink = document.createElement('a')
        downloadLink.href = "cv/juan-ferrero-cv.pdf"
        downloadLink.download = "juan-ferrero-cv.pdf"
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
    }

    return (
        <section className={style.container}>
            <div className={style.aboutMe}>
                <h2 className={style.title}>Juan Pablo Ferrero</h2>
                <h3 className={style.subtitle}>FULL STACK DEVELOPER</h3>
                <p className={style.paragraph}>Nací en Cintra, Córdoba, en 1994. Mi pasión por la programación comenzó de manera autodidacta, explorando videos y tutoriales en YouTube y leyendo artículos en diversas plataformas web.</p>
                <p className={style.paragraph}>A mediados de 2022, realicé mi primer curso en Udemy, titulado<span className={style.spanParagraph}> "Java y BlueJ | Introducción a las Bases de la Programación".</span></p>
                <p className={style.paragraph}>Desde principios de 2023 hasta agosto de 2024, estudié <span className={style.spanParagraph}> Programación Full Stack </span>en Coderhouse. Actualmente, sigo perfeccionando mis habilidades tanto en Frontend como en Backend, y he comenzado a adentrarme profundamente en el fascinante mundo de Python, ampliando mis horizontes y desarrollando mis conocimientos.
                </p>
                <p className={style.paragraph}>Mis objetivos son claros, crear soluciones ágiles y atractivas, manteniendo la simpleza y el dinamismo, cada línea de código se resume en eso.</p>
                <strong className={style.strong}>¡Gracias por visitar mi sitio!</strong>
            </div>
            <div className={style.cv}>
                <button onClick={handleDownloadCV} className={style.btn}>
                    <span>DESCARGÁ MI CV</span>
                </button>
            </div>
        </section>
    )
}

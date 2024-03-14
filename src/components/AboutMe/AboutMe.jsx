import style from "./AboutMe.module.css"

export const AboutMe = () => {

    const handleDownloadCV = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = "cv/juan-pablo-ferrero-cv.pdf";
        downloadLink.download = "juan-pablo-ferrero-cv.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <section className={style.container}>
            <div className={style.aboutMe}>
                <h2 className={style.title}>Juan Pablo Ferrero</h2>
                <h3 className={style.subtitle}>FRONTEND DEVELOPER</h3>
                <p className={style.paragraph}>Nací en Cintra, Córdoba, en 1994. Comencé a estudiar programación de forma totalmente independiente, mirando videos y tutoriales de YouTube, leyendo artículos en diferentes sitios web.</p>
                <p className={style.paragraph}>A mediados de 2022 realice mi primer curso en Udemy,<span className={style.spanParagraph}> "Java y BlueJ | Introducción a las Bases de la Programación".</span></p>
                <p className={style.paragraph}>En 2023 comencé a estudiar<span className={style.spanParagraph}> Programación Full Stack </span>en Coderhouse, actualmente me encuentro realizando el curso de <span className={style.spanParagraph}> Programación Backend.</span></p>
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

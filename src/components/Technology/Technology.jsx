import style from "./Technology.module.css"

export const Technology = () => {
    return (
        <div className={style.container}>
            <div className={style.titles}>
                <h2 className={style.subtitle}>Código limpio y bien estructurado</h2>
                <p className={style.paragraph}>Utilizo principalmente <strong className={style.strong1}>HTML5, CSS3, JavaScript y React Js</strong> para lograr sitios atractivos y dinámicos. También empleo el uso de frameworks como <strong className={style.strong1}> Bootstrap y Tailwind CSS.</strong></p>
                <p className={style.paragraph}>En mis proyectos he aplicado, además, otras tecnologías como<strong className={style.strong2}> SASS, GIT, GitHub, Node JS, Firebase/Firestore, Chakra UI, SweetAlert2, </strong>entre otras.</p>
                <p className={style.paragraph}>Mis diseños son <strong className={style.strong2}>responsivos,</strong> ofreciendo una experiencia óptima en cualquier dispositivo.</p>
            </div>
            <div className={style.img}>
                <img className={style.imgHtml} src="image/html.png" alt="html5" />
                <img className={style.imgCss} src="image/css.png" alt="css3" />
                <img className={style.imgJs} src="image/js.png" alt="javascript" />
                <img className={style.imgReact} src="image/react.png" alt="react" />
                <img className={style.imgBoot} src="image/bootstrap.webp" alt="bootstrap" />
                <img className={style.imgTail} src="image/tailwind.png" alt="tailwind" />
                <img className={style.imgSass} src="image/sass.png" alt="sass" />
                <img className={style.imgGit} src="image/git.png" alt="git" />
                <img className={style.imgGithub} src="image/github.png" alt="github" />
                <img className={style.imgNode} src="image/node.png" alt="node" />
                <img className={style.imgFirebase} src="image/firebase.png" alt="firebase" />
                <img className={style.imgChakra} src="image/chakra.png" alt="chakra" />
            </div>
        </div>
    )
}

import style from "./Service.module.css"
import { IoReturnDownBackSharp } from "react-icons/io5";

export const Service = () => {
    return (
        <div className={style.container}>
            <h2>Próximamente</h2>
            <a href="#" className={style.link}>
                <p><IoReturnDownBackSharp className={style.back} /> Volver</p>
            </a>
        </div>
    )
}

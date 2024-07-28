import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'
import style from "./Contact.module.css"
import { useEffect } from 'react'
import { useRef } from 'react'

export const Contact = () => {
    const form = useRef()

    useEffect(() => {
        AOS.init()
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_7awhj8o', 'template_kzyt53g', form.current, {
                publicKey: 'ikYHRE2dqzoRV3q1r',
            })
            .then(
                () => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Mensaje enviado con éxito",
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                            title: style.titleAlert,
                            icon: style.icon
                        }
                    })
                    form.current.reset()
                },
                (error) => {
                    console.error('Error', error.text)
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Error al enviar el mensaje, intente mas tarde",
                        showConfirmButton: false,
                        timer: 2000,
                        customClass: {
                            title: style.titleAlert,
                            icon: style.icon
                        }
                    })
                    form.current.reset()
                },
            )
    }

    return (
        <section id="contact" className={style.container}>
            <h2 className={style.title}>CONTÁCTAME</h2>
            <h3 className={style.subtitle}>Completá el formulario y a la brevedad me pondre en contacto.</h3>
            <div className={style.containerForm}>
                <form ref={form} data-aos="zoom-in-up" onSubmit={sendEmail} className={style.form}>
                    <label className={style.label}>NOMBRE COMPLETO</label>
                    <input className={style.input} type="text" name="user_name" placeholder='Nombre Completo' required />
                    <label className={style.label}>EMAIL</label>
                    <input className={style.input} type="email" name="user_email" placeholder='Email' required />
                    <label className={style.label}>MENSAJE</label>
                    <textarea className={style.textarea} name="message" placeholder='Mensaje' rows="10" required />
                    <input className={style.send} type="submit" value="ENVIAR" />
                    <span className={style.spanForm}></span>
                    <span className={style.spanForm}></span>
                    <span className={style.spanForm}></span>
                    <span className={style.spanForm}></span>
                </form>
            </div>
        </section>
    )
}
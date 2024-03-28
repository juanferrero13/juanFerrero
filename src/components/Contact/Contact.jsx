import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import style from "./Contact.module.css"
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
    const form = useRef()

    useEffect(() => {
        AOS.init();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_llodtzc', 'template_dh69f2e', form.current, {
                publicKey: '-lDCNe35xXTB_aLO-',
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
                    console.log('Error', error.text)
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
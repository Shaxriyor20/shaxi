import "./style.scss"
import { useState } from "react"
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
function ContactsForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        notes: ""
    })

    const templateParams = {
        from_name: form.name,
        email: form.email,
        number: form.number,
        message: form.notes
    };

    function fireSetForm(e) {
        let key = e.target.name
        let val = e.target.value
        setForm({ ...form, [key]: val })
    }

    function submit(e) {
        e.preventDefault()

       emailjs.send('service_izt0f6y', 'template_kzzp738', templateParams, 'KumK2OpSGQwVwwKUP')
            .then((response) => {
                toast.success('SUCCESS!', {
                    theme: "dark"
                });
            }, (err) => {
                toast.error('FAILED...', {
                    theme: "dark"
                });
            });
    }

    return (
        <div id="contacts-form-wrapper">
            <form onSubmit={submit}>
                <h1>Остались вопросы?</h1>
                <h3>Оставь заявку и мы ответим</h3>
                <br />
                <input
                    id="full-name-input" type="text"
                    placeholder="Полное имя" name='name'
                    onChange={fireSetForm} required
                />
                <div>
                    <input
                        id="email-input" type="email" placeholder="Почта"
                        onChange={fireSetForm} name='email' required
                    />
                    <input
                        id="number-input" type="text" placeholder="Телефон"
                        onChange={fireSetForm} name='text' required
                    />
                </div>
                <textarea
                    id="description-area"
                    cols="10"
                    rows="8"
                    placeholder="Текст собщения"
                    name='notes'
                    onChange={fireSetForm}
                    required
                ></textarea>
                <button className="green-btn">
                    Оставить заявку
                </button>
            </form>
        </div>
    );
}

export default ContactsForm;
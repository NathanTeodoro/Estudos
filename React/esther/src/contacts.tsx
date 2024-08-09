import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import dog from '../src/assets/dog.png'
const Contacts: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', 'user_id')
     .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <article id='contacts' className='contacts'>
      <div>
      <div className='ctext'>
      <h2>Contato</h2>
      <p>Entre em contato comigo!</p>
      </div>
      <img src={dog} alt="" />
      </div>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu e-mail" />
        <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Sua mensagem" />
        <button type="submit">Enviar</button>
      </form>
    </article>
  );
};

export default Contacts;
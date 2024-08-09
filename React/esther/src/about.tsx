import React from 'react';
import urso from '../src/assets/urso.png'
const About: React.FC = () => {
  return (
    <article id='sobre' className='about'>
      <img src={urso} alt="" />
      <h2>Sobre mim</h2>
      <p>Sou uma professora dedicada e apaixonada por crianças.</p>
      <small>Aprenda mais sobre minha filosofia de ensino e experiencias.</small>
      <ul>
        <h3>Cursos</h3>
        <li>Mediação Escolar</li>
        <li>Aperfeiçoamento em Matemática</li>
        <li>Gestão Escolar</li>
        <li>Assistente Administrativo </li>
        <li>Práticas de alfabetização</li>
        <li>Alfabetização baseado na ciência</li>
        <li>Formação para Profissionais da Educação Infantil</li>
      </ul>
    </article>
  );
};

export default About;
import React from 'react';
import abelha from '../src/assets/bee.png'
const Experience: React.FC = () => {
  return (
    <article id='exp' className='exp'>
      <img src={abelha} alt="" />
      <h2></h2>
      <p> Estou no sistema de ensino desde 2019</p>
      <small>Veja minhas expêriencias</small>
      <ul><h3>Estagios/Trabalhos</h3>
        <li>Realizado em escolas municipais na educação infantil e ensino fundamental I, com carga horaria total de 270 horas, com participação, coparticipação e uma regência observada e avaliada pelo professor regente.</li>
          <li>C. M. Professora América Abdalla</li>
          <li>Professora Particular</li>
          <li>Professora de Reforço Escolar</li>
          <li>Estágio em Assistente Administrativo</li>
          <li>Professora Regente </li>
          <li>Educacional ETP</li>
          <li>Creche Escola Arte de Ensinar</li>
          
      </ul>
    </article>
  );
};

export default Experience;
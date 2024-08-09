import React, { useState } from 'react';
import { FaHome, FaInfo, FaChalkboardTeacher} from 'react-icons/fa';
import { GrWorkshop } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";
//import  lapis  from "./lapis.png";

interface NavbarProps {
  activeLink: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink }) => {
  const [,setActive] = useState(activeLink);

  const handleLinkClick = (link: string) => {
    setActive(link);
  };

  return (
    <nav className='navbar'> 
      <ul>
        <li>
          <a href="/" onClick={() => handleLinkClick('#home')}>
            <FaHome size={24} />
            Inicio
          </a>
        </li>
        <li>
          <a href="#sobre" onClick={() => handleLinkClick('about')}>
            <FaInfo size={24} />
            Sobre
          </a>
        </li>
        <li>
          <a href="#exp" onClick={() => handleLinkClick('experience')}>
            <FaChalkboardTeacher size={24} />
            Experiencia
          </a>
        </li>
        <li>
          <a href="#trabalhos" onClick={() => handleLinkClick('myprojects')}>
            <GrWorkshop size={24} />
            Meus projetos
          </a>
        </li>
        <li>
          <a href="#contacts" onClick={() => handleLinkClick('contacts')}>
            <MdContactMail size={24} />
            Contatos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
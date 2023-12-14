import React, { useEffect } from 'react';
import './Menu.css';

export default function Menu() {
  useEffect(() => {
    const menuAtivo = document.querySelector('.menu');
    const menuNormal = document.querySelector('.setaDesce');

    const handleClick = () => {
      if (menuAtivo.classList.contains('active')) {
        menuAtivo.classList.remove('active');
      } else {
        menuAtivo.classList.add('active');
      }
    };

    if (menuNormal) {
      menuNormal.addEventListener('click', handleClick);
    }

    return () => {
      if (menuNormal) {
        menuNormal.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <nav>
      <ul className='menu'>
        <li><img src='https://cdn-icons-png.flaticon.com/128/4001/4001039.png' alt='logo' className='logo'></img><h1>MÓBILE</h1></li>
        <li className="item"><a href="#">Inicio</a></li>
        <li className="item"><a href="#">Produtos</a></li>
        <li className="item"><a href="#">Contato</a></li>
        <li className="item"><a href="#">Sobre</a></li>
        <li className="item"><a href="#">Conta</a></li>
        <li className="item"><a href="#">Sair</a></li>
        <li className='setaDesce'>☰</li>
      </ul>

    </nav>
  );
}

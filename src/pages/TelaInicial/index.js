// src\components\TelaInicial\index.js

import React from 'react';
import logo from '../../assets/images/logo1.png'; 
import { useNavigate } from 'react-router-dom'
import './styles.css';

function TelaInicial(){
  const navigate = useNavigate()
  return (
      <div className="tela-inicial">
          <img src={logo} alt="Logo da empresa" />
          <button onClick={() => navigate('/cadastro')} className='link-voltar'>Cadastrar jogadores</button>
          <button onClick={() => navigate('/usuarios')} className="link-usuarios">Ver jogadores cadastrados</button>
      </div>
  );
};

export default TelaInicial;
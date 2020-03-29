import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register(){
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsApp] = useState('');
	const [city, setCity] = useState('');
	const [uf, setUF] = useState('');

    const history = useHistory();

	async function handleRegister(e){
		e.preventDefault();

		const data = {
			name,
			email,
			whatsapp,
			city,
			uf
		};

try{
	const response = await api.post('ongs',data);
	alert(`Seu ID de Acesso: ${response.data.id}`);
	history.push('/');
}catch(err){
	alert('Erro no cadastro, tente novamente !');
}


	}
	return(
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be the Hero"/>
					<h1>Registrar-se</h1>
					<p>faça seu cadastro na plataforma e ajuda as pessoas com as ONGs</p>
					<Link className="back-link" to="/">Voltar para Logon </Link>
				</section>
				
				<form onSubmit={handleRegister}>
					<input 
					 type="text"
					 placeholder = "Nome da Ong"
					 value={name}
					 onChange={e => setName(e.target.value)}
					/>
					<input
					 type="text"
					 placeholder = "E-Mail"
					 value={email}
					 onChange={e => setEmail(e.target.value)}
					 />
					<input
					 type="text"
					 placeholder = "WhatsApp"
					 value={whatsapp}
					 onChange={e => setWhatsApp(e.target.value)}
					 />
					
					<div className="input-group">
						<input
						 type="text"
						 placeholder = "Cidade" 
						 value={city}
					     onChange={e => setCity(e.target.value)}
						 />
						<input
						 type="text"
						 placeholder = "Uf" style = {{ width: 80 }}
						 value={uf}
					 onChange={e => setUF(e.target.value)}
						 />
					</div>

					<button className="button" type=""submit>Cadastrar</button>
				</form>
			</div>
		</div>
	);
	
}
import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import InfoPessoal from './components/InfosPessoais/InfoPessoal';
import Email from './components/Email/Email';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://static.vecteezy.com/ti/vetor-gratis/t2/2518022-homem-personagem-avatar-em-desenho-animado-estilo-plano-icone-redondo-vetor.jpg"
          nome="Pétrick Grillo"
          descricao="Oi, eu sou o Pétrick. Sou aluno da Labenu atualmente e adoro estar constantemente fazendo algo, seja este algo o mais bobo possivel, mas nunca parado."
        />

        <ImagemButton
          imagem="http://www.clker.com/cliparts/H/X/l/b/0/0/south-arrow-hi.png"
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <InfoPessoal
          imagem="https://cdn-icons-png.flaticon.com/512/16/16475.png"
          texto= "E-mail:" texto2="petrick.grillo@gmail.com"
          />
      </div>
      <div className="page-section-container">
        <Email
          imagem="https://cdn-icons-png.flaticon.com/512/3203/3203071.png"
          texto= "Endereço:" texto2="Rua algumacoisa"
          />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://sp.senai.br/images/Senai.jpg"
          nome="SENAI"
          descricao="Curso Técnico de Eletromecanica"
        />

        <CardGrande
          imagem="https://iguatemi.com.br/saocarlos/sites/saocarlos/files/logo-1360167379674.png"
          nome="LUPO"
          descricao="Menor aprendiz de Eletromecanica."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;

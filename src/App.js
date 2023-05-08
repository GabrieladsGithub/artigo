import './App.css';
import logoFaculdade from './ri_1.png';
import React, { useState } from 'react';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';

  return (
    <div className={themeClass}>
      <div>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className='master'>
        <div className='titulo'>
          <img src={logoFaculdade} alt="Logo Faculdade" />
          <h1>Programação Web e Aplicação Web</h1>
          <h3>Gabriela da Silva</h3>
        </div>
        <div className='texto'>
          <h3>Resumo</h3>
          <p>Este artigo apresenta uma visão geral das tecnologias e tendências atuais no desenvolvimento web. Inicialmente, são apresentados os conceitos básicos de programação web, em seguida, são discutidas as principais tecnologias utilizadas no desenvolvimento web, como HTML, CSS, JavaScript e frameworks populares. Em seguida, são apresentadas as tendências atuais no desenvolvimento web, incluindo a adoção de tecnologias como React, Angular, Vue, GraphQL e JAMstack. Por fim, são discutidas as considerações finais sobre o futuro do desenvolvimento web e a importância de manter-se atualizado em relação às novas tecnologias e tendências.
            Desenvolvimento web é o processo de criação e codificação de sites, aplicativos e outros elementos para a internet, além de sua integração com sistemas e ferramentas, armazenamento de banco de dados e segurança cibernética. É importante escolher a melhor linguagem de programação para cada projeto, levando em consideração a finalidade da aplicação e suas necessidades. Existem diversas linguagens de programação disponíveis, sendo que a escolha da melhor depende do tipo de aplicação a ser desenvolvida. Algumas das linguagens mais usadas atualmente incluem JavaScript, Python, PHP, Go, Ruby e SQL. Profissionais de desenvolvimento web podem atuar nas áreas de front-end e back-end, sendo que, em projetos maiores, essas áreas costumam ser gerenciadas por profissionais especializados em cada uma delas. A aplicação web é executada diretamente no navegador do usuário, sem necessidade de instalação em seu computador, e pode envolver diversos níveis de complexidade, como integrações com APIs, armazenamento de banco de dados, entre outros.</p>
        </div>
        <div className='texto'>
          <h3>Abstract</h3>
          <p>This article provides an overview of current technologies and trends in web development. Initially, the basic concepts of web programming are presented, followed by a discussion of the main technologies used in web development, such as HTML, CSS, JavaScript, and popular frameworks. Next, current trends in web development are presented, including the adoption of technologies such as React, Angular, Vue, GraphQL, and JAMstack. Finally, final considerations are discussed on the future of web development and the importance of staying up to date with new technologies and trends.
            Web development is the process of creating and coding websites, applications, and other elements for the internet, as well as integrating them with systems and tools, database storage, and cyber security. It is important to choose the best programming language for each project, taking into account the purpose of the application and its needs. There are several programming languages available, and the choice of the best one depends on the type of application to be developed. Some of the most used languages currently include JavaScript, Python, PHP, Go, Ruby, and SQL. Web development professionals can work in front-end and back-end areas, and in larger projects, these areas are usually managed by specialized professionals in each of them. The web application runs directly in the user's browser, without the need for installation on their computer, and can involve various levels of complexity, such as API integrations, database storage, among others</p>
        </div>
        <div className='texto'>
          <h3>Palavras chaves</h3>
          <p>desenvolvimento web, programação web, tecnologias, tendências, HTML, CSS, JavaScript, frameworks, React, Angular, Vue, GraphQL, JAMstack, linguagens de programação, front-end, back-end, aplicação web, navegador, complexidade, integrações, APIs, banco de dados, segurança cibernética.</p>
        </div>
        <div className='texto'>
          <h3>1. Introdução</h3>
          <p>A web se tornou uma parte integrante de nossas vidas e é usada diariamente para uma variedade de propósitos, desde comprar produtos até se conectar com amigos e familiares. À medida que a web cresce em complexidade, o desenvolvimento web torna-se mais importante do que nunca. Os desenvolvedores da web precisam criar experiências ricas e interativas para os usuários em um mundo que está sempre em mudança. Para fazer isso, é necessário conhecer as tecnologias e tendências atuais no desenvolvimento web.</p>
        </div>
        <div className='texto'>
          <h3>2. Desenvolvimento </h3>
          <p>Escolher a melhor linguagem de programação depende de que você está pretendendo desenvolver, de acordo com a necessidade do projeto a linguagem deverá atender.</p>
          <p>O desenvolvimento web incluem criação, codificação e programação de sites e seus respectivos elementos e linguagens. Ele também envolve integração com sistemas e ferramentas, armazenamento de banco de dados, cibe segurança, entre outros, com o objetivo de estruturar cada detalhe de uma página da internet.</p>
          <p>Sempre estar atento é importante para o surgimento de novas ferramentas, inovação é essencial no ramo de tecnológico, principalmente para soluções torna-se cada vez mais viável ganhar tempo para aplicações. </p>
        </div>
        <div className='texto'>
          <h3>2.1 SPA: Single-Page Application</h3>
          <p>Essa representação é atendida para todos os seguimentos (IOS, android, web), a responsabilidade de mostrar os dados agora passa a ser do front-end.</p>
        </div>
        <div className='texto'>
          <h3>2.3 JSON JavaScript Object Notation</h3>
          <p>A aplicação em back-end fazendo uma interatividade em html transformação de dados, o problema é que dispositivos moveis não atendem em HTML. Nasceu de uma necessidade uma nova solução para atender a manipulação em qualquer plataforma.</p>
          <p>SPA não precisa de um novo carregamento para recarregar a página para ser renderizada.</p>
          <ul>
            <li>Programação client-side. JavaScript é a considerada a melhor na linguagem de programação para o desenvolvimento front-end.</li>
            <li>Programação server-side. Python, PHP, Go, e Ruby já são considerados no quesito de bancos de dados a se comunicarem com aplicações no back-end de um programa.</li>
            <li>Desenvolvimento de aplicações web. C#, JavaScript, Java, Go, e Ruby podemos considerar dentre as melhores linguagens de programação para construção de web apps. </li>
            <li>Gerenciamento de dados. Sem dúvidas, a melhor linguagem de programação para lidar com dados é SQL.</li>
          </ul>
          <p>Além disso, a lista a seguir indica quais são as linguagens de programação mais adequadas para:</p>
          <ul>
            <li>Desenvolvimento de jogos. C++, C#, JavaScript, e Java são linguagens de programação potentes e ideais para estes casos.</li>
            <li>Desenvolvimento de apps móveis. C++ e Java podem oferecer ótimo desempenho para os aplicativos móveis que você está construindo. Se está interessado em desenvolver apps e produtos para iOS, opte pela linguagem de programação Swift.</li>
            <li>Aplicações GUI. Python, C#, PHP, Java, e Go são excelentes opções para desenvolver aplicativos desktop.</li>
            <li>Processamento de dados. Python, SQL, e Ruby são ótimos para computação estatística.</li>
            <li>Em termos de versatilidade, a linguagem de programação C++ é considerada a mais versátil desta lista, apesar da linguagem Java também apresentar grande versatilidade.</li>
          </ul>
          <p>Em termos de popularidade, hoje em dia, a linguagem de programação Python é sem dúvidas a mais popular no desenvolvimento web, seguida por Java, JavaScript, C++ e C#.</p>
        </div>
        <div className='texto'>
          <h3>2.4 O que é desenvolvimento web</h3>
          <p>Lembrando que, os sites e demais programas presentes na internet hoje são muito mais dinâmicos e necessitam de um desenvolvimento maior, com diversas integrações com APIs (Application Programming Interface), preparação e armazenamento de banco de dados e muito mais.</p>
          <p>Essa complexidade atual e as várias linguagens utilizadas na programação acabou dando origem a profissões distintas como, por exemplo, a de front-end e back-end.</p>
          <p>É claro que ainda existem profissionais full que dominam ambas as linguagens de programação, mas dependendo do tamanho do projeto de desenvolvimento de websites, esse profissional acaba sendo um gestor com a responsabilidade de integrar as áreas.</p>
         </div>
        <div className='texto'>
          <h3>2.5 Conceitos Básicos de Programação Web</h3>
          <p>A estrutura de programação apresenta os conceitos básicos de programação web, incluindo a estrutura da web, a diferença entre clientes e servidores, e os principais protocolos usados na web, como HTTP e HTTPS.</p>
        </div>
        <div className='texto'>
          <h3>2.6 Tecnologias do Desenvolvimento Web</h3>
          <p>Aqui são apresentadas as principais tecnologias utilizadas no desenvolvimento web, como HTML, CSS e JavaScript. Também são discutidos os frameworks populares para desenvolvimento web, como Angular, React e Vue.</p>
        </div>
        <div className='texto'>
          <h3>2.7 Tendências Atuais no Desenvolvimento Web</h3>
          <p>Discutiremos as tendências atuais no desenvolvimento web, incluindo a adoção de tecnologias como React, Angular, Vue, GraphQL e JAMstack. Também são discutidos os conceitos de Progressive Web Apps e Single Page Applications.</p>
        </div>
        <div className='texto'>
          <h3>3. Considerações Finais</h3>
          <p>O desenvolvimento web é uma área em constante evolução e os desenvolvedores precisam estar sempre atualizados em relação às novas tecnologias e tendências. A adoção de novas tecnologias, como React, Angular, Vue, GraphQL e JAMstack, pode ajudar os desenvolvedores a criar experiências mais ricas e interativas para os usuários. A importância de se manter atualizado em relação às tendências e novas tecnologias do desenvolvimento web não pode ser subestimada.</p>
        </div>
        <div className='referencia'>
          <h4>HOSTINGER. As 10 Linguagens de Programação Mais Usadas em 2023: Aprimore suas Habilidades em Desenvolvimento Web. Disponível em: https://www.hostinger.com.br/tutoriais/linguagens-de-programacao-mais-usadas#:~:text=Se%20tratando%20de%20desenvolvimento%20web,Java%2C%20JavaScript%20e%20C%2B%2B. Acesso em: 18 mar. 2023.</h4>
          <h4>SACRAMENTO, Gabriel. Aplicação web: o que é, diferença para website, como funciona e mais! Disponível em: https://rockcontent.com/br/talent-blog/aplicacao-web/. Acesso em: 18 mar. 2023.</h4>
          <h4>XPEDUCACAO. Desenvolvimento web: tudo o que você precisa saber! Disponível em: https://blog.xpeducacao.com.br/desenvolvimento-web/#:~:text=O%20desenvolvimento%20web%20inclui%20cria%C3%A7%C3%A3o,de%20uma%20p%C3%A1gina%20da%20internet.. Acesso em: 18 mar. 2023.</h4>
          <h4>MOZILLA DEVELOPER NETWORK. Learn web development. Disponível em: https://developer.mozilla.org/en-US/docs/Learn. Acesso em: 19 mar. 2023.</h4>
          <h4>W3SCHOOLS. Web development. Disponível em: https://www.w3schools.com/. Acesso em: 19 mar. 2023.</h4>
        </div>
      </div>
    </div>
  );
}

export default App;

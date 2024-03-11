<html>
<body>
  
 <h1 align="center"> NTT ltd - Teste técnico!</h1>
  
  <p align="center">
 <a href="#-visão-geral-do-projeto-clipboard"> Visão Geral do Projeto</a> •
 <a href="#-pré-requisitos-computer">Pré Requisitos</a> •
 <a href="#-instruções-de-instalação">Instruções de Instalação</a> •
 <a href="#-guia-de-uso-book">Guia de Uso</a>
</p>
  
  ---
  
  <h2> Autor :necktie: </h2>
  <table align="center">
   <tr>
    <td align="center"><a href="https://www.linkedin.com/in/mike-barcelos-b4648016a/"><img style="border-radius: 50%;" src="https://github.com/GabrielSG20/API4Sem2021/blob/documentation/images/MikeBarcelos.jfif" width="200px;" alt=""/><br/><b>Mike Barcelos</b></a>
      <br/>
      Web Front-End Developer
     </td>
   </tr>
  </table>

 ---
  
  <h2 style="font-family:roboto;"> Visão Geral do Projeto :clipboard:</h2>
  
  <p align="justify" style="font-family:roboto;"> Este projeto é um teste técnico solicitado pela empresa NTT Brasil. A finalidade do teste é avaliar minhas habilidades como desenvolvedor front-end, especialmente em relação ao framework Angular. A aplicação web criada como parte deste teste consome uma API pública da Marvel para exibir informações sobre personagens do universo da Marvel.</p>
  <h3 style="font-family:roboto;"> Objetivos do Teste:</h3>
  <ul>
    <li style="font-family:roboto;">Demonstração de habilidades com Angular para desenvolvimento front-end.</li>
    <li style="font-family:roboto;">Consumo de uma API pública da Marvel para obter e exibir informações.</li>
    <li style="font-family:roboto;">Implementação de recursos como listagem de personagens, detalhes de personagens, entre outros.</li>
    <li style="font-family:roboto;">Prática de boas práticas de desenvolvimento de software, incluindo organização de código, uso eficiente de componentes, estilos e recursos do Angular.</li>
  </ul>
    <h3 style="font-family:roboto;"> Recursos do Projeto:</h3>
  <ul>
    <li style="font-family:roboto;">Listagem de personagens da Marvel.</li>
    <li style="font-family:roboto;">Detalhes de personagens, incluindo informações como nome, descrição, quantidade de comics presentes, etc.</li>
    <li style="font-family:roboto;">Pesquisa de personagens por nome.</li>
    <li style="font-family:roboto;">Integração com a API pública da Marvel para obter dados em tempo real.</li>
  </ul>
  <p align="justify" style="font-family:roboto;">Este projeto demonstra meu conhecimento e experiência em desenvolvimento front-end com Angular, bem como minha capacidade de aprender e implementar soluções utilizando APIs externas.</p>
  
  ---
  
  <h2 style="font-family:roboto;"> Pré Requisitos :computer:</h2>

  <p align="justify" style="font-family:roboto;"> Para que a aplicação funcione sem problemas, alguns requisitos precisão ser cumpridos:</p>
  
  <h3 style="font-family:roboto;"> Requisitos:</h3>
  <ul>
    <li style="font-family:roboto;">Node 14.21.3.</li>
    <li style="font-family:roboto;">Angular 13.3.11.</li>
    <li style="font-family:roboto;">Uma chave de desenvolvedor da api pública da [Marvel](https://www.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2Faccount).</li>
  </ul>
  
  ---
  
  <h2 style="font-family:roboto;"> Instruções de Instalação :dart:</h2>
     <p align="justify" style="font-family:roboto;">Com o projeto clonado em seu computador, utilize o comando "npm install" para que todas as depêndencias do projeto possam ser instaladas.</p>
     <p align="justify" style="font-family:roboto;">Com a instalação dos pacotes finalizada, é hora de configurar o environment para que a aplicação possa consumir os dados da API pública da Marvel. No arquivo "environment.ts" preencha a variável "marvelPrivateKey" com sua chave privada do cadastro na API listada nos requisitos.</p>
 <details>
  <summary>Configuração do arquivo de environment</summary>
  <br>
   <img style="border-radius: 50%;" src="https://github-production-user-asset-6210df.s3.amazonaws.com/46934773/311828405-f5a022d2-b46e-46a7-87bf-8fac02efed9c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240311%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240311T184120Z&X-Amz-Expires=300&X-Amz-Signature=199525c65055c9267ab13d9c7c708e19d7806970c2608c49f19645ee63422306&X-Amz-SignedHeaders=host&actor_id=46934773&key_id=0&repo_id=768838873" width="200px;" alt=""/>
  </details>
  <p align="justify" style="font-family:roboto;">Com a configuração do arquivo completa, e com os requisitos cumpridos, tudo que precisamos fazer é utilizar o comando "ng serve" e o projeto deve rodar sem problemas. Com o projeto rodando, só precisamos entrar no endereço [localhost](http://localhost:4200/). Caso tudo tenha sido configurado de forma correta, você tera uma tela parecida com a da imagem abaixo.</p>
   <details>
  <summary>Demonstração da aplicação</summary>
  <br>
   <img style="border-radius: 50%;" src="(https://github.com/MikeBBatista/marvelCharacterInfo/assets/46934773/2c3375f4-41e6-46fb-bb43-a82900ca184e)" alt=""/>
  </details>
  ---
   
  <h2 style="font-family:roboto;"> Guia de Uso :book:</h2>
  <h3 style="font-family:roboto;">Páginas Principais</h3>
  <h4 align="justify" style="font-family:roboto;>Página Inicial</h4>
  <p align="justify" style="font-family:roboto;">Na página inicial da aplicação, você encontrará uma lista de personagens da Marvel Comics. Você pode navegar por essa lista para descobrir informações sobre cada personagem.</p>
  <p align="justify" style="font-family:roboto;>Filtragem:</p>
  <ul>
    <li style="font-family:roboto;"><b>Search Bar:</b> Você pode filtrar os personagens digitando o nome na barra de pesquisa localizada no topo da página. A lista de personagens será atualizada quando você apertar "enter".</li>
    <li style="font-family:roboto;"><b>Select:</b> Além disso, você pode selecionar um herói na caixa de seleção localizada ao lado da barra de pesquisa. Isso permitirá que você filtre os personagens. Você pode adicionar vários heróis acumulativamente.</li>
  </ul>
  <details>
  <summary>Página inicial - sem filtros</summary>
  <br>
   <img style="border-radius: 50%;" src="https://github.com/MikeBBatista/marvelCharacterInfo/assets/46934773/85435bb1-d870-409b-9959-18b1761cc609" width="200px;" alt=""/>
  </details>
    <summary>Página inicial - com filtros</summary>
  <br>
   <img style="border-radius: 50%;" src="https://github.com/MikeBBatista/marvelCharacterInfo/assets/46934773/0a483c98-d3ec-44e5-8462-ffa57d8702ba" width="200px;" alt=""/>
  </details>
  <h4 align="justify" style="font-family:roboto;>Página de Informações do Personagem</h4>
  <p align="justify" style="font-family:roboto;">Ao clicar em um card de personagem na lista da página inicial, você será redirecionado para a página de informações do personagem. Aqui, você encontrará detalhes mais específicos sobre o personagem selecionado.</p>
  </details>
    <summary>Página de informações do personagem</summary>
  <br>
   <img style="border-radius: 50%;" src="https://github.com/MikeBBatista/marvelCharacterInfo/assets/46934773/9737e397-6be4-45f7-8c8a-ecf6f757189e" width="200px;" alt=""/>
  </details>
  <h4 align="justify" style="font-family:roboto;>Página Erro</h4>
  <p align="justify" style="font-family:roboto;">Caso você tente acessar uma página que não existe, será redirecionado para a página de erro 404. Esta página fornece uma mensagem indicando que a página solicitada não pôde ser encontrada.</p>
  </details>
    <summary>Página de erro - página não encontrada</summary>
  <br>
   <img style="border-radius: 50%;" src="https://github.com/MikeBBatista/marvelCharacterInfo/assets/46934773/7420e522-d13c-4977-b61a-cbd14a4f8d0a" width="200px;" alt=""/>
  </details>
  <h4 align="justify" style="font-family:roboto;>Aviso de Resultado Vazio</h4>
  <p align="justify" style="font-family:roboto;">Se a API da Marvel não retornar nenhum resultado para a sua pesquisa, você verá um aviso indicando que nenhum resultado foi encontrado. Nesse caso, você pode tentar uma nova pesquisa ou ajustar os filtros para obter resultados diferentes.</p>
  </details>
    <summary>Aviso de resultado vazio</summary>
  <br>
   <img style="border-radius: 50%;" src="https://github.com/MikeBBatista/marvelCharacterInfo/assets/46934773/09c36151-e185-4805-aa72-b3ec9190c5e4" width="200px;" alt=""/>
  </details>
  <h4 align="justify" style="font-family:roboto;>Conclusão</h4>
  <p align="justify" style="font-family:roboto;">Esperamos que este guia de uso seja útil para você explorar e aproveitar ao máximo a aplicação Marvel Characters. Se tiver alguma dúvida ou problema, não hesite em entrar em contato conosco.</p>
    
  ---

</body>
</html>

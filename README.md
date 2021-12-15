# Quiz App with  React-JS and TypeScript


<br />

Projeto que usa como dados de uma a API externa de Trivia para renderizar perguntas aos usuários por meio de uma aplicação com React-JS e TypeScript, enquanto controla todas as demais funcionalidades do jogo, como botão de inicialização do jogo, pontuação, próxima pergunta, entre outros:[^1]


<br />

Ademais, a aplicação é capaz de requisitar os dados da API passando parâmetros relacionados à experiência do jogo, como, por exemplo, número de questões, dificuldade e área de interesse (inclusive uma área de variedades).

<br />

[Open Trivia Database](https://opentdb.com/)

<br />

Dessa forma, é nos parâmetros da URL de requisição que é feita cada uma das opções para o retorno dos dados da API:

- amount
- difficulty
- type

<br />

```
`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
```


<br />

Finalmente, a aplicação utiliza uma função auxiliar utilitária para fazer o embaralhamento do array com as perguntas, para mudar randomicamente as posições de renderização das listas de perguntas.

<br />

R:

- [TypeScript React-JS Quiz App no Netlify](https://typescript-reactjs-quiz-app.netlify.app/)

<br />

Dependências:

- Styled-components


<br />


### Tela inicial do Quiz App:

![Imagem da Tela inicial do Quiz App](/public/images/typescript-reactjs-quiz-app-01.png)


<br />


### Imagem da tela do jogo renderizando o acerto do jogador junto com a contabilização de resposta certa:

![Imagem da tela com a contabilização de resposta certa](/public/images/typescript-reactjs-quiz-app-02.png)



<br />


### Imagem da tela do jogo renderizando o erro do jogador e qual seria a resposta correta:

![Imagem da tela do jogo renderizando o erro do jogador e qual seria a resposta correta](/public/images/typescript-reactjs-quiz-app-03.png)




<br />

<br />
<br />

[freecodecamp.org](https://www.freecodecamp.org/)

[^1]:freecodecamp.org 

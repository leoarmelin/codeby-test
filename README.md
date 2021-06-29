Projeto feito em React.js, utilizando create-react-app.

## Inicialização

Dentro da pasta raiz, instale os pacotes através do comando:

```bash
yarn install
```

Em dois terminais, paralelamente, rode os comandos:

```bash
yarn server
```

```bash
yarn start
```

O comando `yarn server` é utilizado para rodar um servidor local, possibilitando requisições à uma API local.

Por fim, abra [http://localhost:3000/](http://localhost:3000/) para visualizar o projeto.

## Tecnologias utilizadas

- **React.js:** escolhi por conta de ser a ferramenta que possuo mais familiaridade. Contudo, caso houvesse a opção de utilizar Next.js, escolheria, por conta da facilidade de trabalhar com SEO e SSR.
- **Styled components:** ao unir essa biblioteca com a tipagem do Typescript, podemos facilmente seguir o desenvolvimento voltado à componentes (CDD), facilitando a manutenção do website e a implementação de futuras features.
- **Json server:** facilita o uso de bancos de dados que ainda não estão em nuvem, apesar das limitações.
- **Axios:** escolhi por achar seu uso simples, além de ter familiaridade com trabalhos passados.
- **Eslint/prettier:** mantém o padrão de código e boas práticas no mesmo. Além disso, reforça a necessidade da tipagem presente no Typescript.

## Observações

- Para navegar entre os casos de "acima de 10 reais" e "abaixo de 10 reais", basta clicar no botão de finalizar a compra.

- A fim de simular o tempo de resposta em requisições para o servidor local, foi colocado um delay de 750ms na inicialização do `json server`, sendo ele:

```bash
"server": "json-server server.json -w -d 750 -p 3333"
```

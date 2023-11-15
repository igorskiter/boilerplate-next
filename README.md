# Boilerplate Next

Este boilerplate é um ponto de partida para projetos que utilizam Next.js. Ele contém uma estrutura básica para desenvolvimento, testes e produção, assim como configurações de estilo, internacionalização, otimização de performance e monitoramento de erros.

- [Boilerplate Next](#boilerplate-next)
  - [Requisites](#requisites)
  - [Env vars](#env-vars)
  - [Scripts disponíveis](#scripts-disponíveis)
    - [`yarn dev`](#yarn-dev)
    - [`yarn build`](#yarn-build)
    - [`yarn start`](#yarn-start)
    - [`yarn format`](#yarn-format)
    - [`yarn eslint:init`](#yarn-eslintinit)
    - [`yarn eslint:fix`](#yarn-eslintfix)
    - [`yarn lint-staged`](#yarn-lint-staged)
    - [`yarn test:watch`](#yarn-testwatch)
    - [`yarn test`](#yarn-test)
    - [`yarn cypress`](#yarn-cypress)
    - [`yarn cypress:headless`](#yarn-cypressheadless)
    - [`yarn e2e`](#yarn-e2e)
    - [`yarn e2e:headless`](#yarn-e2eheadless)
  - [Dependências](#dependências)
  - [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)
  - [app](#app)
  - [Starting the server](#starting-the-server)
    - [Start local](#start-local)
  - [Examples](#examples)
  - [Refs](#refs)

## Requisites

- [Next](https://next.org)

## Env vars

| Name| Description | Get From | Where to store/setup | Default
| --- | ---         | ---      | ---                  | ---
|     |             |          |                      |

## Scripts disponíveis

No diretório do projeto, você pode executar:

### `yarn dev`

Executa o aplicativo em modo de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `yarn build`

Compila o aplicativo para produção na pasta `.next`.

### `yarn start`

Inicia um servidor de produção com o aplicativo compilado.

### `yarn format`

Formata o código fonte com Prettier.

### `yarn eslint:init`

Inicia a configuração do Eslint em seu projeto.

### `yarn eslint:fix`

Roda o Eslint em todo o projeto para corrigir erros.

### `yarn lint-staged`

Configura o `lint-staged` para rodar na pre-commit do git.

### `yarn test:watch`

Executa testes em modo watch.

### `yarn test`

Executa todos os testes.

### `yarn cypress`

Abre a interface gráfica do Cypress.

### `yarn cypress:headless`

Executa testes do Cypress em modo headless.

### `yarn e2e`

Executa os testes end-to-end em um servidor local.

### `yarn e2e:headless`

Executa os testes end-to-end em modo headless.

## Dependências

- Next.js - Framework de renderização de páginas em React;
- React - Biblioteca JavaScript para construir interfaces de usuário;
- Framer Motion - Biblioteca de animações;
- Moment - Biblioteca para manipulação de datas e horas;
- UUID - Biblioteca para geração de identificadores únicos;
- Next-i18next - Biblioteca para internacionalização;
- Next-pwa - Biblioteca para criação de Progressive Web Apps;
- Sentry - Plataforma de monitoramento de erros em tempo real;

## Dependências de Desenvolvimento

- Test
  - Jest - Framework de testes;
  - Cypress - Ferramenta de testes end-to-end;
- Lint
  - Eslint - Ferramenta de análise de código;
  - Prettier - Formatador de código;
  - Husky - Biblioteca para automatizar hooks do git;
  - Lint-staged - Biblioteca para rodar linters em arquivos modificados no commit;
- Package
  - TypeScript - Superset do JavaScript;
  - Webpack - Bundler de módulos;

## app

1. Create `icons/*` to pwa
2. Duplicate: `cp .env.example .env`
> See [.env.example](/.env.example).
2. Edit: `vim .env`
> without the environment variables the form, login and dashboard pages do not work
3. `yarn install`
## Starting the server
### Start local
```shell
yarn dev
```

## Examples

## Refs

- [Vercel deploy](https://vercel.com/docs/concepts/deployments/overview)
- [Static Site Generation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)
- [Server-Side Rendering](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)


# JUPY - Aplicativo de Sistema de RH
[Escopo](https://github.com/projetoIntegrador-aplicacaoRH/backend/raw/refs/heads/main/documentacao/Escopo%20do%20Projeto%20-%20TASK3.docx)  |
[Camada Controller](https://raw.githubusercontent.com/projetoIntegrador-aplicacaoRH/backend/refs/heads/main/documentacao/diagramaCamadaController.png)  |
[Camada Repository](https://raw.githubusercontent.com/projetoIntegrador-aplicacaoRH/backend/refs/heads/main/documentacao/diagramaCamadaRepository.png)  |
[JSON](https://github.com/projetoIntegrador-aplicacaoRH/backend/blob/main/documentacao/requisisoesJSON)
[Endpoints](https://github.com/projetoIntegrador-aplicacaoRH/backend/blob/main/documentacao/Api%20RH.pdf)<br><br>
Projeto desenvolvido com Spring Boot, com CRUD completo, Segurança com JWT e Deploy, que permite o gerenciamento de informações de funcionários de uma empresa pela equipe de RH.

## Autores

- [Caique Gomes](https://www.linkedin.com/in/cttcaiquegomes/)

- [Daniel Lima](https://www.linkedin.com/in/danieldossantoslima)

- [Daniella Santana](https://www.linkedin.com/in/adaniellasantana/)

- [Rodrigo Oliveira](https://www.linkedin.com/in/rodrigo-oliveira-de-santana-23a330262/)
  
- [Sabrina Lima](https://www.linkedin.com/in/sabrina-santoslima/)

## Tecnologias Utilizadas

● Spring Web
● MySQL Driver
● Spring Data JPA
● Spring Boot DevTools
● Validation

## Ferramenta de Gestão de Projetos

● Trello

<img src="https://brazil.generation.org/wp-content/uploads/2024/10/Generation_BRAZIL_logo_NEW-BLUE.png" alt="Logo" width="200">



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

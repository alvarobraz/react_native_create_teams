

<p align="center">
  <a href="https://react.dev/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png" width="200" alt="React Logo" /></a>
</p>
<p align="center">
  Aplicação em React Native/TypeScript - Cadastro de grupos de times 🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/alvarobraz/react_native_create_teams"/>

  <a href="https://nestjs.com/">
    <img alt="Made by NodeJS" src="https://img.shields.io/badge/made%20by-nodejs-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/alvarobraz/react_native_create_teams/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alvarobraz/react_native_create_teams">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/alvarobraz/react_native_create_teams">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre ##

Projeto básico em React Native de cadastro de Grupos, times e seus participantes, projeto sallvo no storage da aplicação!

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [React Natvive](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [react-navigation](https://reactnavigation.org/)
- [react-native-async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)
- [phosphor-react-native](https://www.npmjs.com/package/phosphor-react-native)


## Estrutura ##
```
.
├── app.json
├── App.tsx
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── babel.config.js
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── assets
│   │   ├── logo@2x.png
│   │   ├── logo@3x.png
│   │   └── logo.png
│   ├── components
│   │   ├── Button
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── ButtonIcon
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Filter
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── GroupCard
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Highlight
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Input
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── ListEmpty
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── Loading
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── PlayerCard
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── routes
│   │   ├── app.routes.tsx
│   │   └── index.tsx
│   ├── screens
│   │   ├── Groups
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── NewGroup
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Players
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── storage
│   │   ├── group
│   │   │   ├── groupCreate.ts
│   │   │   ├── groupRemoveByName.ts
│   │   │   └── groupsGetAll.ts
│   │   ├── player
│   │   │   ├── playerAddByGroup.ts
│   │   │   ├── playerRemoveByGroup.ts
│   │   │   ├── playersGetByGroupAndTeam.ts
│   │   │   ├── playersGetByGroup.ts
│   │   │   └── PlayerStorageDTO.ts
│   │   └── storageConfig.ts
│   ├── theme
│   │   └── index.ts
│   ├── @types
│   │   ├── navigation.d.ts
│   │   ├── png.d.ts
│   │   └── styled.d.ts
│   └── utils
│       └── AppError.ts
├── tsconfig.json
└── yarn.lock



```

## :white_check_mark: Requerimentos ##

- [React Native](https://reactnative.dev/)
- [npx](https://www.npmjs.com/package/npx)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/alvarobraz/react_native_create_teams

# Access
$ cd react_native_create_teams

# Install dependencies
$ npx expo install

# Run the project
$ npx expo start

# The server will initialize in the <http://localhost:3333>
```

React Native is [MIT licensed](LICENSE).

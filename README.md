# Calculadora de Combustivel

Aplicativo mobile feito em React Native (Expo) que ajuda a decidir se compensa abastecer com etanol ou gasolina, com base no preço dos dois combustíveis informado pelo usuário.

## Como funciona

- O usuário informa o preço do etanol e o preço da gasolina.
- O app calcula a razão entre os dois valores (etanol dividido pela gasolina, em porcentagem).
- Se essa razão for maior que 70%, recomenda abastecer com gasolina; caso contrário, recomenda etanol (regra prática usada no Brasil para comparar o custo-benefício entre os dois combustíveis).
- O resultado é exibido junto com a recomendação. Um botão "limpar" reseta os campos.

## Tecnologias

- React Native
- Expo
- React

## Como rodar o projeto

Este projeto foi criado originalmente pelo [Expo Snack](https://snack.expo.dev/), o editor online do Expo. Existem várias formas de rodá-lo:

### Opção 1: Direto no navegador (Expo Snack)

Não precisa instalar nada. Acesse [snack.expo.dev](https://snack.expo.dev/), crie um novo Snack e cole o conteúdo do `App.js` (lembrando de subir também a imagem usada em `assets/images.jpg`). O preview roda direto no navegador, ou escaneie o QR code com o app Expo Go no celular.

### Opção 2: Localmente com Node.js instalado

Pré-requisitos: Node.js instalado e o app Expo Go no celular (ou um emulador Android/iOS configurado).

```bash
npm install
npm start
```

Isso abre o Metro Bundler no terminal com um QR code. Escaneie o QR code com o app Expo Go (Android) ou a câmera do iPhone (iOS) para rodar o projeto no celular.

### Opção 3: Direto em emulador ou navegador

```bash
npm run android
npm run ios
npm run web
```

### Opção 4: Sem instalar dependências globais (npx)

```bash
npx expo start
```

Funciona mesmo sem o Expo CLI instalado globalmente na máquina.

## Estrutura do projeto

```
.
├── App.js                  # Componente principal com a lógica do cálculo
├── index.js                # Ponto de entrada, registra o componente raiz
├── components/
│   └── AssetExample.js     # Componente de exemplo (não utilizado no fluxo principal)
├── assets/                 # Ícones e imagens do app
├── app.json                # Configurações do Expo (nome, ícones, splash screen)
└── package.json            # Dependências e scripts do projeto
```

## Autor

Desenvolvido por [cayosumo](https://github.com/cayosumo).
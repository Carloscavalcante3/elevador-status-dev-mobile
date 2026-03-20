# Elevador Status

Aplicação mobile desenvolvida com React Native (Expo) que simula um painel de status de atualização, com interface minimalista e comportamento dinâmico.

## Funcionalidades

- Lista de notificações com rolagem utilizando `ScrollView`
- Alternância entre tema claro e escuro com `Switch`
- Gerenciamento de estado com `useState`
- Atualização em tempo real da interface (simulação de OTA via Expo)

## Tecnologias

- React Native
- Expo
- JavaScript (ES6+)

## Execução

O projeto pode ser executado diretamente no navegador ou em dispositivo móvel através do Expo:

- Acesse o link do projeto: https://snack.expo.dev/@ccso/app-dev-mobile-ccso
- Ou abra no aplicativo Expo Go via QR Code

## Ajustes

Foi realizada correção de contraste no modo escuro para garantir melhor legibilidade dos elementos da interface.

## Objetivo

Demonstrar a construção de uma interface mobile simples com controle de estado e atualização dinâmica sem necessidade de rebuild da aplicação.

## Bug Fix
Foi identificado um problema de consistência visual no componente de alternância de tema (Switch), que não se adaptava corretamente ao modo escuro. A correção foi realizada ajustando as propriedades de cor do componente, garantindo melhor integração com o tema da aplicação e maior legibilidade.

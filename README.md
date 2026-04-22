# BaeShop

## Descrição

BaeShop é um aplicativo de lista de compras desenvolvido em React Native. O app permite ao usuário criar e gerenciar uma lista de itens a serem comprados, como "3 pacotes de arroz", "2 quilos de carne" ou "4 quilos de frango".

O usuário pode adicionar, visualizar, remover itens e acompanhar o status de cada um (pendente ou comprado). A aplicação também conta com persistência local utilizando SQLite, garantindo que os dados não sejam perdidos ao fechar o app.

---

## Tecnologias Utilizadas

- React Native  
- Expo Router  
- Expo Go  
- TypeScript  
- JavaScript  
- Expo SQLite  
- FlatList (renderização otimizada)  
- Lucide React (ícones)  

---

## Funcionalidades

- Adicionar itens à lista de compras  
- Visualizar itens cadastrados  
- Remover itens da lista  
- Limpar toda a lista (`clear`)  
- Marcar itens como pendentes ou comprados  
- Filtrar itens por status (pendentes e comprados)  
- Persistência de dados com SQLite  
- Renderização otimizada com FlatList  

---

## Instalação

1. ## Clone o repositório:
```bash
git clone https://github.com/pauloqueirozz01/baeshopp.git
```
2. ## Navegue até a pasta do projeto:
```bash
cd baeshopp
```
3. ## Instale as dependências:
```bash
npm install
```
4. ## Rode o app:
```bash
npx expo start
```

5. ## Como Usar

Ao abrir o app, você verá uma lista vazia.
Adicione itens como "3 pacotes de arroz" ou "2 quilos de carne".
Os itens começam como pendentes.
Você pode marcar itens como comprados.
É possível remover itens individualmente ou limpar toda a lista.
Utilize os filtros para visualizar apenas itens pendentes ou comprados.

## Escolhas Técnicas***
***FlatList***

O FlatList foi utilizado para garantir melhor desempenho na renderização da lista. Ele renderiza apenas os itens visíveis na tela, reduzindo o consumo de memória e melhorando a performance em dispositivos móveis.

***SQLite (Expo SQLite)***

Foi utilizado SQLite para persistência local dos dados. Isso garante que a lista de compras permaneça salva mesmo após o fechamento do aplicativo.

***Componentização***

A interface foi dividida em componentes reutilizáveis, facilitando a manutenção e organização do código.

## Implementações Futuras
Edição de itens existentes
Separação entre quantidade e descrição
Sistema de categorias (carnes, grãos, bebidas, etc.)
Busca por itens
Marcação múltipla de itens
Sincronização em nuvem
Autenticação de usuário

## Contribuições
Sinta-se à vontade para abrir issues ou pull requests
Utilize commits no padrão convencional para manter o histórico organizado

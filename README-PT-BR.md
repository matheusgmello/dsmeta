# DSMeta📈
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/matheusgmello/dsmeta/blob/main/LICENSE) 

# Sobre o projeto

DSMeta é uma aplicação full stack web construída durante a 12ª edição da SDS evento organizado pela [DevSuperior](https://devsuperior.com.br/sds-inscricao-org).

A aplicação consiste em uma listagem de vendas, onde é possível consultar e pesquisar dentro de uma tabela com dados de vendedores para analisar suas metas alcançadas e também enviar um SMS com dados do vendedor, anunciando que ele foi o destaque em vendas, dentro de um determinado período filtrado por datas.

## Layout web
![Web](https://github.com/matheusgmello/dsmeta/blob/52c65e36e38d6cef3bcff8a7bf54be6c62b88366/assets/DSMeta.png)

## Resposta do SMS
![SMS RESPOSTA](https://github.com/matheusgmello/dsmeta/blob/52c65e36e38d6cef3bcff8a7bf54be6c62b88366/assets/SMS.jpeg)

# Tecnologias utilizadas

## Back end
- Java
- Spring Boot
- Twilio SMS

## Front end
- TypeScript
- React
  
# Como executar o projeto

## Back end (Api)
Pré-requisitos: Java 17
```bash
# clonar repositório
git clone https://github.com/matheusgmello/dsmeta

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end (Web)
Pré-requisitos: yarn

```bash
# clonar repositório
git clone https://github.com/matheusgmello/dsmeta

# entrar na pasta do projeto front end web
cd frontend

# instalar dependências
yarn install

# executar o projeto
yarn dev
```

# Autor
[Matheus Gabriel Fleck de Mello](https://www.linkedin.com/in/matheus-gabriel-fleck-de-mello/)

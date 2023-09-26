# DSMeta📈
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/matheusgmello/dsmeta/blob/main/LICENSE) 

## Readme em [PT-BR](https://github.com/matheusgmello/dsmeta/blob/main/README-PT-BR.md) 📜

# About the project

DSMeta is a full-stack web application built during the 12th edition of SDS, an event organized by [DevSuperior](https://devsuperior.com.br/sds-inscricao-org).

The application consists of a sales listing, where it is possible to query and search within a table with salesperson data to analyze their achieved goals. It also allows for sending an SMS with the salesperson's information, announcing that they were the sales highlight within a specific date-filtered period.

## Web Layout
![Web 1](https://github.com/matheusgmello/dsmeta/blob/52c65e36e38d6cef3bcff8a7bf54be6c62b88366/assets/DSMeta.png)

## SMS Response
![SMS RESPOSTA](https://github.com/matheusgmello/dsmeta/blob/52c65e36e38d6cef3bcff8a7bf54be6c62b88366/assets/SMS.jpeg)

# Technologies

## Back end
- Java
- Spring Boot
- Twilio sms

## Front end
- TypeScript
- React
  
# How to run the project

## Back end (Api)
Prerequisites: Java 17
```bash
# To clone the repository
git clone https://github.com/matheusgmello/dsmeta

# To enter the backend folder
cd backend

# run the project
./mvnw spring-boot:run
```

## Front end (Web)
Prerequisites: Node and Yarn

```bash
# To clone the repository
git clone https://github.com/matheusgmello/dsmeta

# To enter the Front end folder
cd frontend

# To install dependencies
yarn install

# run the project
yarn dev
```

# Author
[Matheus Gabriel Fleck de Mello](https://www.linkedin.com/in/matheus-gabriel-fleck-de-mello/)

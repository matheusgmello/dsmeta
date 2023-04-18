# DSmeta - Sales System

This is a sales system project, developed in Java with Spring Boot and MySQL database. The system also uses the Twilio API for sending SMS.

## Features

- Registration, consultation, updating, and exclusion of products.
- Registration, consultation, updating, and exclusion of clients.
- Registration, consultation, updating, and exclusion of sales.
- Possibility to filter products by name and code.
- Possibility to filter clients by name, CPF, and telephone.
- Possibility to filter sales by the date of realization.

In addition, the system also has the functionality of sending SMS to clients when a new sale is made. To do this, it is necessary to configure the Twilio account in the `application.properties` file.

## Technologies Used

- Java 11
- Spring Boot
- Spring Data JPA
- MySQL
- Thymeleaf
- Bootstrap
- Twilio API
- TypeScript
- React

## How to Run the Project

1. Clone the repository: `git clone https://github.com/matheusgmello/dsmeta.git`
2. Configure the MySQL database with the information contained in the `application.properties` file.
3. Configure the Twilio account in the `application.properties` file.
4. Run the project through your preferred IDE or with the command `mvn spring-boot:run`.
5. Access the application through the URL `http://localhost:8080`.

## How to Use the Application

1. Access the application through the URL `http://localhost:8080`.
2. Click on the desired option (Products, Clients or Sales).
3. To register a new item, click on the "New" button and fill in the necessary data.
4. To edit or delete an existing item, click on the corresponding icon in the item table.
5. To make a new sale, click on the "New Sale" button and select the desired client and products.
6. When the sale is completed, an SMS will be sent to the registered client with the details of the sale.

## Acknowledgments
   Project created based on the DevSuperior SDS week of the professor Nélio Alves.

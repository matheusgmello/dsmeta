# DSmeta - Sistema de Vendas

Este é um projeto de sistema de vendas, desenvolvido em Java com Spring Boot e banco de dados MySQL. O sistema também utiliza a API do Twilio para envio de SMS.

## Funcionalidades

- Cadastro, consulta, atualização e exclusão de produtos.
- Cadastro, consulta, atualização e exclusão de clientes.
- Cadastro, consulta, atualização e exclusão de vendas.
- Possibilidade de filtrar produtos por nome e código.
- Possibilidade de filtrar clientes por nome, CPF e telefone.
- Possibilidade de filtrar vendas por data de realização.

Além disso, o sistema também possui a funcionalidade de envio de SMS para clientes quando uma nova venda é realizada. Para isso, é necessário configurar a conta do Twilio no arquivo `application.properties`.

## Tecnologias utilizadas

- Java 11
- Spring Boot
- Spring Data JPA
- MySQL
- Thymeleaf
- Bootstrap
- Twilio API
- TypeScript
- React

## Como executar o projeto

1. Clonar o repositório: `git clone https://github.com/matheusgmello/dsmeta.git`
2. Configurar o banco de dados MySQL com as informações contidas no arquivo `application.properties`
3. Configurar a conta do Twilio no arquivo `application.properties`
4. Executar o projeto através do IDE de sua preferência ou através do comando `mvn spring-boot:run`
5. Acessar a aplicação através da URL `http://localhost:8080`

## Como usar a aplicação

1. Acesse a aplicação através da URL `http://localhost:8080`
2. Clique na opção desejada (Produtos, Clientes ou Vendas)
3. Para cadastrar um novo item, clique no botão "Novo" e preencha os dados necessários.
4. Para editar ou excluir um item existente, clique no ícone correspondente na tabela de itens.
5. Para realizar uma nova venda, clique no botão "Nova Venda" e selecione o cliente e os produtos desejados.
6. Ao finalizar a venda, será enviado um SMS para o cliente cadastrado com os detalhes da venda.

## Agradecimentos
   Projeto criado em base na semana SDS do DevSuperior do professor nelio alves

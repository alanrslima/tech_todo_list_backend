# @TECH Todo List • Back-end

## Preparação de Ambiente

As seguintes ferramentas precisam estar instaladas em sua máquina para um correto funcionamento do servidor.

- [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#mac-stable)
- [NodeJS](https://nodejs.org/en/download/)

## Passo a passo

Clone o repositório na sua máquina:

```
$ git clone https://github.com/alanrslima/tech_todo_list_backend
```

Entre no repositório

```
$ cd tech_todo_list_backend
```

Execute o comando para iniciar a aplicação com um banco de dados limpo

```
$ make create
```

- Se tudo ocorrer como o esperado, o servidor estará disponível em **http://localhost:/3333**

---

Caso volte a rodar o servidor novamente e o banco de dados de esteja criado, basta executar:

```
$ make init
```

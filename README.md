# DESAFIO 1 - IMERSÃO FULCYCLE

Este projeto é uma API backend construída com NestJS e Prisma, projetada para interagir com um banco de dados MongoDB. Ele fornece endpoints RESTful para gerenciar `Assets` e `Orders`.

## Funcionalidades

- **Versionamento de API:** Todas as rotas são prefixadas com `api/v1`.
- **Prisma ORM:** Interação simplificada com o banco de dados MongoDB.
- **Arquitetura Modular:** Separação limpa de responsabilidades com módulos do NestJS.

## Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados:

- **Node.js**: v18 ou superior
- **Docker**: Para executar o MongoDB

## Começando

### 1. Clone o Repositório
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Configure o Ambiente

Crie um arquivo `.env` no diretório raiz com o seguinte conteúdo:

```env
DATABASE_URL=mongodb://mongo:27017/nest
```

### 4. Inicie o MongoDB com Docker

Use o arquivo `docker-compose.yml` fornecido para executar o MongoDB:

```bash
docker-compose up -d
```

### 5. Gere o Cliente Prisma

Execute o seguinte comando para gerar o cliente Prisma:

```bash
npx prisma generate
```

### 6. Inicie o Servidor

Execute a aplicação:

```bash
npm run start
```

A API estará disponível em `http://localhost:3000/api/v1`.

## Endpoints

### Assets

#### Criar Asset
- **POST** `/api/v1/assets`

**Corpo da Requisição:**
```json
{
  "symbol": "AAPL"
}
```

#### Listar Todos os Assets
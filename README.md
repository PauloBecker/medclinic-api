# MedClinic API 🏥

API desenvolvida em **NestJS** para gerenciamento de usuários e autenticação com **JWT** e controle de acesso baseado em papéis (**RBAC**).

## 🚀 Funcionalidades
- Registro de usuários com senha criptografada (bcrypt).
- Autenticação via JWT.
- Controle de acesso por papéis (`attendant` e `admin`).
- Endpoints protegidos com `RolesGuard`.
- Configuração de banco de dados com **TypeORM** e PostgreSQL.

## 📦 Tecnologias
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

## ⚙️ Instalação

Clone o repositório:
```bash
git clone https://github.com/seuusuario/medclinic-api.git
cd medclinic-api
```
Instale as dependências:
```bash
npm install
```
## 🔧 Configuração

Crie um arquivo .env na raiz do projeto com as variáveis de ambiente:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=medclinic
JWT_SECRET=seusegredoaqui
```
## ▶️ Executando

```bash
npm run start:dev
```
A API estará disponível em:
```
http://localhost:3000
```
## 📌 Endpoints principais

Autenticação

Autenticação
POST /auth/register → Cria um novo usuário

POST /auth/login → Faz login e retorna JWT

Usuários
GET /users/me → Retorna dados do usuário autenticado

GET /users/admin/ping → Endpoint restrito a usuários com papel admin
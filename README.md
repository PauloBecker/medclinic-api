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
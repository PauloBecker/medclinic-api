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

## 🧪 Testes

Para rodar os testes:

```bash
npm run test
```
## 👨‍💻 Contribuição

1. Crie uma branch para sua feature:

```bash
git checkout -b feat/minha-feature
```
2. Commit suas alterações:

```bash
git commit -m "feat: adiciona minha feature"
```
3. Faça push:
```bash
git push origin feat/minha-feature
```
4. Abra um Pull Request.

## 👥 Autores
- Paulo Becker — Desenvolvedor principal
- Equipe SCTEC Módulo 2

## 📬 Contato
Se tiver dúvidas ou sugestões, entre em contato:
- Email: [beckerpaulo81@gmail.com]
- LinkedIn: [[LinkedIn ](https://www.linkedin.com/in/paulo-becker-89550177/)]
- GitHub: [[GitHub](https://github.com/PauloBecker)]

## 🔮 Próximos Passos
- Implementar testes automatizados (unitários e e2e).
- Criar documentação com Swagger para facilitar o consumo da API.
- Adicionar endpoints de gestão de pacientes e atendimentos.
- Melhorar segurança: permitir apenas admins criarem novos usuários com papel `admin`.

## 📄 Licença

Este projeto está sob a licença MIT — veja o arquivo [LICENSE](LICENSE) para mais detalhes.


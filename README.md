# Steins;Gate Wiki API

Uma API RESTful em NestJS para um wiki sobre o anime _Steins;Gate_.  
Usa **Sequelize** (via `sequelize-typescript`) como ORM e oferece CRUD completo para as entidades do domínio.

---

## 🚀 Funcionalidades

- CRUD completo via endpoints REST  
- Autoconfiguração de conexão a PostgreSQL por _connection string_ (`DB_URL`) ou variáveis separadas (`DB_HOST`, etc.)  
- Modelagem de relacionamentos N:N (pivot tables)  
- Controle de código: ESLint + Prettier + EditorConfig + `.gitattributes`  
- Estrutura modular NestJS

---

## 🛠️ Pré-requisitos

- Node.js v16+  
- npm ou Yarn  
- Docker (opcional, para PostgreSQL)    

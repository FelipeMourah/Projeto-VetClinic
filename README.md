# Projeto-VetClinic 🐶🐱🏥
***
## Node version
```
Node.js v20.12.2
```
## Npm version
```
10.5.0
```
## libs
```
  "body-parser": "^1.20.2",
    "dotenv": "^16.4.5",
    "nodemon": "^3.1.0"
    "express-handlebars": "^7.1.2",
    "sequelize": "^6.37.3",
    "sqlite3": "^5.1.7"

```
## Frameworks
```
"express": "^4.19.2",
```
***
## Passo a Passo
### 1. Clone o repositório
```git clone
git clone https://github.com/FelipeMourah/Projeto-VetClinic 
```
### 2. Instale as Dependências

Antes de executar o projeto, certifique-se de ter todas as dependências instaladas. Você pode instalar todas as dependências executando o seguinte comando no terminal, na raiz do projeto:
   ```bash
   npm install
```
Além disso, para o desenvolvimento, é recomendável instalar nodemon:
```bash
npm install --save-dev nodemon
```
3. Crie um arquivo `.env` na raiz do projeto e configure as variaveis do ambiente
  ```env
PORT = 3000
```
4. inicie o servidor
   ```bash
   npm run dev
   ```
   ou
   ```bash
   node app.js
   ```
   ---
   # 📝REQUEST
   - ## Tutores
     ***
     `POST`
     Adicionar Tutor
     ```
     localhost:3000/clinic/tutor
     ```
     `GET`
     Todos os tutores
     ``` 
     localhost:3000/clinic/tutors
     ```
     ID do Tutor
     ```
     localhost:3000/clinic/tutor/:id
     ```

     ```PUT```
     Alterar tutor
     ``` 
     localhost:3000/clinic/update/:id
     ```

     ```DELETE```
     Deletar tutor
     ``` 
     localhost:3000/clinic/delete/:id
     ```
     ---
     - ## Pets
       ***
       `POST`
       Criar pet ao tutor
     ```
     localhost:3000/clinic/pet/:tutorId
     ```
     ***
     ```PUT```
     Alterar pet do tutor
     ``` 
     localhost:3000/clinic/pet/:petId/tutor/:tutorId
     ```
     ***
     ```DELETE```
     Deletar pet do tutor
     ```
     localhost:3000/clinic//pet/:petId/tutor/:tutorId
     ```
    ***
    END.
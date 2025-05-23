# Capitulo

**Capítulo** é uma plataforma web que visa promover o autoconhecimento e o desenvolvimento pessoal por meio da leitura da Bíblia Sagrada, mesmo fora de um contexto estritamente religioso. O projeto adota uma abordagem moderna, acessível e baseada em dados para estimular hábitos de leitura e reflexão pessoal.  
<br>

## 🎯 Objetivo

Criar uma aplicação web com cadastro e login de usuários, oferecendo acesso a trechos bíblicos e ferramentas de autoavaliação que:

- Incentivem a leitura da Bíblia como um recurso de autoconhecimento.
- Quebrem barreiras associadas ao preconceito religioso.
- Monitorem e analisem o engajamento dos usuários por meio de quizzes e métricas.  
<br>

## 🧠 Justificativa

A Bíblia é uma fonte rica de ensinamentos com aplicações na vida pessoal, profissional e emocional. No entanto, muitas pessoas deixam de explorá-la por associarem-na exclusivamente à religiosidade tradicional. O **Capítulo** busca romper esse paradigma e apresentar a Bíblia como um livro útil para o crescimento humano, com uma interface moderna, gamificada e acessível.  
<br>

## 📦 Escopo do Projeto

### Plataforma Web
<br>

<br>

### Página de Cadastro
  <br>
  <img src="./prints/cadastro.png"> 
<br>

### Página de Login
<br>
 <img src="./prints/login.png"> 
<br>

### Integração com API e Banco de Dados
  
### Quiz de Produtividade de Leitura
  
  - Medição da frequência, motivação e engajamento  
  - Armazenamento de respostas para geração de KPIs
    
### Dashboard Administrativo
  - Indicadores sobre:  
    - Frequência de leitura  
    - Resultados dos quizzes  
    - Versículos mais acessados
      
### Seção de Versículos  
  - Destaques como "lições de vida" ou "insights de sabedoria"  
  - Métricas de visualização por versículo  
<br>

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js  
- **Banco de Dados**: MySQL Server  
- **APIs**: Integração para dados bíblicos e métricas  
<br>

## 🧑‍💻 Linguagens Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)  
<br>

## 🧪 Como Rodar Localmente

Siga os passos abaixo para executar o projeto em ambiente de desenvolvimento:

### 1. Clone o repositório

```bash
git clone https://github.com/henriquedouradoo/capitulo.git
```

### 2. Entrar no diretório
```bash
cd capitulo
```

### 3. Instalar Depedências
```bash
npm install
```

### 4. Configurar o .ENV
```
AMBIENTE_PROCESSO=desenvolvimento

# Configurações de conexão com o banco de dados
DB_HOST=localhost
DB_DATABASE='DATABASE'
DB_USER='USER'
DB_PASSWORD='PASSWORD'
DB_PORT=3306

# Configurações do servidor de aplicação
APP_PORT=3333
APP_HOST=localhost

MINHA_CHAVE='CHAVE'
```

### 4. Iniciando projeto
```bash
npm start
```

### 5. Acesse a URL
```bash
http://localhost:3333
```




# Desafio Técnico Plathanus – Plataforma de Propriedades Imobiliárias

## 📌 Descrição do Projeto

Este projeto foi desenvolvido como parte de um **desafio técnico** proposto pela empresa **Plathanus Software & Design**.  
O objetivo é criar uma aplicação web para gerenciamento de propriedades imobiliárias, com foco em:

- Experiência do usuário (UI/UX moderna)
- Funcionalidades de backend robustas
- Boas práticas de desenvolvimento

A aplicação permite cadastrar propriedades, gerenciar múltiplas fotos, definir automaticamente a foto de capa e exibir um carrossel de imagens interativo.

---

## 🛠 Tecnologias Utilizadas

- **Backend**: Ruby on Rails 8.0.2  
- **Frontend**: Tailwind CSS, Stimulus.js  
- **Banco de Dados**: PostgreSQL  
- **Armazenamento de Arquivos**: ActiveStorage (armazenamento local)  
- **Controle de Versão**: Git e GitHub  

---

## ✅ Funcionalidades Implementadas

1. **Cadastro de Propriedades**  
   Cada propriedade possui:
   - Nome obrigatório  
   - Diversas fotos associadas  

2. **Carrossel de Imagens**  
   - Transições suaves entre as imagens  
   - Indicadores de posição (bolinhas)  
   - Botões de navegação  

3. **Foto de Capa**  
   - A terceira foto cadastrada é automaticamente definida como a capa da propriedade  
   - Caso existam menos de três fotos, a primeira é usada como fallback  

4. **Armazenamento Local de Imagens**  
   - Todas as fotos são salvas localmente via ActiveStorage
---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

- Ruby 3.3.5  
- Rails 8.0.2.1  
- PostgreSQL  
- Node.js e Yarn (para assets)  

### Passos

1. Clonar o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd properties_app
bundle install
yarn install
rails db:create
rails db:migrate
rails server
http://localhost:3000
```

## 📂 Estrutura do Projeto

- app/models – Models Property e Photo com validações e relações

- app/views – Views responsivas com Tailwind CSS e partials reutilizáveis

- app/javascript/controllers – Stimulus controllers para interatividade do carrossel

- storage/ – Armazenamento local das fotos via ActiveStorage

<img width="1371" height="745" alt="Captura de Tela 2025-09-20 às 20 00 48" src="https://github.com/user-attachments/assets/498a1aa7-35a7-4ff3-9c03-6f64382ce0bc" />

  

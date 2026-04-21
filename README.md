# MapaUTF

## Sobre o projeto
O **MapaUTF** é um projeto de aplicativo em desenvolvimento para a disciplina de Desenvolvimento de Projetos para Dispositivos Móveis (DPDM). Seu objetivo principal é conectar a grade de aulas do estudante com o mapa da universidade, ajudando o aluno a saber exatamente onde e quando suas aulas vão acontecer. A proposta é que o aplicativo permita que o aluno cadastre sua grade de aulas e visualize no mapa o bloco exato para onde deve se dirigir, além de fornecer dicas de acesso e informações úteis (como cardápio do RU e acesso à Biblioteca).

**Checklist de Funcionalidades (Escopo do Semestre):**
- [x] Configuração do ambiente (Expo + Expo Router).
- [ ] Criação da navegação por Tabs (Minha Grade e Mapa do Campus).
- [ ] Estilização das telas usando NativeWind.
- [ ] Formulário de cadastro de aulas com validação de dados.
- [ ] Persistência de dados local utilizando SQLite.
- [ ] Integração de Mapa Interativo (`react-native-maps`) com visão de satélite do campus.
- [ ] Renderização de marcadores (Pins) fixos no mapa para os blocos, RU e Biblioteca (dados pré-cadastrados na aplicação).
- [ ] Criação de um *Bottom Sheet* para exibição de detalhes, fotos e dicas de acesso dos blocos.
- [ ] *(Trabalho Futuro)* Notificações avisando quando a próxima aula estiver prestes a começar.
- [ ] *(Trabalho Futuro)* Traçar a rota em tempo real do ponto atual do usuário até o bloco da aula.

## Protótipos de tela
Os protótipos foram desenvolvidos no Figma para guiar o design da aplicação. O fluxo principal foca em duas abas: a organização temporal da rotina (Minha Grade) e a visualização espacial (Mapa do Campus). 

Foram projetadas 4 telas principais:
1. **Minha Grade (Home):** Visão geral das aulas do dia e contagem regressiva para a próxima aula.
2. **Nova Aula:** Formulário para adicionar matérias, dias, horários e bloco.
3. **Mapa do Campus:** Visão aérea do campus com marcadores de blocos e utilidades.
4. **Detalhes do Local:** Informações específicas do bloco selecionado com fotos e dicas de acesso.

> **[Link do Protótipo no Figma](https://www.figma.com/design/vkcgIrWoIFctaimzrglvOt/MapaUTF?node-id=0-1&t=I4WRBy5uvYdLHDbT-1)**

## Modelagem do banco
Como o aplicativo terá foco em desempenho rápido, funcionamento offline no campus (onde a internet pode oscilar) e armazenamento de rotina pessoal, o banco de dados será implementado de forma Local com SQLite.
O modelo relacional proposto é simples e eficient, focado em cruzar a aula do aluno com as coordenadas do mapa. Abaixo está a descrição das entidades a serem criadas:

**Diagrama Entidade-Relacionamento:**

* **Tabela: `locations` (Locais do Campus pré-cadastrados)**
  * `id` (PK, INTEGER)
  * `name` (TEXT) - *Ex: Bloco B - Informática*
  * `subtitle` (TEXT) - *Ex: Laboratórios e Sala dos Professores*
  * `latitude` (REAL)
  * `longitude` (REAL)
  * `access_tip` (TEXT) - *Ex: O bloco B é o edifício mais próximo...*
  * `image_url` (TEXT) - *Caminho para a foto do bloco*

* **Tabela: `classes` (Aulas cadastradas pelo aluno)**
  * `id` (PK, INTEGER)
  * `subject` (TEXT) - *Ex: Pensamento Computacional*
  * `day_of_week` (TEXT) - *Ex: Ter*
  * `start_time` (TEXT) - *Ex: 18:40*
  * `end_time` (TEXT) - *Ex: 20:10*
  * `location_id` (FK, INTEGER) - *Referência à tabela locations*

* **Tabela: `badges` (Etiquetas de comodidades)**
  * `id` (PK, INTEGER)
  * `name` (TEXT) - *Ex: Wi-Fi Livre, Acessível*
  * `icon` (TEXT) - *Nome do ícone a ser renderizado*

* **Tabela: `location_badges` (Relação N-N entre locais e badges)**
  * `location_id` (FK, INTEGER)
  * `badge_id` (FK, INTEGER)

<img width="712" height="543" alt="mapa-utf-modelagem" src="https://github.com/user-attachments/assets/857b0742-363c-41ff-b9b8-649477d51a10" />

## Planejamento de sprints

* **Sprint 1 (2 Semanas): Setup e Navegação Base**
  * Criação do repositório e inicialização do Expo.
  * Implementação da estrutura de roteamento com Expo Router (Tabs e Stack para os formulários).
* **Sprint 2 (2 Semanas): Interface e Estilização**
  * Construção das 4 telas planejadas no Figma usando NativeWind.
  * Criação de componentes reutilizáveis (Cards de aula, Botões, Cabeçalhos).
  * *Entrega do Checkpoint 2*
* **Sprint 3 (3 Semanas): Lógica e Banco de Dados Local**
  * Configuração do SQLite no projeto.
  * Criação das tabelas e injeção dos dados fixos (locations).
  * Lógica de inserção, listagem e validação dos dados do formulário de Nova Aula.
* **Sprint 4 (2 Semanas): Integração do Mapa**
  * Configuração do `react-native-maps`.
  * Renderização dos pinos sobre a foto de satélite da UTFPR.
  * Ação de navegação: clicar em "Ver no Mapa" na tela de Grade centraliza o mapa no respectivo bloco.
* **Sprint 5 (2 Semanas): Entrega**
  * Testes de usabilidade e tratamento de erros (ex: tentar salvar aula sem nome).
  * Build do aplicativo.
  * *Entrega do Checkpoint Final*

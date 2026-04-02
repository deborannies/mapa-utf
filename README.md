# MapaUTF

## Sobre o projeto
O **MapaUTF** é um projeto de aplicativo em desenvolvimento para a disciplina de Desenvolvimento de Projetos para Dispositivos Móveis (DPDM). Seu objetivo principal é conectar a grade de aulas do estudante com o mapa da universidade, ajudando o aluno a saber exatamente onde e quando suas aulas vão acontecer. A proposta é que o aplicativo permita que o aluno cadastre sua grade de aulas e visualize no mapa o bloco exato para onde deve se dirigir, além de fornecer dicas de acesso e informações úteis (como cardápio do RU e acesso à Biblioteca).

**Checklist de Funcionalidades (Escopo do Semestre):**
- [ ] Configuração do ambiente (Expo + Expo Router).
- [ ] Criação da navegação por Tabs (Minha Grade e Mapa do Campus).
- [ ] Estilização das telas usando NativeWind.
- [ ] Formulário de cadastro de aulas com validação de dados.
- [ ] Persistência de dados local utilizando SQLite.
- [ ] Integração de Mapa Interativo (`react-native-maps`) com visão de satélite do campus.
- [ ] Inserção de marcadores (Pins) personalizados para os blocos, RU e Biblioteca.
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

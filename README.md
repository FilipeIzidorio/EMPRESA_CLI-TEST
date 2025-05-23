﻿# EMPRESA_CLI-TEST
Plano de Teste - Sistema de Cadastro de Funcionários

Versão 1.0
Histórico das Alterações
Data	Versão	Descrição	Autor(a)
05/04/2025	1.0	Release inicial	Filipe Izidorio
1. Introdução

Este documento descreve os requisitos a serem testados, os tipos de testes definidos para cada iteração, os recursos de hardware e software necessários, além do cronograma de execução dos testes.

Objetivos deste documento:

    Identificar funcionalidades e componentes a serem testados;

    Listar requisitos funcionais e não funcionais;

    Definir estratégias de teste;

    Estimar recursos e esforços necessários;

    Documentar os resultados esperados dos testes.

2. Requisitos a Testar
Casos de Uso
Identificador	Nome do Caso de Uso
UC01	Cadastro de funcionários
UC02	Validação de formulário
UC03	Visualização de registros
Requisitos Não Funcionais
Identificador	Nome do Requisito
RNF01	Persistência de dados
RNF02	Tempo de resposta aceitável
3. Tipos de Teste

Os seguintes tipos de testes serão aplicados:

    Teste de Interface de Usuário

    Teste de Performance

    Teste de Carga

    Teste de Stress

    Teste de Segurança e Controle de Acesso

    Teste de Instalação

3.1. Métodos da Classe

Objetivo: Verificar se cada método de validação retorna os resultados esperados.

Testes incluídos:

    Validação de nome (somente letras);

    Validação de CPF (formato válido);

    Validação de idade (maior de 18 anos);

    Validação de e-mail (regex);

    Validação de campo obrigatório (não pode estar vazio);

    Teste de relação entre campos (ex: se cargo exige campo extra).

Técnica	Manual (✔)	Automática (✔)
Estágio	Unidade (✔)
Abordagem	Caixa Branca (✔)	Caixa Preta ( )
Responsável	Programador(es) ou equipe de testes
3.2. Persistência de Dados

Objetivo: Verificar se os dados permanecem armazenados após encerramento ou falha do sistema.
Técnica	Manual (✔)	Automática (✔)
Estágio	Sistema (✔)
Abordagem	Caixa Preta (✔)
Responsável	Equipe de Testes
3.3. Integração dos Componentes

Objetivo: Garantir a correta interação entre as classes de entrada de dados, validador e repositório.
Técnica	Manual (✔)	Automática (✔)
Estágio	Integração (✔)
Abordagem	Caixa Branca (✔)	Caixa Preta (✔)
Responsável	Programador(es)
3.4. Tempo de Resposta

Objetivo: Assegurar que as respostas do sistema ocorram em menos de 1 segundo.
Técnica	Automática (✔)
Estágio	Sistema (✔)
Abordagem	Caixa Preta (✔)
Responsável	Equipe de Testes
3.5. Animação

Objetivo: Verificar se há animações suaves durante exibição de erros ou carregamento de dados.
Técnica	Manual (✔)
Estágio	Sistema (✔)
Abordagem	Caixa Preta (✔)
Responsável	Equipe de Testes
4. Recursos
4.1. Ambiente de Teste

Hardware:

    Mínimo 4 GB RAM

    CPU Dual Core 2.0GHz+

Software:

    Sistema Operacional: Windows 10+ ou Linux Ubuntu 22.04

    Navegadores: Chrome, Firefox

    Framework: Node.js 20+, Express, MongoDB local

    IDE: VS Code

4.2. Ferramentas de Teste

    CLI Postman (testes manuais de requisições HTTP)

    MongoDB Compass (inspeção de dados)

5. Cronograma
Tipo de Teste	Duração	Data de Início	Data de Término
Planejar Teste	1 dia	04/04/2025	06/04/2025
Projetar Teste	1 dia	04/04/2025	08/04/2025
Implementar Teste	1 dia	05/04/2025	10/04/2025
Executar Teste	1 dia	05/04/2025	12/04/2025
Avaliar Teste	1 dia	06/04/2025	13/04/2025

Autor: Filipe Izidorio
Última atualização: 12/04/2025

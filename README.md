# Vacina Brasil 👋

<a>
  <img align="center"  height='150px' src="imagens/logo.JPG" />
</a>

O Vacina Brasil é uma aplicação web para gerenciar o processo de vacinação contra a COVID-19.

## Funcionalidades

- Listagens de usuários
- Cadastro de usuários
- Alteração de status de vacinação
- Visualização de perfil
- Fornecimento de estastísticas

## VacinaBrasil API

### Usuários

Requisições para a API devem seguir os padrões:
| Método | Endpoint | Descrição |
|---|---|---|
| `GET` |`/users`|Retorna todos os usuários cadastrados. |
| `GET` |`/users/:id`|Retorna informação de um usuário. |
| `POST` |`/users`| Cadastra um novo usuário. |

#### Dados para envio no POST

| Parâmetro | Descrição                |
| --------- | ------------------------ |
| `name`    | Nome completo do usuário |
| `cpf`     | CPF do usuário.          |

- Body

            {
              "name": "Eduardo Pereira dos Santos",
              "cpf": "000.000.000-00"
            }

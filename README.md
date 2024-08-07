# Sistema de Garagem para FiveM

## Descrição do Projeto

O projeto "Sistema de Garagem para FiveM" foi desenvolvido para atender às necessidades do servidor Metrópole, permitindo o gerenciamento de veículos dos jogadores. Este sistema possibilita que os jogadores visualizem e selecionem seus veículos por meio de uma interface.

## Requisitos do Sistema

### Front-End

- Desenvolvido uma interface de usuário usando React que permita aos jogadores visualizar os veículo por categorias.
- Cada veículo pode ser customizado as cores e o nome na placa.
- Ao "comprar" um veículo, o mesmo é adicionado à garagem do jogador.

### Integração com o FiveM

- Os dados dos veículos são persistidos entre as sessões dos jogadores no servidor.
- Foi utilizado banco de dados MySQL para armazenar os dados dos veículos e OxMySQL para conectar.
- Criado o comando `/car (modelo) (cor primaria) (cor secundaria)` para que um administrador consiga spawnar um veículo informando o modelo e as cores em hexadecimal (sem o #).

## Requisitos Técnicos

- Todas as camadas foram construidas com TypeScript.
- Utilizei React com TailwindCSS para o front-end.

## Executando a Aplicação com Docker

1. Clone o repositório:

```bash
git clone https://github.com/mucasliranda/metropole-garage.git
```

2. Navegue até o diretório do projeto:

```bash
cd metropole-garage
```

3. Insira o LICENSE_KEY no docker-compose.yml

```bash
  environment:
    - LICENSE_KEY=<LICENSE_KEY>
```

4. Execute o container Docker:

```bash
docker compose up --build
```

O servidor estará disponível em localhost:30120 ou na porta especificada no arquivo `docker-compose.yml`.

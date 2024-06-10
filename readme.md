# IBGE Cidades Data Fetcher

Este projeto faz uma requisição à API do IBGE para obter informações sobre os cidades brasileiros, higieniza os dados extraindo apenas os campos desejados e salva-os em um arquivo JSON. Os campos extraídos são `id`, `name`, `uf`, e `state_id`.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **HTTPS**: Módulo nativo do Node.js para fazer requisições HTTP.
- **FS**: Módulo nativo do Node.js para manipulação de arquivos.

## Como Executar

Siga os passos abaixo para clonar o repositório, instalar as dependências e executar o projeto.

### Pré-requisitos

- Node.js instalado. Você pode baixar o Node.js [aqui](https://nodejs.org/).

### Passo a Passo

1. **Clone o repositório**:
    ```sh
    git clone https://github.com/seu-usuario/ibge-municipios.git
    cd ibge-municipios
    ```

2. **Instale as dependências** (se houver):
    ```sh
    npm install
    ```

3. **Execute o script**:
    ```sh
    node script.js
    ```

4. **Verifique o arquivo gerado**:
    Após a execução do script, um arquivo JSON será gerado no diretório raiz do projeto com um nome no formato `municipios_YYYY-MM-DDTHH-MM-SS.json`.

## Estrutura do Projeto

- `script.js`: Script principal que realiza a requisição à API do IBGE, higieniza os dados e salva em um arquivo JSON.
- `README.md`: Arquivo de documentação com instruções de uso.

## Exemplo de Uso

Ao executar o script, ele fará uma requisição à API do IBGE, processará os dados e salvará em um arquivo JSON com a seguinte estrutura:

```json
[
  {
    "id": 1100015,
    "name": "Alta Floresta D'Oeste",
    "uf": "RO",
    "state_id": 11
  },
  {
    "id": 1100023,
    "name": "Ariquemes",
    "uf": "RO",
    "state_id": 11
  },
  ...
]

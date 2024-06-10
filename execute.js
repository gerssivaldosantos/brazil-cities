const https = require('https');
const fs = require('fs');

// Função para formatar datetime
function getFormattedDateTime() {
    const now = new Date();
    return now.toISOString().replace(/[:.]/g, '-');
}

// URL da API
const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios';

// Fazendo a requisição HTTP
https.get(url, (res) => {
    let data = '';

    // Recebendo dados
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Fim da recepção dos dados
    res.on('end', () => {
        const municipios = JSON.parse(data);
        const formattedData = municipios.map(municipio => ({
            id: municipio.id,
            name: municipio.nome,
            uf: municipio.microrregiao.mesorregiao.UF.sigla,
            state_id: municipio.microrregiao.mesorregiao.UF.id
        }));

        // Nome do arquivo baseado no datetime atual
        const fileName = `municipios_${getFormattedDateTime()}.json`;

        // Salvando os dados no arquivo JSON
        fs.writeFile(fileName, JSON.stringify(formattedData, null, 2), (err) => {
            if (err) throw err;
            console.log(`Dados salvos em ${fileName}`);
        });
    });

}).on('error', (err) => {
    console.log('Erro: ' + err.message);
});

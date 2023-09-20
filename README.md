- [x] Ser desenvolvido em JAVASCRIPT utilizando NODEJS.
- [x] Ser capaz de ler os dados coletados pelo comerciante que estão registrados
em um arquivo CSV.
- [x] Utilizar uma API de histórico e previsão do tempo.
- [x] Extrair os seguintes dados da API:
    [x] A temperatura mínima e máxima registrada.
    [x] A velocidade máxima das rajadas de vento.
    [x] A porcentagem de cobertura de nuvens no céu.
- [x] Escrever dois arquivos:
    [x] Arquivo CSV contendo os dados coletados pelo comerciante, contendo
      três colunas em anexo contendo as informações extraídas da API para
      cada um dos respectivos dias.
    [x] Arquivo JSON contendo os seguintes dados:
      [x] Média de faturamento.
      [x] Dia de maior faturamento.
      [x] Dia de menor faturamento.
      [x] Valor do dia de maior faturamento.
      [x] Valor do dia de menor faturamento.

## Technologies

- [Nodejs](https://nodejs.org/)

## src Files

1. get-data-api.js para pegar dados da API
2. read-file.js para ler os dados coletados
3. write-data-file.js para escrever um novo arquivo CSV apartir dos dados da API solicitado (npm run write:data)
4. write-json.js para escrever um arquivo JSON do resumo dos dias de venda (npm run write:json)

## Author

Developed by Matheus Zweibrucker.
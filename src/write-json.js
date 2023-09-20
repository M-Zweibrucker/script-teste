import fs from "fs";
import { readCsvFile } from './read-file.js'


async function writeJSON() {
  const readData = await readCsvFile()
  const somaTotal = []

  const data = readData.map((item) => {
    return {
      date: item.Data,
      refri: item.Refrigerante,
      agua: item.Água,
      picole: item.Picolé,
      sorvete: item.Sorvete,
    } 
  })

  for(let i = 0; i < data.length; i++) {
    let somaRefri = data[i].refri * 5
    let somaAgua = data[i].agua * 3
    let somaPicole = data[i].picole * 7
    let somaSorvete = data[i].sorvete * 9
    somaTotal.push(somaRefri + somaAgua + somaPicole + somaSorvete)
  }

  const soma = somaTotal.reduce((acc, item) => (acc += item), 0)

  const media_faturamento = soma / data.length
  const dia_de_maior_faturamento = data[somaTotal.indexOf(Math.max(...somaTotal))].date
  const dia_de_menor_faturamento = data[somaTotal.indexOf(Math.min(...somaTotal))].date
  const valor_do_dia_de_maior_faturamento = Math.max(...somaTotal)
  const valor_do_dia_de_menor_faturamento = Math.min(...somaTotal)

  const newData = JSON.stringify({
    media_faturamento,
    dia_de_maior_faturamento,
    dia_de_menor_faturamento,
    valor_do_dia_de_maior_faturamento,
    valor_do_dia_de_menor_faturamento
  }, null, 2)

  const newFile = './files/data.json'

  fs.writeFileSync(newFile, newData, 'utf8', (err) => {
    if (err) {
      console.log(`Error writing file: ${err}`);
    } else {
      console.log(`File is written successfully!`);
    }
  })
}

writeJSON()
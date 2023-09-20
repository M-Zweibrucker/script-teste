import fs from 'fs'
import { fetchData } from './get-data-api.js'
import { readCsvFile } from './read-file.js'


const newFile = './files/new-data.csv'

async function WriteFile() {
  const readData = await readCsvFile()
  const oldData = await fetchData()
  const newColumns = []

  for(let i = 0; i < oldData.data.length; i++) {
    const rowData = {
      'Max/Min Temp': oldData.data[i].max_temp + '/' + oldData.data[i].min_temp,
      'Vel Max Vento': oldData.data[i].max_wind_spd,
      '% de nuvens': oldData.data[i].clouds,
    }
    newColumns.push(rowData)
  }

  const csvData = newColumns.map(row => Object.values(row).join(','))

  const oldHeader = Object.keys(readData[0]).join(',')
  const newHeader = oldHeader + ',' + Object.keys(newColumns[0]).join(',')

  const combinedData = readData.map((row, index) => {
    return Object.values(row).join(',') + ',' + csvData[index]
  })

  fs.writeFileSync(newFile, [newHeader, ...combinedData].join('\n'))

}

WriteFile()
import fs from 'fs'
import csv from 'csv-parser'


export function readCsvFile() {
  return new Promise((resolve, reject) => {
    const results = []

    fs.createReadStream('./files/data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      resolve(results)
    })
    .on('error', (error) => {
      reject(error)
    })
  })  
}



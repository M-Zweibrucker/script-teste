import axios from "axios";

const url = 'http://api.weatherbit.io/v2.0/history/daily'

const urlParams = {
  API_KEY: 'bfd77f015e094e37a78fd86adf933f1d',
  city_id: '3399415',
  start_date: '2023-08-01',
  end_date: '2023-09-01'
}

export async function fetchData() {

  try {    

    const res = await axios.get((`${url}?&city_id=${urlParams.city_id}&start_date=${urlParams.start_date}&end_date=${urlParams.end_date}&key=${urlParams.API_KEY}`))
    return res.data

  } catch (error) {
    console.log(error)
  }
}



  
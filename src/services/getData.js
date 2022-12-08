import axios from 'axios'

const getData = (value='score')=>{
  return axios.get(`https://flames-backend.onrender.com/${value}`,{
    headers:{
      Authorization:`Bearer 66d5f1b0-17b6-4e17-ab02-752c30c1ddcb`
    }
  }).then(res=>res.data)
}

export default getData
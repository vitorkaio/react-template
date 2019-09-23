import axios from 'axios';

const url = 'https://api.github.com/users/vitorkaio';


export const getUser = async () => {
  try {
    const res = await axios.get(url)
    console.log(res.data)
    return res.data
  } 
  catch (_) {
    return null    
  }
}

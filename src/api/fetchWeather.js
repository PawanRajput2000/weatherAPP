import axios from 'axios';
//first step like all those apis i save the key and URl
const url = 'https://api.openweathermap.org/data/2.5/weather';
const key ="329da7871c4d739b9267651fe39002c4"


 const fetchWeather = async (query) =>{
    const { data } = await axios.get(url,{
        params:{
            q:query,
            units:'metric', //these are the supported in the APi  
            APPID:key
        }
    });
    return data;
}


export default fetchWeather;

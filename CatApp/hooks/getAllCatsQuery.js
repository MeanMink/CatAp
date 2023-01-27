import {useQuery} from 'react-query';
import axios from 'axios';

const allCatsUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';

const config = {
    headers: {
        'x-api-key': 'live_E47owMhwXsdj44a1blFcLwmPbSmM8KBlKFOlELZAMXGK8kZELxz4mV0DD5EDyDtS' 
    }
}
const getAllCats = async () => {
    const response =  await axios.get(allCatsUrl, config);
    console.log(response.data)
    return response.data;
};

export const UseGetAllCats = () => {
    const {isLoading, data} = useQuery(['allCats'], getAllCats);
    return {data, isLoading};
}
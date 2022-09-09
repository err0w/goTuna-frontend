import axios from 'axios';
const BACKEND_URL = 'http://13.233.97.139'

export async function axiosGet(path, request_param){
 try{   
 const response = await axios.get(BACKEND_URL+path, {"params":request_param});
    if(response.status == 200){
        return response.data;
    }
 
 }catch(e){
    // Request error
    console.log("error",e)
 }
}

export async function axiossPost(path, request_param){
    try{   
        const response = await axios.get(BACKEND_URL+path, request_param);
        if(response.status == 200){
            return response.data;
        }
        }catch{
           // Request error
           console.log("error")
        }
   }

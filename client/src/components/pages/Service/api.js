import axios from 'axios'; 

const URL = 'http://localhost:8000/students';


export const addUser = async(data) =>{

try{
    return await axios.post(`${URL}/add`, data);
    

} catch(error) {
    console.log('Error calling Add User', error);
}

}

export const getUsers = async() =>{
    try{
       return await axios.get(`${URL}`);
    } catch(error){
        console.log('Error while calling getUsers API', error);
    }
    
}
export const getUser= async(id) =>{
    try{
       return await axios.get(`${URL}/edit/${id}`);
    } catch(error){
        console.log('Error while calling getUser API', error);
    }
    
}
export const editUser= async(user, id) =>{
    try{
       return await axios.post(`${URL}/edit/${id}`, user);
    } catch(error){
        console.log('Error while calling editUser API', error);
    }
    
}


export const deleteUser = async(id) =>{
    try{
       return await axios.delete(`${URL}/${id}`);
      
    } catch(error){
        console.log('Error while calling delete API', error);
    }
    
}
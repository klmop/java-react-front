import axios from 'axios';

/**
 * TODO : 1 : Modifier ce champ afin que l'adresse du serveur backend
 * ne soit plus envoyer en dur au client.
 */
const USER_API_BASE_URL = 'http://192.168.1.11:8080/users2'; 

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();
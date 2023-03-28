import axios from "axios"

const DREAM_API_BASE_URL = "http://localhost:8080/api/v1/dreams/"

class DreamService {
    saveDream(dream) {
        return axios.post(DREAM_API_BASE_URL + 'create', dream);
    }
}

export default new DreamService();
import axios from "axios"

const DREAM_API_BASE_URL = "http://localhost:8080/api/v1/dreams/"

class DreamService {
    saveDream(dream) {

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            params: {
                "title": dream.title,
                "description": dream.description,
                "hashtags": dream.hashtags,
                "image": dream.image
            }
        }

        return axios.post(DREAM_API_BASE_URL + 'create', null, config)
        .then(response => response.status)
        .catch(err => console.warn(err));
    }
}

export default new DreamService();
import axios from "axios"

const DREAM_API_BASE_URL = "http://localhost:8080/api/v1/dreams/";

class DreamService {
    uploadFile(file) {
        const formData = new FormData();
        const config = {
         headers: {
            "Content-Type":"multipart/form-data"
            }
        }
        formData.append("image", file);
        return axios.post('http://localhost:8080/upload', formData, config)
        .then(response => response.status)
        .catch(err => console.warn(err));
    }

    async saveDream(dream) {
        try {
            const response = await axios.post(DREAM_API_BASE_URL + 'create', dream);
            return response.status;
        } catch (err) {
            return console.warn(err);
        }
    }
}

export default new DreamService();
import axios from "axios"

const DREAM_API_BASE_URL = "http://localhost:8080/api/v1/dreams/";

class DreamService {
    async uploadFile(file) {
        const formData = new FormData();
        const config = {
         headers: {
            "Content-Type":"multipart/form-data"
            }
        }
        formData.append("image", file);
        try {
            const response = await axios.post('http://localhost:8080/upload', formData, config)
            return response.status;
        } catch (err) {
            return console.warn(err);
        }
    }

    async saveDream(dream) {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            const config = {
                headers: {
                   Authorization: `Bearer ${user.accessToken}`,
                }
            }
            const response = await axios.post(DREAM_API_BASE_URL + 'create', dream, config);
            return response.status;
        } catch (err) {
            return console.warn(err);
        }
    }
}

export default new DreamService();
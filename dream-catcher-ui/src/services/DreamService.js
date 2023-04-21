import axios from "axios"

const DREAM_API_BASE_URL = "http://localhost:8080/api/v1/dreams/";

class DreamService {
    constructor() {
        this.state = {
            data: {}
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
            const response = await axios.post(DREAM_API_BASE_URL + 'create', dream, config)
            console.log(response.data)
            this.state.data = response.data
            return response.status
        } catch (err) {
            return console.warn(err);
        }
    }

    async uploadFile(file) {
        const dreamId = this.state.data.id
        console.log(dreamId)
        const formData = new FormData();
        const config = {
            headers: {
            "Content-Type": "multipart/form-data"
            }
        };
        formData.append("image", file);
        formData.append("dreamId", dreamId);
        return axios
            .post("http://localhost:8080/upload", formData, config)
            .then(response => response.status)
            .catch(err => console.warn(err));
    }
}

export default new DreamService();
import axios from "axios"

class ProfileService {
    async updateUserImg(file, userId) {
        const formData = new FormData();
        const config = {
            headers: {
            "Content-Type": "multipart/form-data"
            }
        };
        formData.append("image", file);
        formData.append("userId", userId);
        return axios
            .put("http://localhost:8080/update/profile-image", formData, config)
            .then(response => response.status)
            .catch(err => console.warn(err));
    }
}

export default new ProfileService()
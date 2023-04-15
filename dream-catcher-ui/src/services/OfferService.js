import axios from "axios";

class OfferService {
  async uploadFile(file) {
    const formData = new FormData();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    formData.append("image", file);
    return axios
      .post("http://localhost:8080/upload", formData, config)
      .then(response => response.status)
      .catch(err => console.warn(err));
  }

  async saveOffer(offer) {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      const config = {
        headers: {
            Authorization: `Bearer ${user.accessToken}`,
        }
      }
      const response = await axios.post(
        `http://localhost:8080/api/mentors/offer`,
        offer, config
      );
      return response.status;
    } catch (err) {
      console.warn(err);
      return err;
    }
  }
}

export default new OfferService;
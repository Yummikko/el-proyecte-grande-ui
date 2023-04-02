import axios from "axios";

class OfferService {
  constructor(id) {
    this.OFFER_API_BASE_URL = `http://localhost:8080/api/mentors/${id}/offer`;
  }

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
      const response = await axios.post(
        this.OFFER_API_BASE_URL,
        offer
      );
      return response.status;
    } catch (err) {
      console.warn(err);
      return err;
    }
  }
}

export default OfferService;
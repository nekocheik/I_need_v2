import axios from "axios";
require("dotenv").config();
const PROTOCOLE = "http";
const IP = process.env.REACT_APP_API_ENDPOINT;

class ApiRequest {
  constructor() {
    this.uri = `${PROTOCOLE}://${IP}`;
    this.conf = { "Content-Type": "application/json" };
    this.getHospital = this.getHospital.bind(this);
    this.getCentre = this.getCentre.bind(this);
  }

  get(path, data) {
    return axios.get(this.uri + (path || ""), data || {}, this.conf);
  }

  getProfils(userId) {
    return axios.get(this.uri + "/api/profils?User=" + userId || {}, this.conf);
  }

  patch(path, data) {
    return axios.patch(this.uri + (path || ""), data || {}, this.conf);
  }

  post(path, data) {
    return axios.post(this.uri + (path || ""), data || {}, this.conf);
  }

  put(path, data) {
    return axios.put(this.uri + (path || ""), data || {}, this.conf);
  }

  del(path, data) {
    return axios.delete(this.uri + (path || ""), data || {}, this.conf);
  }

  getHospital(parms) {
    return this.get("/api/hopitals" + (parms || ""));
  }

  getCentre(parms) {
    return this.get("/api/centre_de_santes" + (parms || ""));
  }

  getPharmacies24h(parms) {
    return new Promise((resolve, reject) => {
      this.get("/api/pharmacies?open_night=1" + (parms || "")).then(
        (responses) => {
          const newHydra = responses.data["hydra:member"].filter(
            (pharmacie) => pharmacie.openAll
          );
          responses.data["hydra:member"] = newHydra;
          resolve(responses);
        }
      );
    });
  }

  getPharmacies(parms) {
    return new Promise((resolve, reject) => {
      this.get("/api/pharmacies?open_night=1" + (parms || "")).then(
        (responses) => {
          resolve(responses);
        }
      );
    });
  }

  getAllFiltre(ulrs) {
    return Promise.all(ulrs.map((url) => url()));
  }

  all(endPoints) {
    return Promise.all(endPoints.map((endPoint) => endPoint()));
  }

  signUp({ email, password }) {
    const json = {
      email: email,
      password: password,
    };
    return new Promise((resolve, reject) => {
      this.post("/users/add", json)
        .then((res) => {
          resolve(res.data.id);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  signIn({ email, password }) {
    const json = {
      username: email,
      password: password,
    };
    return new Promise((resolve, reject) => {
      this.post("/api/login", json)
        .then((res) => {
          resolve(res.data.id);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default new ApiRequest();

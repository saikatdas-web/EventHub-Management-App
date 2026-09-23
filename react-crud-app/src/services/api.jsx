import axios from "axios";

const API = axios.create({

   baseURL: "http://localhost:5000/api/events"
});

export const getEvents = () => API.get("/");

export const getEvent = (id) => API.get(`/${id}`);

export const createEvent = (formData) => API.post("/", formData, {
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export const updateEvent = (id, formData) => API.put(`/${id}`, formData, {
    headers: {
        "Content-Type": "multipart/form-data"
    },
});

export const deleteEvent = (id) => API.delete(`/${id}`);

export default API;
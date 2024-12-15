import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/slides';

export const fetchSlides = async () => {
    const response = await axios.get(API_BASE);
    return response.data;
};

export const createSlide = async (slide) => {
    const response = await axios.post(API_BASE, slide);
    return response.data;
};

export const updateSlide = async (id, slide) => {
    const response = await axios.put(`${API_BASE}/${id}`, slide);
    return response.data;
};

export const deleteSlide = async (id) => {
    await axios.delete(`${API_BASE}/${id}`);
};

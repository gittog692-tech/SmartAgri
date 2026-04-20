import axios from 'axios';

function resolveApiUrl() {
    const rawApiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').trim();
    const normalizedApiUrl = rawApiUrl.replace(/\/+$/, '');

    // All backend routes in this app are mounted under /api.
    return normalizedApiUrl.endsWith('/api')
        ? normalizedApiUrl
        : `${normalizedApiUrl}/api`;
}

const API_URL = resolveApiUrl();

// Add token to requests
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authService = {
    login: async (username, password) => {
        const response = await axios.post(`${API_URL}/auth/login`, { username, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    },
    register: async (username, password, phone) => {
        return axios.post(`${API_URL}/auth/register`, { username, password, phone });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },
    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        if (!userStr) return null;
        return JSON.parse(userStr);
    }
};

export const apiService = {
    getRecommendations: (data) => axios.post(`${API_URL}/recommend-crop`, data),
    getWeatherAdvice: (weather) => axios.get(`${API_URL}/weather-advice?weather=${weather}`),
    
    getMarket: () => axios.get(`${API_URL}/market`),
    createListing: (data) => axios.post(`${API_URL}/market`, data),
    updateListing: (id, data) => axios.put(`${API_URL}/market/${id}`, data),
    deleteListing: (id) => axios.delete(`${API_URL}/market/${id}`),
    
    getSchemes: () => axios.get(`${API_URL}/schemes`),
    
    getQueries: () => axios.get(`${API_URL}/community`),
    createQuery: (data) => axios.post(`${API_URL}/community`, data),
    addReply: (queryId, reply) => axios.post(`${API_URL}/community/${queryId}/reply`, { reply }),
    deleteQuery: (id) => axios.delete(`${API_URL}/community/${id}`),
    
    getUserInfo: (id) => axios.get(`${API_URL}/auth/user/${id}`)
};

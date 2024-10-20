import axios from 'axios';
import { API_URL } from './api';

// Créer une instance d'Axios
const axiosInstance = axios.create({
    baseURL: API_URL,
});

// Ajouter un intercepteur pour les requêtes
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Récupérer le token depuis localStorage
        if (token) {
            // Si le token existe, l'ajouter à l'en-tête Authorization
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Ajouter un intercepteur pour les réponses
axiosInstance.interceptors.response.use(
    (response) => {
        // Si la réponse est réussie, la retourner
        return response;
    },
    (error) => {
        // Si l'utilisateur n'est pas authentifié (erreur 401)
        if (error.response && ((error.response.status === 401) || (error.response.status === 403))) {
            // Rediriger vers la page de login
            localStorage.removeItem('authToken');  // Supprimer le token invalide
            window.location.href = '/bulker/admin/login';  // Redirection vers la page de login
        }

        return Promise.reject(error);  // Rejeter l'erreur pour la traiter plus tard si nécessaire
    }
);

export default axiosInstance;

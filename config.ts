import axios from "axios"

const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Remplacez par votre URL de base
    timeout: 10000, // Temps d'attente maximal pour les requêtes (en millisecondes)
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

export {apiClient};
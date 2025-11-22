import axios from "axios";

// Extend the ImportMeta interface to include env
declare global {
  interface ImportMeta {
    readonly env: {
      MODE: 'development' | 'production';
      DEV: boolean;
      PROD: boolean;
      // Add other environment variables as needed
    };
  }
}

// Determine the base URL based on the current environment
const getBaseURL = (): string => {
  // In development, use the local backend server
  if (import.meta.env.DEV) {
    return "http://localhost:3778/api/v1";
  }
  
  // In production, use the production backend domain
  // This will be https://backend.cynerza.com when deployed
  return "https://backend.cynerza.com/api/v1";
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,

});

// Add a request interceptor to handle errors
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors here (e.g., 401 Unauthorized)
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.error('Unauthorized access - redirecting to login');
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };

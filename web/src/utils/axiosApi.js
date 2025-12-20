import axios from 'axios';

const serverBaseUrl =
    process.env.DJANGO_INTERNAL_BASE_URL ||
    process.env.BASE_HOST_URL ||
    process.env['NEXT_PUBLIC_DJANGO_BASE_URL'] ||
    '';

const api = axios.create({
    baseURL: typeof window === 'undefined' ? serverBaseUrl : '',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const { response } = error;
        if (response) {
            console.log('error---------->', response.data);
            return Promise.reject(response.data);
        }
        return Promise.reject(error);
    }
);

export default api;

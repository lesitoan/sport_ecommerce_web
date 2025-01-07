import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, // Tự động gửi cookie trong mọi yêu cầu
});

axiosInstance.interceptors.request.use(
    function (request) {
        // console.log(import.meta.env.VITE_API_URL);
        // console.log('trước khi gửi request:', request);
        return request;
    },
    function (error) {
        // console.log('lỗi khi gửi request:', error);
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const { response, config: prevRequesst } = error;

        if (prevRequesst.url === '/auth/signin' || prevRequesst.url === '/auth/signup') {
            return Promise.reject(error);
        }
        if (response.status === 401 && response.data.message === 'Token_expired') {
            // refresh token
            console.log('refresh token');
            try {
                await axiosInstance.post('/auth/refresh-token');
                return axiosInstance(prevRequesst);
            } catch (error) {
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    },
);

export default axiosInstance;

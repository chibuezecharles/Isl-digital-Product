import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import toast from "react-hot-toast";

declare global {
  interface Window {
    configs: {
      baseURL: string;
      financierBaseURL: string;
      notificationBaseURL: string;
    };
  }
}

export const api = axios.create({
  baseURL: window?.configs?.baseURL,
});

export const financierApi = axios.create({
  baseURL: window?.configs?.financierBaseURL,
});

export const notificationApi = axios.create({
  baseURL: window?.configs?.notificationBaseURL,
});

const applyInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = "";
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        toast.error("Session expired");
        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );
};

/**
 * Initialize all axios clients
 */
const axiosConfig = () => {
  applyInterceptors(api);
  applyInterceptors(financierApi);
  applyInterceptors(notificationApi);

  // console.log("Main API Base:", api.defaults.baseURL);
  // console.log("Financier API Base:", financierApi.defaults.baseURL);
};

export default axiosConfig;

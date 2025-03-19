import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// Response Interceptor with improved error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle network errors
    if (!error.response) {
      return Promise.reject(
        new Error("Network error - please check your connection")
      );
    }

    // Handle specific HTTP status codes
    switch (error.response.status) {
      case 401:
        return Promise.reject(
          new Error(
            "Authentication failed - Incorrect username or password. Please try again."
          )
        );
      case 403:
        return Promise.reject(
          new Error("Access denied - insufficient permissions")
        );
      case 404:
        return Promise.reject(new Error("Resource not found"));
      case 500:
        return Promise.reject(
          new Error("Server error - please try again later")
        );
      default:
        const message =
          error.response?.data?.message || "An unexpected error occurred";
        return Promise.reject(new Error(message));
    }
  }
);

export default apiClient;

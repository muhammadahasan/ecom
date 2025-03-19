import apiClient from "../client";

export const activitiesApi = {
  async getAllActivities(params = {}) {
    try {
      // Construct query string from params
      const queryString = Object.keys(params)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .join("&");
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/activities${
        queryString ? `?${queryString}` : ""
      }`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch activities");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};

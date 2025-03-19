export const citiesApi = {
  async getAllCities() {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/cities`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to fetch cities");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
};

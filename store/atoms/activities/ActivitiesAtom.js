import { activitiesApi } from "@/api-services/activities/activities";
import { atom } from "jotai";
import { loadable } from "jotai/utils";

export const activitiesAtom = atom([]);

// search filter for get activities api
export const paginationAtom = atom({ currentPage: 1, pageSize: 100 });
export const continentNameAtom = atom("");
export const countryNameAtom = atom("");
export const cityNameAtom = atom("");
export const minPriceAtom = atom("");
export const maxPriceAtom = atom("");
export const categoriesAtom = atom("");
export const searchQueryAtom = atom("");

// Fetch call logs loadable
export const fetchActivitiesLoadableAtom = loadable(
  atom(async (get, set) => {
    const { currentPage, pageSize } = get(paginationAtom);
    const continentName = get(continentNameAtom);
    const countryName = get(countryNameAtom);
    const cityName = get(cityNameAtom);
    const minPrice = get(minPriceAtom);
    const maxPrice = get(maxPriceAtom);
    const categories = get(categoriesAtom);
    const search = get(searchQueryAtom);

    // Example params, you can pass any combination of these
    const params = {
      page: currentPage,
      limit: pageSize,
      continentName: continentName,
      countryName: countryName,
      cityName: cityName,
      minPrice: minPrice,
      maxPrice: maxPrice,
      categories: categories,
      //   query: search,
    };

    // Filter out undefined or null params
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(
        ([_, value]) => value !== undefined && value !== null
      )
    );

    const response = await activitiesApi.getAllActivities(filteredParams);

    if (response && response) {
      return response;
    }
    throw new Error("Invalid API response");

    // return response;
  })
);

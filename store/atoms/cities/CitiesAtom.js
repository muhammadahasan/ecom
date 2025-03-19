import { citiesApi } from "@/api-services/cities/cities";
import { continentsApi } from "@/api-services/continents/Continents";
import { atom } from "jotai";
import { loadable } from "jotai/utils";

export const citiesAtom = atom([]);

export const fetchCitiesLoadableAtom = loadable(
  atom(async (get, set) => {
    const response = await citiesApi.getAllCities();

    if (response && response) {
      return response.data;
    }
    throw new Error("Invalid API response");
  })
);

import { continentsApi } from "@/api-services/continents/Continents";
import { atom } from "jotai";
import { loadable } from "jotai/utils";

export const continentsAtom = atom([]);

export const fetchContinentsLoadableAtom = loadable(
  atom(async (get, set) => {
    const response = await continentsApi.getAllContinents();

    if (response && response) {
      return response.data;
    }
    throw new Error("Invalid API response");
  })
);

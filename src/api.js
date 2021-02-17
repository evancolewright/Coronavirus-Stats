import axios from 'axios';

// Base URL for all API requests
const API_BASE = 'https://covid19.mathdro.id/api';

/**
 * Get our total counts for all countries combined
 */
export const getTotalCounts = async (country) => {
  let potentialURL = API_BASE;

  if (country) {
    potentialURL += `/countries/${country}`;
  }

  const res = await axios.get(potentialURL);
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = res;

  return {
    confirmed: confirmed.value,
    recovered: recovered.value,
    deaths: deaths.value,
    lastUpdate,
  };
};

export const getAllCountries = async () => {
  const {
    data: { countries },
  } = await axios.get(`${API_BASE}/countries`);
  return countries;
};

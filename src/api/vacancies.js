import { getConfig } from "../config.js";
import querystring from "node:querystring";
import { request } from "undici";

const config = getConfig();

export const getVacancies = async (params = {}) => {
  const q = querystring.stringify({ limit: 10, ...params });
  const url = `${config.api_url}/vacancies?${q}`;
  console.log(url);

  const { body } = await request(url);
  const { results } = await body.json();

  return results;
};

export const getVacanciesByRegion = async (regionCode, params = {}) => {
  const q = querystring.stringify({ limit: 10, ...params });
  const url = `${config.api_url}/vacancies/region/${regionCode}?${q}`;
  console.log(url);

  const { body } = await request(url);
  const { results } = await body.json();

  return results;
};

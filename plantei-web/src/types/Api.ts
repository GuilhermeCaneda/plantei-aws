// api.ts
const ipApi: string = `34.204.93.30`;
const portApi: string = `3333`;

export const API_URLS = {
    getPlants: `http://${ipApi}:${portApi}/plants`,
    getPlant: `http://${ipApi}:${portApi}/plants/`,
    setPlant: `http://${ipApi}:${portApi}/plants`, 
};

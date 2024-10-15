// api.ts
const ipApi: string = `localhost`;
const portApi: string = `3333`;

export const API_URLS = {
    getPlants: `http://${ipApi}:${portApi}/plants`,
    getPlant: `http://${ipApi}:${portApi}/plants/`,
    setPlant: `http://${ipApi}:${portApi}/plants`, 
};

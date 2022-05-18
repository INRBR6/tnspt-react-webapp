import HTTPClient from "./httpClient";

const TnsHttpInstance = new HTTPClient("");

const ApiService = {
    doGet: async (url: string) => {
        try{
            const response = await TnsHttpInstance.get(url);
            return response;
        }catch(error){
            throw new Error("Get Call Error");
        }
    },
    doPost: async (url: string, params?: any) => {
        try{
            const response = await TnsHttpInstance.post(url, params);
            return response;
        }catch(error){
            throw new Error("Post Call Error");
        }
    }
};

export default ApiService;
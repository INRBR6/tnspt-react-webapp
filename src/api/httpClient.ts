import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

enum ResponseCodes {
    UnAuthorized = 401,
    Success = 200,
    BadRequest = 400,
    InternalServerError = 500,
    Forbidden = 403
}

class HTTPClient {
    _instance: AxiosInstance;

    constructor(baseURL: string){
        this._instance = axios.create({
            baseURL,
            timeout: 1000
        })
        this._instance.interceptors.request.use(this._requestInterceptor);
        this._instance.interceptors.response.use(this._responseInterceptor, this._responseErrorInterceptor);
    };

    private _requestInterceptor = (config: AxiosRequestConfig) => {
        config.headers = {
            "Content-Type": "application/json"
        };
    };

    private _responseInterceptor = ({ data }: AxiosResponse) => {
        return data;
    };

    private _responseErrorInterceptor = (response: AxiosResponse) => {

    };

    public get = (url: string): Promise<AxiosResponse> => {
        return this._instance.get(url);
    };

    public post = (url: string, params: any): Promise<AxiosResponse> => {
        return this._instance.post(url, params);
    };
}

export default HTTPClient;
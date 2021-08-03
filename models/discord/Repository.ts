import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "https://discord.com/api/";

export default class Repository {
  private client: AxiosInstance;

  constructor(token: string) {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  protected get<T>(
    uri: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.get(uri, options);
  }
}

import { AxiosResponse } from "axios";
import { ProductResponse } from "../interfaces/ProductResponse";
import api from "./api";

const BelowPriceService = (): Promise<AxiosResponse<ProductResponse>> => {
  return api.get("/abaixo-10-reais");
};

export default BelowPriceService;

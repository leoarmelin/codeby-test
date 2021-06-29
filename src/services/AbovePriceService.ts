import { AxiosResponse } from "axios";
import { ProductResponse } from "../interfaces/ProductResponse";
import api from "./api";

const AbovePriceService = (): Promise<AxiosResponse<ProductResponse>> => {
  return api.get("/acima-10-reais");
};

export default AbovePriceService;

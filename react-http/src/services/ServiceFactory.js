import { JsonPlaceHolderServices } from "./JsonPlaceHolderServices";
import { productService } from "./ProductService";

export const serviceFactory = (apiClient) => {
  return {
    jsonPlaceHolderServices: JsonPlaceHolderServices(apiClient),

    productService: productService(apiClient),
  };
};

import { loginService } from "./LoginService";

export const serviceFactory = (apiClient) => {
  return {
    loginService: loginService(apiClient),
  };
};

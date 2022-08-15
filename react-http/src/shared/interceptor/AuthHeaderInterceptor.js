export const AuthHeaderInterceptor = (config) => {
  if (config.url !== "/login") {
    config.header.Authorization = "bearer 123";
  }

  return config;
};

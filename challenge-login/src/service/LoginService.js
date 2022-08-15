export const loginService = ({ doGet }) => {
  const getToken = async () => {
    try {
      // return await doGet({ url: "/product" });

      const response = await doGet({ url: "/login" });
      console.log("ini response await", response);
      return response;
    } catch (e) {
      throw e;
    }
  };

  return { getToken };
};

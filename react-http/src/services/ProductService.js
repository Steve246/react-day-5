export const productService = ({ doGet }) => {
  const getAllProduct = async () => {
    try {
      // return await doGet({ url: "/product" });

      const response = await doGet({ url: "/product" });
      console.log("ini response await", response);
      return response;
    } catch (e) {
      throw e;
    }
  };

  return { getAllProduct };
};

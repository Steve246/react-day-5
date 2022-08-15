const moreEffectService = () => {
  const doPrint = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id < 0 || id > 11) {
          reject(new Error("Must Between 0 and 10"));
        } else {
          resolve(`print ${id}`);
        }
      }, 1000);
    });
  };

  return {
    doPrint,
  };
};

export default moreEffectService;

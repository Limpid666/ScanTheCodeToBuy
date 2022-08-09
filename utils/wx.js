function wxTopPromise(method = "request", option = {}) {
  return new Promise((resolve, reject) => {
    option.success = resolve;
    option.fail = (error) => {
      reject(error);
    };
    wx[method](option);
  });
}

export default wxTopPromise;

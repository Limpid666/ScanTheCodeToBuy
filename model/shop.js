import http from "../utils/http";
class shopModel extends http {
  static getShopBanner() {
    return http.request(
      {
        url: "/api/app/banner",
      },
      {
        header: {
          devicetype: "H5",
        },
      }
    );
  }
}
export default shopModel;

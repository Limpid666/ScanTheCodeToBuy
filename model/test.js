import http from "../utils/http";

// 子类继承父类  extends
class TestModel extends http {
  static getNav() {
    return http.request({
      url: "/api/api/nav",
      method: "GET",
      data: {},
    });
  }
}
export default TestModel;

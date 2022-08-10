import { apiConfig } from "../config/config";
import exceptionMessage from "../config/exceptionMessage";
import wxToPromise from "./wx";

// class构造类模板
class http {
  static async request(
    { url, method = "GET", data = {}, name = "api1" },
    options
  ) {
    wx.showLoading();
    try {
      const response = await wxToPromise("request", {
        url: apiConfig[name].baseURL+url,
        method,
        data,
        ...options,
      });
      wx.hideLoading();
      if (response.statusCode < 400) {
        return response.data;
      }

      if (response.statusCode === 401) {
        // token过期, 登录超时
        return;
      }
      http._showError(response.data.code, response.data.msg);
      return response;
    } catch (error) {
      wx.hideLoading();
    //   _showError(-1);
      console.log(error);
    }
  }
  static _showError(code, msg) {
    let title = "";
    title = exceptionMessage[code] || msg || "发生未知错误";
    // 显示消息提示框
    wx.showToast({
      title,
      icon: "none",
      duration: 3000,
    });
  }
}
export default http;

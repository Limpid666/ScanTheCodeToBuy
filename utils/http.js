import { apiConfig } from "../config/config";
import exceptionMessage from "../config/exceptionMessage";
import wxTopPromise from "./wx";

// class构造类模板
class http {
  static async request({ url, method = "GET", data = {} }, options) {
    const response = await wxTopPromise("request", {
      url: apiConfig.baseURL + url,
      method,
      data,
      ...options,
    });
    if (response.statusCode < 400) {
      return response.data;
    }
    if (response.statusCode === 401) {
      // token过期, 登录超时
      return;
    }
    http._showError(response.data.code, response.data.msg);
    return response;
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

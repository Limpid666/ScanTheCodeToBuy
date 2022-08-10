class storage {
  // 设置
  static set(key, value) {
    wx.setStorage(key, value);
  }
  // 获取
  static get(key){
    // getStorageSync 同步获取当前storage的相关信息
    return wx.getStorageSync(key);
  }
  // 删除
  static remove(key){
    wx.removeStorageSync(key);
  }
  // 清空本地存储
  static removeAll(){
    wx.clearStorageSync();
  }
}
export default storage

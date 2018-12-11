import axios from "axios";

export default {
  /**
   * 获取首页列表页数据
   * @returns {Promise.<*>}
   */
  async aboutList() {
    //console.log("is ok")
    return await import(`./mocks/aboutlist.json`);
  },
  async cityList() {
    //console.log("is ok")
    return await import(`./mocks/citylist.json`);
  }
  // async aboutList() {
  //   return await axios
  //     .get("/api/mocks/aboutlist.json")
  //     .then(res => res.data.data);
  // }
};
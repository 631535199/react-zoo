import axios from "axios";

export default {
  /**
   * 获取首页列表页数据
   * @returns {Promise.<*>}
   */
  aboutList() {
    console.log("is ok")
    return import(`./mocks/aboutlist.json`);
  }
  // async aboutList() {
  //   return await axios
  //     .get("/api/mocks/aboutlist.json")
  //     .then(res => res.data.data);
  // }
};
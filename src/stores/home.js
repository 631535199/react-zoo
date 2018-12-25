import { observable, action } from "mobx";
import HomeApi from "api/home";

const HomeStore = observable({
  title: "this is home page",
  list: [],
  price: 25,
  amount: 3,
  // 获取首页数据
  async getList() {
    this.list = await HomeApi.getList();
  },
  get total() {
    return this.price * this.amount;
  },
  set total(total) {
    this.price = total / this.amount; // 从 total 中推导出 price
  }
});

export default HomeStore;

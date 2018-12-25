import { observable, action ,autorun } from 'mobx';
import AboutApi from 'api/about';
// class AboutStore {
//     @observable title = 'this is cbps about page';
// }
const AboutStore = observable({
    title: 'this is about page',
    ablist: [],
    cylist: [],
    // 获取首页数据
    async aboutList() {
        await AboutApi.aboutList().then((rs) => {
            console.log(rs.default.data)
            this.ablist = rs.default.data
        });
    },
    async cityList() {
        await AboutApi.cityList().then((rs) => {
            console.log(rs.default.data)
            this.cylist = rs.default.data
        });
    }
});
AboutStore.title = "C.S.";
//console.log(AboutStore.title,"kiyy")
//autorun(() => console.log(AboutStore.title,"kiy"));
export default AboutStore;
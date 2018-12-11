import { observable,action } from 'mobx';
import AboutApi from 'api/about';
// class AboutStore {
//     @observable title = 'this is cbps about page';
// }
const AboutStore = observable( {
    title: 'this is about page',
    list: [],

    // 获取首页数据
    aboutList() {
        this.list = AboutApi.aboutList();
    }
} );

export default AboutStore;
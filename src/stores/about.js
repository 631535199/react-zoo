import { observable,action } from 'mobx';
import HomeApi from 'api/home';
// class AboutStore {
//     @observable title = 'this is cbps about page';
// }
const AboutStore = observable( {
    title: 'this is about page',
    list: [],

    // 获取首页数据
    async aboutList() {
        console.log('test')
        this.list = await HomeApi.aboutList();
    }
} );

export default AboutStore;
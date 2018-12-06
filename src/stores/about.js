import { observable } from 'mobx';

class AboutStore {
    @observable title = 'this is cbps about page';
}

export default new AboutStore();
import Api from './Api';

export default {
  register(data) {
    return Api().post('/signup', data);
  },
};

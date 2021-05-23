import Axios from 'axios';

export default () => Axios.create({
  baseURL: 'http://localhost:3000/api/v1/users',
});

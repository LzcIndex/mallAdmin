// 所有类目的接口

import request from './request';

export default {
  async getCategoryList(params) {
    const resp = await request.get('/category/all', { params });
    return resp;
  },
};

// liaozhicheng_1619526643438

import request from './request';
// 获取产品列表
export async function getProductList({
  searchWord, category, page = 1, size = 10,
}) {
  const resp = await request.get('/products/all', {
    params: {
      searchWord,
      category,
      page,
      size,
    },
  });
  return resp;
}

// 添加产品
export async function addProduct(params) {
  const resp = await request.post('/products/add', params);
  return resp;
}

// 编辑产品列表信息
export async function editProduct(params) {
  const resp = await request.put('/products/edit', params);
  return resp;
}

// 删除产品信息
export async function deleteProduct(id) {
  const resp = await request.delete(`/products/${id}`);
  return resp;
}

// 商品详情
export async function getProductDetail(id) {
  const resp = await request.get(`/products/${id}`);
  return resp;
}

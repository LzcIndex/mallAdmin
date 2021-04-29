import request from './request';

// 修改用户信息
export default async function changeUser(changeUserInfo) {
  const resp = await request.put('/passport/changeUserInfo', changeUserInfo);
  return resp;
}

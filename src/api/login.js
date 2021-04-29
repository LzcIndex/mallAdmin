import request from './request';
// 登录
export async function login(loginInfo) {
  const resp = request.post('/passport/login', loginInfo);
  return resp;
}
// 注册
export async function register(logonInfo) {
  const resp = request.post('/passport/logon', logonInfo);
  return resp;
}
// 找回密码
export async function findBack(findBackInfo) {
  const resp = await request.post('/passport/findBack', findBackInfo);
  return resp;
}
// 获取验证码
export async function getCode(email) {
  const resp = await request.post('/passport/getCode', { email });
  return resp;
}

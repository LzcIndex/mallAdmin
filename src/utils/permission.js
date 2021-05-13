/**
 * 存储的是 角色对应的权限名称
 */
const roleToRoute = {
  coustomer: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
  ],
  admin: [
    {
      name: 'Product',
    },
    {
      name: 'ProductList',
    },
    {
      name: 'ProductAdd',
    },
    {
      name: 'Category',
    },
  ],
};

/**
  * 过滤没有权限的路由
  * @param {String} role
  * @param {Array} routes
  */
export default function getMenuRoute(role, routes) {
  const allowRoutesName = roleToRoute[role].map((item) => item.name);
  const resuleRoute = routes.filter((r) => {
    const obj = r;
    if (allowRoutesName.indexOf(obj.name) !== -1) {
      const { children } = obj;
      obj.children = children.filter((e) => allowRoutesName.indexOf(e.name) !== -1);
      return true;
    }
    return false;
  });

  return resuleRoute;
}

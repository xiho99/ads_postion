import { post } from './base';

/** 
 * 登录
 * 参数
 *    account 账号
 *    password 密码
 *    shop_id 门店id
 *    desk_id 台桌id
 *    ip wifi的ip
 *    mandatory 是否踢下线(0|1, 点登录时传0，弹了提示踢下线时传1)
 */
export function login(data: object) {
  return post('/login', data);
}

/**
 * 退出登录
 * 无参数
 */
export function logout() {
  return post('/logout');
}
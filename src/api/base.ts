import request from '@/utils/request';

export async function post(path: any, data = null) {
  // await new Promise((res) => setTimeout(() => res(1), 3000));
  return await request({
    url: path,
    method: 'post',
    data,
  });
}
export async function get(path: string, data = null) {
  // await new Promise((res) => setTimeout(() => res(1), 3000));
  return await request({
    url: path,
    method: 'get',
    data,
  });
}
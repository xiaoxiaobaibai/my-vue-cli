import request from '@/utils/request'

export function getData(data) {
  return request({
    url: '/service/a',
    method: 'get',
    data
  })
}
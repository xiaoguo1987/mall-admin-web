import request from '@/utils/request'
export function pressureUndergroundList(data) {
  return request({
    url:'/pressure/underground',
    method:'post',
    data:data
  })
}
export function updateStatus(id,params) {
  return request({
    url:'/flash/update/status/'+id,
    method:'post',
    params:params
  })
}
export function deleteFlash(id) {
  return request({
    url:'/flash/delete/'+id,
    method:'post'
  })
}
export function createFlash(data) {
  return request({
    url:'/flash/create',
    method:'post',
    data:data
  })
}
export function updateFlash(id,data) {
  return request({
    url:'/flash/update/'+id,
    method:'post',
    data:data
  })
}

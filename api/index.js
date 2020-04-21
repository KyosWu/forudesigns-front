import request from '../plugins/http'

// 获取所有文章
function getBanner() {
  return request(`/goods/banner`)
}
// 商品一级分类
function getCatPrimary() {
  return request(`/goods/categoryPrimary`)
}
// 创客作品展示区域
function getArtistFeatured() {
  return request(`/goods/featured`)
}

export default {
  getBanner,
  getCatPrimary,
  getArtistFeatured
}


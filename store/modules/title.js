import {
  INDEX_HEAD_TITLE,
  SHOP_HEAD_TITLE,
  ARTWORK_HEAD_TITLE,
  CREATE_HEAD_TITLE,
  ARTIST_HEAD_TITLE,
  BUSINESS_HEAD_TITLE
} from '../mutation-types'

const state = {
  Index_Head_Title: `Personalized Products, Unique Designs. Create, Buy and Sell Your Own Fashion - FORUDesigns`,
  Shop_Head_Title : `Shop Designs - FORUDesigns`,
  Artworks_Head_Title: `Artworks - FORUDesigns`,
  Create_Head_Title : `Create Designs - FORUDesigns`,
  Artist_Head_Title: `Artists - FORUDesigns`,
  Business_Head_Title: `Distribute & Dropshipping Online Customization Products`
}

const getters = {
  Index_Head_Title: state => state.Index_Head_Title,
  Shop_Head_Title: state => state.Shop_Head_Title,
  Artworks_Head_Title: state => state.Artworks_Head_Title,
  Create_Head_Title: state => state.Create_Head_Title,
  Artist_Head_Title: state => state.Artist_Head_Title,
  Business_Head_Title: state => state.Business_Head_Title
}

export default {
  state,
  getters
}

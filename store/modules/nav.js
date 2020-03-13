const state = {
  col : [
    {id: 1, name: 'animals', src: require('../../assets/images/nav-bar/col/1.jpeg')},
    {id: 2, name: 'art styles', src: require('../../assets/images/nav-bar/col/2.jpeg')},
    {id: 3, name: 'colors', src: require('../../assets/images/nav-bar/col/3.jpeg')},
    {id: 4, name: 'countries', src: require('../../assets/images/nav-bar/col/4.jpeg')},
    {id: 5, name: 'food', src: require('../../assets/images/nav-bar/col/5.jpeg')},
    {id: 6, name: 'funny', src: require('../../assets/images/nav-bar/col/6.jpeg')},
    {id: 7, name: 'big day', src: require('../../assets/images/nav-bar/col/7.jpeg')},
    {id: 8, name: 'home decor', src: require('../../assets/images/nav-bar/col/8.jpeg')},
    {id: 9, name: 'love', src: require('../../assets/images/nav-bar/col/9.jpeg')},
    {id: 10, name: 'nature', src: require('../../assets/images/nav-bar/col/10.jpeg')},
    {id: 11, name: 'pop culture', src: require('../../assets/images/nav-bar/col/11.jpeg')},
    {id: 12, name: 'view all collections', src: require('../../assets/images/nav-bar/col/12.jpeg')},
  ],
  menu: [
    {
      type:'男装',
      name:"Men's",
      child:[
        {name: "Men's All Over Print Board Shorts"},
        {name: "New Men's All Over Print T-shirt"},
        {name: "Men's All Over Print Zip Hoodie"},
        {name: "Men's All Over Print Polo Shirt"},
        {name: "White EVA High Top Canvas shoes"},
        {name: "White EVA Low Top Canvas shoes"},
        {name: "Mesh Heightening Rocking Shoes"},
        {name: "Men's All Over Print T-shirts"},
        {name: "Men's All Over Print Sweater"},
        {name: "New Black Mesh Knit Sneakers"},
        {name: "New White Mesh Knit Sneakers"},
        {name: "White High Top Canvas Shoes"},
        {name: "Black High Top Canvas Shoes"},
        {name: "Men's All Over Print Hoodie"},
        {name: "White Low Top Canvas Shoes"},
        {name: "Black Low Top Canvas Shoes"},
        {name: "Men's All Over Print Tank"},
        {name: "White Slide Sandals Shoes"},
        {name: "Black Slide Sandals Shoes"},
        {name: "White Mesh Knit Sneakers"},
        {name: "Men’s PU Lace Up Shoes"},
        {name: "White Running Shoes"},
        {name: "Black Running Shoes"},
        {name: "White Slip On Shoes"},
        {name: "Black Slip On Shoes"},
        {name: "Men's Bomber Jacket"},
        {name: "Mesh Running Shoes"},
        {name: "Men's Board Shorts"},
        {name: "Men's Bathrobe"},
        {name: "Leather Boots"},
        {name: "Slippers"},
        {name: "Mesh"},
        {name: "Flip Flops"},
        {name: "Crew Socks"},
        {name: "Waist Bags"},
        {name: "Slippers"},
]
    },
    {
      type:'男装',
      name:"Women's",
      child:[
        {name: "Men's All Over Print Board Shorts"},
        {name: "New Men's All Over Print T-shirt"},
        {name: "Men's All Over Print Zip Hoodie"},
        {name: "Men's All Over Print Polo Shirt"},
        {name: "White EVA High Top Canvas shoes"},
        {name: "White EVA Low Top Canvas shoes"},
        {name: "Mesh Heightening Rocking Shoes"},
        {name: "Men's All Over Print T-shirts"},
        {name: "Men's All Over Print Sweater"},
        {name: "New Black Mesh Knit Sneakers"},
        {name: "New White Mesh Knit Sneakers"},
        {name: "White High Top Canvas Shoes"},
        {name: "Black High Top Canvas Shoes"},
        {name: "Men's All Over Print Hoodie"},
        {name: "White Low Top Canvas Shoes"},
        {name: "Black Low Top Canvas Shoes"},
        {name: "Men's All Over Print Tank"},
        {name: "White Slide Sandals Shoes"},
        {name: "Black Slide Sandals Shoes"},
        {name: "White Mesh Knit Sneakers"},
        {name: "Men’s PU Lace Up Shoes"},
        {name: "White Running Shoes"},
        {name: "Black Running Shoes"},
        {name: "White Slip On Shoes"},
        {name: "Black Slip On Shoes"},
        {name: "Men's Bomber Jacket"},
        {name: "Mesh Running Shoes"},
        {name: "Men's Board Shorts"},
        {name: "Men's Bathrobe"},
        {name: "Leather Boots"},
        {name: "Slippers"},
        {name: "Mesh"},
        {name: "Flip Flops"},
        {name: "Crew Socks"},
        {name: "Waist Bags"},
        {name: "Slippers"},
      ]
    },
    {
      type:'男装',
      name:"Kids & Babies",
      child:[
        {name: "Men's All Over Print Board Shorts"},
        {name: "New Men's All Over Print T-shirt"},
        {name: "Men's All Over Print Zip Hoodie"},
        {name: "Men's All Over Print Polo Shirt"},
        {name: "White EVA High Top Canvas shoes"},
        {name: "White EVA Low Top Canvas shoes"},
        {name: "Mesh Heightening Rocking Shoes"},
        {name: "Men's All Over Print T-shirts"},
        {name: "Men's All Over Print Sweater"},
        {name: "New Black Mesh Knit Sneakers"},
        {name: "New White Mesh Knit Sneakers"},
        {name: "White High Top Canvas Shoes"},
        {name: "Black High Top Canvas Shoes"},
        {name: "Men's All Over Print Hoodie"},
        {name: "White Low Top Canvas Shoes"},
        {name: "Black Low Top Canvas Shoes"},
        {name: "Men's All Over Print Tank"},
        {name: "White Slide Sandals Shoes"},
        {name: "Black Slide Sandals Shoes"},
        {name: "White Mesh Knit Sneakers"},
        {name: "Men’s PU Lace Up Shoes"},
        {name: "White Running Shoes"},
        {name: "Black Running Shoes"},
        {name: "White Slip On Shoes"},
        {name: "Black Slip On Shoes"},
        {name: "Men's Bomber Jacket"},
        {name: "Mesh Running Shoes"},
        {name: "Men's Board Shorts"},
        {name: "Men's Bathrobe"},
        {name: "Leather Boots"},
        {name: "Slippers"},
        {name: "Mesh"},
        {name: "Flip Flops"},
        {name: "Crew Socks"},
        {name: "Waist Bags"},
        {name: "Slippers"},
      ]
    },
    // {
    //   type:'女装',
    //   name:"Women's",
    //   child:[
    //     {name: ''}
    //   ]
    // },
    // {
    //   type:'童装',
    //   name:"Kids & Babies",
    //   child:[
    //     {name: ''}
    //   ]
    // },
    // {
    //   type:'背包',
    //   name:"Bags",
    //   child:[
    //     {name: ''}
    //   ]
    // },
    // {
    //   type:'鞋',
    //   name:"Shoes",
    //   child:[
    //     {name: ''}
    //   ]
    // },
    // {
    //   type:'家庭',
    //   name:"Home & Decor",
    //   child:[
    //     {name: ''}
    //   ]
    // },
    // {
    //   type:'部件',
    //   name:"Accessories",
    //   child:[
    //     {name: ''}
    //   ]
    // },
  ]
}

const getters = {
}

const mutations = {

}

const actions = {

}


export default {
  state,
  mutations,
  actions,
  getters
}

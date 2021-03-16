'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Pike Place -100% Arabica',
        brandName: "Starbucks",
        roast: "Medium",
        price: 9.98,
        imageLink: "https://www.kroger.com/product/images/xlarge/front/0076211177858",
        description: "Pike Place Roast is well-rounded with subtle notes of cocoa and toasted nuts balancing the smooth mouthfeel",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "S'morey Time Ground Coffee Beans",
        brandName: "Bones Coffee Company",
        roast: "Medium",
        price: 17.99,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cFa5ULayw5VK-5PacBNCAq998PMZ9P0OYQ&usqp=CAU",
        description: "Perfect Campfire Flavor: Our S'morey Time captures the taste of smores roasted over a campfire; low acid coffee made from medium roast Arabica beans infused with chocolate and toasted marshmallow flavor with a hint of sweet graham cracker",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: 'High Caffeine',
        brandName: "Guru Coffee Company",
        roast: "Medium",
        price: 18.99,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeRS6cYhH2gPK2tIhotcH-ATZ2nEs7D-lmA&usqp=CAU",
        description: " Taste the difference of high-quality specialty coffee ground with our smooth-tasting, low acid, high caffeine medium roast blend, hand crafted with specially selected beans to give you a delicious caffeine boost that will help you take on the day",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: 'Arabica Coffee 8.8 oz',
        brandName: "Mount Hagen",
        roast: "Dark",
        price: 13.49,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbE6Kao5ooee7Ib5ahHec9_nbdfoNFdk_mbA&usqp=CAU",
        description: "100% ARABICA: Master blend hand-picked from the highlands of Papua New Guinea, Peru and Honduras",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Henry's Blend",
        brandName: "Seattle's Best Coffee",
        roast: "Dark",
        price: 4.49,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqNmboWDgTMgjZyJaVsRBELsSoxq-8SWBFhv21we0PiJhANS9GVHfXNorP6FncmAwV9Rm9azH&usqp=CAc",
        description: "Our Henry's Blend is a dark roasted coffee with complex and robust flavor and a well-rounded finish",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Major Dickason's Blend",
        brandName: "Peet's coffee",
        roast: "Dark",
        price: 11.44,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXmJgz-iYv10Xo-BAUZk5Hmbwc24xlhI-Rw&usqp=CAU",
        description: "MAJOR DICKASON’S BLEND: Conceived by Mr. Peet and his most discerning customer, Major Dickason’s Blend has become the coffee that epitomizes the rich, flavorful taste of Peet's",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Organic, Fair Trade, Arabica, Robusta",
        brandName: "DEATH WISH",
        roast: "Dark",
        price: 19.96,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Anx4DJpMuWVhLSajyBcXSDis55inxRncWA&usqp=CAU",
        description: "WORLD’S STRONGEST COFFEE: Our ground coffee beans will transform your basic cup of joe into a delicious, bold, and intense beverage that will revolutionize your morning.",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Guru Coffee Company",
        brandName: "Single Origin Colombia",
        roast: "Dark",
        price: 17.99,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUO7fx7wxVt6Q30vNmtEIT3Oel8xV_8J12jg&usqp=CAU",
        description: "Our Henry's Blend is a dark roasted coffee with complex and robust flavor and a well-rounded finish",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Caribou Blend",
        brandName: "Caribou Coffee",
        roast: "Medium",
        price: 10.98,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT3wPR4tok7V6kGAXgY649r9DpycmpVH-FQ&usqp=CAU",
        description: "Start the morning with our light breakfast blend, with a sweet caramel & nut finish. Flavorful Vanilla Hazelnut Dreamstate or Chocolate Wonder.",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Toasted Hazalnut Flavored",
        brandName: "Seattle's Best Coffee",
        roast: "Medium",
        price: 4.47,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwAuIR3U6wenpYRamDKAfBXoniKVKGEKrGazCnjnsZM-jOsS-xIqETF4wVph9mArqx5IdQfFY&usqp=CAc",
        description: "Our Toasted Hazelnut Flavored Coffee is sweetly aromatic with nutty notes of roasted hazelnut",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Smart Ass",
        brandName: "Kicking Horse Coffee",
        roast: "Medium",
        price: 8.21,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1XNiK4BQn8gUeeieAL0BJg1WeOS9aV-aIzA&usqp=CAU",
        description: "Medium roast, Cheeky, bright, and precocious. A bright, chocolaty concoction for the smart thinking, deep drinking, good at their game in the morning crowd",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        name: "Flavored Ground, French Vanilla",
        brandName: "Dunkin' Donuts Coffee",
        roast: "Light",
        price: 4.90,
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymQQniJfAqHUOK3H1-QnzQWAyzyS5XZga6YBLnR1_-TqlBBhbhczIwSCPag&usqp=CAc",
        description: "This Light roasted coffee is packed full of Vanilla flavor",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          name: "Costa Rica Ground Coffee",
          brandName: "Gevalia Special Reserve",
          roast: "Dark",
          price: 6.19,
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL__SQRsLLHygMUELsMbcfJxHL731CBCcxKwMNDrfwTt4QwOLR58dLGgrwaMtLCb-wPESYOFA&usqp=CAc",
          description: "Dark roast Costa Rican coffee features fruit and citrus notes and medium acidity",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vanilla Macadamia Nut",
          brandName: "Kauai Hawaiian Coffee",
          roast: "Medium",
          price: 6.98,
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc47KgXdDvwNFgpT263kkna3jJeuuiusFUNCkIW6G0EX6f7kjF8_ylS8d3FQ&usqp=CAc",
          description: "We combined vanilla beans with toasted macadamia nuts and 100% Arabica coffee beans for an authentic taste of Hawaii.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Mentalist",
          brandName: "BULLETPROOF",
          roast: "Medium",
          price: 14.99,
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjULvDVRGUrDiUtvxW7qiKw2353O8rO2WS1Q&usqp=CAU",
          description: "Medium Dark Ground Coffee: Full-bodied coffee with cherry sweetness and notes of almond and caramel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Smooth & Sweet Blend",
          brandName: "Bizzy Cold Brew",
          roast: "Dark",
          price: 14.98,
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvrysQfxXxDrZdgWZSS_y1e-hsALSS6DZ2w&usqp=CAU",
          description: "ENGINEERED FOR COLD BREW - Coarse ground coffee optimized for cold brewing to give you a consistent, extra smooth cold brew.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ATIKEM",
          brandName: "Organic Ethiopian Sidamo",
          roast: "Medium",
          price: 15.00,
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVFAB0Ur_M1fzvnPdBmmvFGR7OmFng89_3Q&usqp=CAU",
          description: "100% Premium Arabica Ground Coffee. We take great pride in our premium USDA Certified Organic single origin coffee beans.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicory",
          brandName: "Cafe Du Monde Coffee",
          roast: "Darl",
          price: 7.49,
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypP0P9M88zUwhCdu1l8bYYiOY3WPAE1VZQCtv9Qj8awCUVIZriVx-hacmdqpkEhHLChI5adWo&usqp=CAc",
          description: "This popular New Orleans landmark has been located in the French Market since the early 1860's.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Extreme-Caffeine Coffee",
          brandName: "The Red Goat",
          roast: "Light",
          price: 13.90,
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoyIuB2IVj1cW_nyAakwqwVmffhB6Ox66H1Q&usqp=CAU",
          description: "Our roasted coffee beans will give you extra energy with out sacrificing flavor. Your cup will be smooth and fresh.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Caramel Vanilla Cream",
          brandName: "Green Mountain Coffee",
          roast: "Light",
          price: 6.99,
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDtVBW--QBGfS0Or_fnyHAVbpi0goN26dnA&usqp=CAU",
          description: "A decadent blend of buttery caramel, toasty brown sugar, and creamy vanilla flavors.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Breakfast Blend Ground Coffee",
          brandName: "Allegro Coffee",
          roast: "Light",
          price: 9.29,
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcyI93OJM-Gl4vm_wr9yZ-4iblMyUxORc5CBrpPcnPjSgcncy376_OfNPoUElgWOe0daT4ECoC&usqp=CAc",
          description: "We have nothing on this product right now sorry :(",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Girls Run The World",
          brandName: "Gorongosa National Park",
          roast: "Medium",
          price: 15.99,
          imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4zB0uVWc0s4_Uz_OtjLbaDbMi2ROSWxwQA&usqp=CAU",
          description: "FLAVOR PROFILE: Notes of toasted almonds, milk chocolate, and lemon bring a unique approach to a common roast.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

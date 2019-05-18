const mongoose = require('mongoose');
const env = require('../config/environments');
const Thing = require('../models/thing');
mongoose.connect(env.dbUri);

const thingData = [
  {
    item: 'cricket',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Pietersen_batting_at_Lord%27s%2C_2011.jpg',
    heLikesIt: true
  },
  {
    item: 'Mark Wahlberg',
    image: 'https://m.media-amazon.com/images/M/MV5BMjE1MjYwNTE2M15BMl5BanBnXkFtZTYwNTI0NjI1._V1_UX214_CR0,0,214,317_AL_.jpg',
    heLikesIt: true
  },
  {
    item: 'Young Will Ferrel ',
    image: 'https://images.ecosia.org/zjzqHCQ15o1njHs2c45y2FhQ8NI=/0x390/smart/http%3A%2F%2Fia.media-imdb.com%2Fimages%2FM%2FMV5BMjA2MjYyMTc4MF5BMl5BanBnXkFtZTYwNTAyMTE2._V1_SX640_SY720_.jpg',
    heLikesIt: true
  },
  {
    item: 'Old Will Ferrel ',
    image: 'https://images.ecosia.org/2YusFEKOVbF21Im4j2jK_PPsHpY=/0x390/smart/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Fff%2FWill_Ferrell_Deauville_2014.jpg',
    heLikesIt: false
  },
  {
    item: 'Marmite',
    image: 'https://images-na.ssl-images-amazon.com/images/I/911lwZSujBL._SX342_.jpg',
    heLikesIt: false
  },
  {
    item: 'Winter Wonderland',
    image: 'https://cdn.londonandpartners.com/asset/winter-wonderland-in-hyde-park_winter-wonderland-in-hyde-park-image-courtesy-of-winter-wonderland_308c99a9ddcee2753011956c102d9911.jpg',
    heLikesIt: false
  },
  {
    item: 'Gin',
    image: 'https://okanaganspirits.com/wp-content/uploads/2017/03/OS-Gin-Essential-Collection-HR.jpg',
    heLikesIt: true
  },
  {
    item: 'Family Guy',
    image: 'https://www.citytv.com/wp-content/uploads/2018/09/family-guy-11-all-shows.jpg',
    heLikesIt: false
  },
  {
    item: 'Nandos',
    image: 'https://www.oceanterminal.com/media/ot-website-nandos.jpg',
    heLikesIt: false
  },
  {
    item: 'South Park',
    image: 'https://assets3.thrillist.com/v1/image/1779309/size/tmg-article_default_mobile.jpg',
    heLikesIt: true
  },
  {
    item: 'Feminism',
    image: 'https://images.theconversation.com/files/205114/original/file-20180206-88788-hlv1dr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
    heLikesIt: true
  },
  {
    item: 'Donald Trump',
    image: 'https://static.politico.com/dims4/default/bbb3489/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fda%2Fc5%2Ff7866ff24d3fbe79cf69d6442149%2F181126-trump-gty-773.jpg',
    heLikesIt: false
  },
  {
    item: 'Golf',
    image: 'http://www.visitscotland.com/cms-images/destinations/dumfries-and-galloway/gatehouse-golf-club?view=Standard',
    heLikesIt: false
  },
  {
    item: 'Crazy Golf',
    image: 'http://www.mini-crazy-golf.co.uk/wp-content/uploads/2017/01/5starsand.jpg',
    heLikesIt: true
  }
];

Thing.collection.drop();

Thing.create(thingData)
  .then(things => {
    console.log(`Created ${things.length} things`);
    mongoose.connection.close();
  });

import React, { Component } from 'react';
import Newscard from './newscard';

export default class News_Items extends Component {
  articals= [
    {
      "source": {
        "id": "nbc-news",
        "name": "NBC News"
      },
      "author": "The Associated Press",
      "title": "US finishes deportation of eight men to South Sudan after weeks of legal wrangling - NBC News",
      "description": "Eight men deported from the United States in May and held under guard for weeks at an American military base in the African nation of Djibouti while their legal challenges played out in court have now reached the Trump administration’s intended destination, w…",
      "url": "https://www.nbcnews.com/politics/immigration/us-finishes-deportation-eight-men-south-sudan-weeks-legal-wrangling-rcna217078",
      "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-07/250705-noem-rm-2891d1.jpg",
      "publishedAt": "2025-07-06T00:57:00Z",
      "content": "WASHINGTON Eight men deported from the United States in May and held under guard for weeks at an American military base in the African nation of Djibouti while their legal challenges played out in co… [+2358 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": null,
      "title": "Liverpool and Portugal players join family in mourning Diogo Jota and his brother at funeral - AP News",
      "description": "Players from Liverpool and Portugal’s national team joined family and friends for the funeral of their teammate Diogo Jota and his brother. The service was held in the Portuguese town of Gondomar two days after they died in a car crash in Spain. Liverpool cap…",
      "url": "https://apnews.com/article/diogo-jota-funeral-portugal-liverpool-7867d71255943696db9aa2d9ffdee9f6",
      "urlToImage": "https://dims.apnews.com/dims4/default/ddb66bf/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2e%2F24%2F2a3a38b62cae1f48eb500bd82d12%2F2e4de0e2e7ca4044b661f0e14db066cc",
      "publishedAt": "2025-07-05T19:58:00Z",
      "content": "GONDOMAR, Portugal (AP) Players from Liverpool and Portugals national team joined family and friends for the funeral of their teammate Diogo Jota and his brother on Saturday, two days after the sibli… [+3382 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "ABC News - Breaking News, Latest News and Videos",
      "title": "Mel B marries Rory McPhee in star-studded ceremony at St. Paul's Cathedral - ABC News - Breaking News, Latest News and Videos",
      "description": null,
      "url": "https://abcnews.go.com/GMA/Culture/mel-marries-rory-mcphee-star-studded-ceremony-st/story?id\\\\u003d123502110",
      "urlToImage": null,
      "publishedAt": "2025-07-05T19:15:43Z",
      "content": null
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "ABC News - Breaking News, Latest News and Videos",
      "title": "Tropical storm warnings extended up to North Carolina as Chantal approaches - ABC News - Breaking News, Latest News and Videos",
      "description": null,
      "url": "https://abcnews.go.com/US/tropical-storm-warnings-extended-north-carolina-chantal-approaches/story?id\\\\u003d123505008",
      "urlToImage": null,
      "publishedAt": "2025-07-05T18:45:00Z",
      "content": null
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": null,
      "title": "OPEC+ to boost oil production by 548,000 barrels per day in August - AP News",
      "description": "Eight members of the OPEC+ alliance of oil exporting countries say they will boost production by 548,000 barrels per day in August in a move that could further reduce gas prices. The group that includes Saudi Arabia and Russia made the decision at a virtual m…",
      "url": "https://apnews.com/article/opec-boosts-oil-production-891365fcd8f487c4d5f4d2dab1868c78",
      "urlToImage": "https://dims.apnews.com/dims4/default/dcac1a4/2147483647/strip/true/crop/700x394+0+28/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F90%2F29%2F4e3c1cc7446089a9101a7bdff4c8%2Fdefaultshareimage-copy.png",
      "publishedAt": "2025-07-05T18:41:00Z",
      "content": "NEW YORK (AP) Eight members of the OPEC+ alliance of oil exporting countries say they will boost production by 548,000 barrels per day in August in a move that could further reduce gas prices this ye… [+1074 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "East Idaho News one also" 
      },
      "author": "EastIdahoNews.com Staff",
      "title": "125,000-year-old ‘fat factory’ run by Neanderthals discovered in Germany - East Idaho News",
      "description": "(CNN) — Stone Age humans living by a lake in what’s now Germany systematically processed animal carcasses for fatty nutrients — essentially running what scientists describe as a “fat factory” to boil bones on a vast scale, according to new research. Archaeolo…",
      "url": "https://www.eastidahonews.com/2025/07/125000-year-old-fat-factory-run-by-neanderthals-discovered-in-germany/",
      "urlToImage": "https://s3.us-west-2.amazonaws.com/assets.eastidahonews.com/wp-content/uploads/2025/07/fat-factory.jpg",
      "publishedAt": "2025-07-04T18:30:00Z",
      "content": null
    }
  

  ];
   constructor(){
      super();
    this.state= {
      articals : this.articals,
      loading : false
      
    }
      
    }

  render() {
   
    return (
      <div>
        <div className='container my-3 '>
            <h2>The NewsHub's Top HeadLines</h2>
            <div className='row mt-3'>
                {this.state.articals.map((element)=>{
                  return <div className='col-md-4' key={element.url}>
                <Newscard discription={element.description} text={element.title} imageUrl={element.urlToImage}/></div>}
                            )
                }
            </div>
         </div>
      </div>
    );
  }
}

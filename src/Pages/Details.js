import React from "react";
import { createContext } from "react";
import { useState } from "react";
// import Home from './Home';
// import Hollywood from './Hollywood';
// import Bollywood from './Bollywood';

export const Store = createContext();
const Details = (props) => {
  const [details, setDetails] = useState([
    {
      id: 1,
      title: "My Favourite Movive",
      img: "https://th.bing.com/th/id/OIP.tsJrAzc0RWBpw_X3hcc4mQHaEo?pid=ImgDet&rs=1",
      category: "Hollywood",
      description:
        "Considered as one of the most successful superhero movies ever made Spider-Man is a superhero film adaptation of one of Stan Lee's most popular Marvel Comics.",
    },

    {
      id: 2,
      title: "Hacked Movie",
      img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/02/hacked-movie-review-hina-khan-makes-a-promising-debut-in-this-desi-dramatic-mashup-of-you-black-mirror-1.jpg",
      category: "Hollywood",
      description:
        "Hacked (2020) is but a cancerous movie reeking of extremely toxic pseudo-feminism At the outset, please be so gracious as to elucidate upon the genre of this film Is it science fiction? Is it women empowerment? Does it pertain to social issues? Or is it but a haphazard amalgamation of all of them? ",
    },
    {
      id: 3,
      title: "Doctor Strange",
      img: "https://1.bp.blogspot.com/-9VwtcOvJz1Q/Xz07pVVoUuI/AAAAAAAAAeU/kk0yE0AE2MoZSYeGGEb6LGs8KSPnW5xhACPcBGAYYCw/s1600/20200819_194704.jpg",
      category: "Hollywood",
      description:
        "For all of its wondrous world-building and trippy effects, Doctor Strange isn’t the evolutionary step forward for Marvel that it needs to be storytelling-wise. Underneath all of its improvements, the core narrative is something we’ve seen countless times",
    },
    {
      id: 4,
      title: "Corporate Movie",
      img: "https://upload.wikimedia.org/wikipedia/en/6/67/Corporate%28Film%29.jpg",
      category: "Hollywood",
      description:
        "Corporate centers around the power games between two industrialists, The Sehgal Group of Industries (SGI) owned by Vinay Sehgal and the Marwah Group of Industries (MGI) owned by Dharmesh Marwah. The two companies are traditional rivals in the food and beverages products business. Nishigandha Nishi  Dasgupta is the vice-president of SGI, while Vinay Sehgal's brother-in-law Ritesh joins in later as senior vice president",
    },
    {
      id: 5,
      title: " Horror Movive ",
      img: "https://i.ytimg.com/vi/zWHqaLV19EI/maxresdefault.jpg",
      category: "Hollywood",
      description:
        "Clare Kramer, Thomas Calabro, Tilky Jones, and Allison McAtee in The Wrong House (2016) ",
    },
    {
      id: 6,
      title: "EveryThing EveryWhere All at once ",
      img: "https://www.avsforum.com/attachments/everything-everywhere-all-at-once-header-jpg.3307941/",
      category: "Hollywood",
      description:
        "Yeoh is the anchor of the film, given a role that showcases her wide range of talents, from her fine martial art skills to her superb comic timing to her ability to excavate endless depths of rich human emotion often just from a glance or a reaction.Full review",
    },
    {
      id: 7,
      title: "DOCTORG",
      img: "https://th.bing.com/th/id/OIP.XIDasKmEV5ZdokOKY3fxhgHaDt?pid=ImgDet&rs=1",
      category: "Bollywood",
      description:
        "Jo cheez mere paas hai hi nahi, uska ilaaj kaise karoon,Doctor G’ has constantly been in the headlines for all the right reasons. Be it the groovy songs, talented star cast or socially relevant theme, the film looks like a promising watch. ",
    },
    {
      id: 8,
      title: "PATHAAN",
      img: "https://th.bing.com/th/id/OIP.dqyvtNk-VTLlLCpJrn67xwHaEK?pid=ImgDet&rs=1",
      category: "Bollywood",
      description:
        "P.S. –* पार्टी अगर पठान के घर पे रखोगे तो पठान तो आयेगा ना!? और फटाखे भी लाएगा।",
    },
    {
      id: 9,
      title: "Farzi",
      img: "https://images.ottplay.com/images/farzi-new-poster-211.jpg",
      category: "Bollywood",
      description:
        "The brooding intensity and impish charm of Shahid Kapoor and Vijay Sethupathi provide plenty of goosebumps moments and a lot to chuckle about, but eventually the series leaves one with the feeling of being sold a dummy.",
    },
    {
      id: 10,
      title: "Pk",
      img: "https://www.india.com/wp-content/uploads/2014/12/aamir-khan-pk3.jpg",
      category: "Bollywood",
      description:
        "P.K.: Which god should I believe? You all say that, it's only one god. I say, no... there are two gods. One is the one who created us all. The other one is the one created by people like you. We know nothing about the god who made us all. But the god people like you made is exactly like you... liar, pretend to act, giving false promises, meeting rich people sooner, letting the poor neglected, happy when get praised... People are afraid to even say a word. My right number is very simple, the God who created us all, put faith in Him. And the god like you created, the duplicate god, destroy it.",
    },
    {
      id: 11,
      title: "MS Dhoni",
      img: "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY266_CR2,0,180,266_.jpg",
      category: "Bollywood",
      description:
        "Mahendra Singh Dhoni is a goalkeeper in school football team. Bannerjee a school cricket coach asks him to join his cricket team and practice daily with him for two hours time passes and he becomes a big state-level cricketer, but for a long time luck doesn't favor him to become a member of the Indian Cricket team. Dhoni takes a job in Indian Railways as a ticket-checker and plays cricket for the railways; after four years he gets selected for the Indian Cricket team and turns out to be one of the best cricketing captains in the history of Indian Cricket.",
    },
    {
      id: 12,
      title: "GOODBYE",
      img: "https://m.media-amazon.com/images/M/MV5BYzc4ZTAxMmMtZjdmMS00YWRmLTlmNDUtMjBiNGYzNzJjZTJhXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
      category: "Bollywood",
      description:
        "Goodbye is a 2022 Indian Hindi-language family comedy-drama film written and directed by Vikas Bahl and produced by Bahl, Viraj Savant, Ekta Kapoor and Shobha Kapoor under their banners Good Co, Balaji Motion Pictures and Saraswati Entertainment ",
    },
    {
      id: 13,
      title: "Gwarighat Temple",
      img: "https://i.ytimg.com/vi/QElffy7ZnMU/maxresdefault.jpg",
      category: "Jabalpur",
      description: "Its a good temple, almost in the mid of the river. You can go there by a boat. It's spectacular in the evening when devotees float the diyas in the evening",
    },
    {
      id: 14,
      title: "Bhedhaghat WaterFall",
      img: "https://th.bing.com/th/id/OIP.Y21bPJmxqMuh9Xa7_4dxiAHaFQ?pid=ImgDet&rs=1",
      category: "Jabalpur",
      description: "Bhedaghat is a town and a nagar panchayat in Jabalpur district in the state of Madhya Pradesh, India. It is situated by the side of river Narmada and is approximately 20 km from Jabalpur city. Bhedaghat is famous for the high marble rocks making a valley through which river Narmada flows. The place also has a waterfall, known as Dhuandhar Falls (literally meaning a stream of smoke, because of its appearance).",
    }, {
      id: 15,
      title: "Bhudi Khermai ma Temple ",
      img: "https://i.ytimg.com/vi/aMelXVrUn64/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AZ4LgAKAFIoCDAgAEAEYZSBHKEMwDw==&rs=AOn4CLAtlETwZNiWS3bVcZXQgVO9kkqL7A",
      category: "Jabalpur",
      description: "आदिकाल से भारत में मात्र-शक्ति की उपासना अत्यंत श्रद्धा, विश्वास एवं अगाध आस्था के साथ होती रही है | श्रधालु पूजा स्थलों एवं सिद्ध पीठों में ठोकर साधनों एवं भिन्न पूजा पद्धतियों के द्वारा मनोवांछित फल पाते रहे है | मात्र देवी भाव, पितृ देवो भाव , आचार्य देवो भव आदि वेदमंत्रो में प्रथम स्थान माता का है | नवरात्र पर्वों में मात्र उपासना अपने चरमोत्कर्ष पर पहुंच जाती है, स्वयं भगवान् शिव ने कहा है की –",
    }, {
      id: 16,
      title: "Ramuji Water Park Jabalpur",
      img: "https://i.ytimg.com/vi/Y4fzr5qv46M/maxresdefault.jpg",
      category: "Jabalur",
      description: "#waterpark ,Address- Near Patan By Pass Jabalpur,432001 M.P",
    }, {
      id: 17,
      title: "Niddan Fall Water Fall",
      img: "https://i.ytimg.com/vi/iCdPpeh_kSw/maxresdefault.jpg",
      category: "Jabalpur",
      description: "Nidan Falls The waterfall is located 30 kilometres away from Jabalpur and trickles down on the rocks from a great height. The rocks form a staircase-like structure preventing the harsh flow of the water and make the waterfall a pleasing sight to enjoy. The falls are about 1 kilometre away from the main road and can be reached by walking.",
    }, {
      id: 18,
      title: "Ganesh Mandir",
      img: "https://th.bing.com/th/id/OIP.o5GudR7KNSPx6sqUIh0rxwHaHa?pid=ImgDet&rs=1",
      category: "Jabalpur",
      description: "Supteshwar Ganesh Mandir Ratan Nagar, Jabalpur Madhya Pradesh is the one of the best worship place in Jabalpur MP. Supteshwar Ganesh Mandir's lord Ganesha idol is natural rock cut temple. It fulfill the wishes of bhakts and Ganesha fans.",
    }, {
      id: 19,
      title: "Madan Mahal Fort",
      img: "https://1.bp.blogspot.com/-1Zg1_jHTdpw/TrzfqiZS3fI/AAAAAAAAC4I/_RBubvKsA04/s1600/DSC06647.JPG",
      category: "Jabalpur",
      description: "Madan Mahal Fort in Jabalpur, Madhya Pradesh, stands as testimony to the lives of the rulers who ruled Jabalpur for a good number of years in the 11th century AD. Situated at a hilltop, a couple of kilometres away from the city, Madan Mahal Fort was built by the Raja Madan Singh.",
    }, {
      id: 20,
      title: "Bhawartal Garden ",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/10/5e/10/21/bhawartal-garden.jpg",
      category: "Jabalpur",
      description: "Located in the heart of the Jabalpur city in Old Napier Town, Bhawartal Garden is a public park replete with slides, swings, toy trains and verdant greenery all around. The park is popular amongst the elderly for yoga sessions and early morning walks. And during the day the park is thronged by kids and families for picnics and recreation.",
    },
    {
      id: 21,
      title: "ISKCON Temple",
      img: "https://th.bing.com/th/id/OIP.2ApL4qjnCjAe8B_Ko4czCgHaE8?pid=ImgDet&rs=1",
      category: "Jablpur",
      description: "ISKCON Jabalpur temple is a place of worship and service to Lord Radha Krishna. We all are part and parcels of Supreme Lord Krishna. Join devotees to serve Krishna. ISKCON was founded by Srila Prabhupada to provide a systematic worshipping platform and to spread Sanatan Dharma Culture which we have to persist it.",
    }, {
      id: 22,
      title: "Gurudhwara",
      img: "https://i.ytimg.com/vi/bQI3cWzRgSw/maxresdefault.jpg",
      category: "Jabalpur",
      description: "Gwarighat serves as a famous ghat of Narmada River. The presence half-submerged temple dedicated to Maa Narmada made this place even more special. Although half of the temple always drowns in water, it does not stop the temple's devotees from offering daily prayers and holding beautiful aarti in the evening which is attended by a huge number of people. Hindus perform their cremation rites here due to the presence of Narmada Sidh Kund, near Uma Ghat, wherein renowned Rishis performed Tapas",
    },

    {
      id: 22,
      title: "Tilwara Ghat",
      img: "https://i.ytimg.com/vi/4kdMSNZO_pw/maxresdefault.jpg",
      category: "Jabalpur",
      description: "This is now a regular Ghat for Darshan of Narmada ji, but still due to convenience in travel (as it is located on the highway ) this Ghat remains popular, and hence crowded .at this place you can see the magnificent view of river, and at the shallow river bank you can have a Holly dip also. the river is mostly clean and full of water almost all months .",
    },
    {
      id: 23,
      title: "TAGORE GARDEN",
      img: "https://i.ytimg.com/vi/mGY0dgAtb8I/maxresdefault.jpg",
      category: "Jabalpur",
      description: "I remember myself enjoying my summers here back in 2021- 2023. And eventually, the crowd that appeared in the coming years kind of degraded the whole place. It is still beautiful when one wishes to quietly go and sit in a garden, but needs serious caring for.People should be taught to use the garden equipments cautiously rather than thinking that they own it just for themselves and spoiling it.",
    },




    {
      id: 23,
      title: "PANEER DOSA",
      img: "https://www.nandanmsd.com/wp-content/uploads/2020/10/paneer-chilli-dosa.jpg",
      category: "Food",
      description: "In India, paneer is a staple food ingredient for every vegetarian, as well as for non-vegetarians. It is tasty, easy to make and includes a good amount of protein to our everyday diet.",
    }, {
      id: 24,
      title: "PANEER PIZZA",
      img: "https://th.bing.com/th/id/OIP.BUaTUzBg_j0w6FH2GJEYkwHaHa?pid=ImgDet&rs=1",
      category: "Food",
      description: "Paneer pizza is a delicious pizza that is made with paneer (Indian cottage cheese) as the main topping. It is a fusion of Indian and Italian flavors, and is usually made with a whole wheat crust. The paneer is marinated with Indian spices and yogurt, and then mixed with pizza sauce, onions, capsicum, spinach, and other vegetables. The pizza is then topped with mozzarella cheese and baked to perfection.",
    }, {
      id: 25,
      title: "COLD COFFEE",
      img: "https://www.thedinnerbite.com/wp-content/uploads/2020/06/Iced-instant-coffee-recipe-img-19-1-of-1.jpg",
      category: "Food",
      description: "Cold coffee is a popular chilled beverage that is perfect for a warm day. It is made by blending coffee, sugar, and milk together with ice to create a refreshing and rich beverage, with a delightfully frothy layer on top",
    }, {
      id: 26,
      title: "RAJSTHANI THALI",
      img: "https://i.redd.it/e9yo0utefpo61.jpg",
      category: "Food",
      description: " A traditional Rajasthani thali is a platter of several vegetarian dishes served in silver or copper ware. The dishes include ker sangri, gatte ki sabzi, Rajasthani kadhi, panchmela dal, and dal baati churma. The thali also features rotis made of bajra, jowar, and makka, deep-fried kachoris, pulaos, raitas, pickles, and relishes. The meal ends with sweets such as mohanthal and jalebis ",
    }, {
      id: 27,
      title: "PANNER FRIED RICE",
      img: "https://bing.com/th?id=OSK.337d4dcc736df4959bbcacb8f92bbd7a",
      category: "Food",
      description: "The first paneer fried rice recipe I have shown in this post is a fusion dish made in the Chinese style but with typical Indian spices. So it is super flavorsome, delicious and spicy with a mélange of Indian and Chinese flavors. The second recipe is the kids’ version and I have not used any bottled sauce for that."
    }, {
      id: 28,
      title: "Paneer Pulao",
      img: "https://r2.community.samsung.com/t5/image/serverpage/image-id/2170990iCDC5D9696CF1B635/image-size/large?v=v2&px=999",
      category: "Food",
      description: "Paneer Pulao Recipe in Hindi http://goo.gl/49cPFc Also known as paneer biryani recipe, paneer pulao recipe in hindi, Cottage Cheese Pulao",
    }, {
      id: 29,
      title: " Latest Hacking Computer",
      img: "https://th.bing.com/th/id/OIP.h5MxJtDZZJp5xV8et-HZ2QHaEy?pid=ImgDet&rs=1https://th.bing.com/th/id/OIP.h5MxJtDZZJp5xV8et-HZ2QHaEy?pid=ImgDet&rs=1",
      category: "Technology",
      description: "Best Computers for Hacking. If you’re looking for a computer that is good for hacking, there are a few factors to consider. -Factors to Consider: Speed, processing power, and memory are all important factors when choosing a computer for hacking",
    }, {
      id: 30,
      title: "Super Computer",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh8dSVcsR53jglNxcEnwoZ7escCAKtymuZiPlafOcq0L0UM5UOBx884pB7oxCmgfm9iBxsWT7LqL-bpjS8si1kZUbNdFL0wTgXz3DOjTBsH0EkOpPSxVmvfT3BX-VM0NZhP-Gb6R6C27fkIIqM2ZBy-RwyjUTl6psx1QfU-QF2iRbAI3d1bavhCDovjw/s959/How%20Businesses%20Can%20Benefit%20with%20Data%20Center%20India%20-%2014884%20_%20MyTechLogy.jpg",
      category: "Technology",
      description: "A supercomputer is a computer with a high level of performance as compared to a general-purpose computer. The performance of a supercomputer is commonly measured in floating-point operations per second (FLOPS) instead of million instructions per second (MIPS). Since 2017, supercomputers",
    }, {
      id: 31,
      title: "Foldable Phone",
      img: "https://images1.livehindustan.com/uploadimage/library/2021/12/15/16_9/16_9_1/twitter_nextrift_1639562913.jpg",
      category: "Technology",
      description: "The Samsung Galaxy Fold series has gone unchallenged in India for the past few years, and we recently saw Samsung really stepping up its game with the Galaxy Z Fold 3 (Review). However, Oppo has just revealed one big surprise before we wrap up 2021, which gives us enough reason to rethink whether the Galaxy Z Fold indeed represents the best way to make a large-screen foldable. The Oppo Find N was unveiled a week ago as the company's first commercially available foldable smartphone, and even though it is on sale only in China, Oppo India sent us a unit to play with for a short while.",
    }, {
      id: 32,
      title: "Chandryan 3",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-07/chandrayaan_3_b.jpg?VersionId=KMvLAnlt_Dz2TqDevdxD3p7UlsEUmveF",
      category: "Technology",
      description: "By India Today Science Desk: Chandrayaan-3 has commenced its journey to the launchpad, encapsulated aboard the Launch Vehicle Mark-3 (LVM-3) at the Satish Dhawan Space Centre in Sriharikota.",
    }, {
      id: 33,
      title: "Artificial Intelligence",
      img: "https://th.bing.com/th/id/OIP.TKziVGMgadot4JUwINii7gHaE8?pid=ImgDet&rs=1",
      category: "Technology",
      description: "Artificial intelligence (AI), the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings. The term is frequently applied to the project of developing systems endowed with the intellectual processes characteristic of humans, such as the ability to reason, discover meaning, generalize, or learn from past experience.",
    }, {
      id: 34,
      title: "Indian Ship",
      img: "https://static.abplive.com/wp-content/uploads/2020/08/31131924/indian-navy.jpg",
      category: "Technology",
      description: "New Delhi: Almost two and a half months after the Galwan Valley clash which led to death of as many as 20 Indian soldiers in eastern Ladakh, the Indian Navy has recently sailed one of its frontline warship to the South China sea. As per reports, the move by Indian Navy came as a displeasure to the Chinese side who raised objection over the development during the talks between two nations",
    },

    {
      id: 35,
      title: "The Money Heist",
      img: "",
      category: "Hollywwood",
      description: "",
    }, {
      id: 36,
      title: "The Money Heist",
      img: "",
      category: "Hollywwood",
      description: "",
    }, {
      id: 37,
      title: "The Money Heist",
      img: "",
      category: "Hollywwood",
      description: "",
    }, {
      id: 38,
      title: "The Money Heist",
      img: "",
      category: "Hollwywood",
      description: "",
    }, {
      id: 39,
      title: "The Money Heist",
      img: "",
      category: "Hollywwood",
      description: "",
    }, {
      id: 40,
      title: "The Money Heist",
      img: "",
      category: "Hollywwood",
      description: "",
    },

  ]);
  return (
    <div>
      <Store.Provider value={[details, setDetails]}>
        {props.children}
      </Store.Provider>
    </div>
  );
};

export default Details;

const users = [
  {
    num: '165a5baa-3846-4833-b19a-eba714077acf',
    username: 'Gkolb',
    password: '123',
    email: 'gkolb@yahoo.com',
    avg_rating: '4.72',
    rating_count: 52,
    city: 'Denver',
    phone_number: '13085971104',
  },
  {
    num: '1406b551-995d-4cba-8734-28a50a4e9f1a',
    username: 'BLittle',
    password: '456',
    email: 'brandon@testing.com',
    avg_rating: '5.00',
    rating_count: 4,
    city: 'Indianapolis',
    phone_number: '19834128082',
  },
  {
    num: '17682716-7c8c-4130-a8c2-692c878110ca',
    username: 'JFord',
    password: '789',
    email: 'joe@testing.com',
    avg_rating: '1.1',
    rating_count: 101,
    city: 'Los Angeles',
    phone_number: '17778622992',
  },
  {
    num: '2baf363a-8285-4d83-92ba-8f5a22bba152',
    username: 'KMaitski',
    password: 'abc',
    email: 'kevin@testing.com',
    avg_rating: '4.46',
    rating_count: 64,
    city: 'Baltimore',
    phone_number: '13529298818',
  },
  {
    num: '55bd721d-10c3-4cb8-988f-062780b160a7',
    username: 'bendandsnap',
    password: 'def',
    email: 'bendandsnap@testing.com',
    avg_rating: '4.34',
    rating_count: 87,
    city: 'Denver',
    phone_number: '13529298818',
  },
  {
    num: '682caa79-9313-40fe-ac7a-538aeb4891ba',
    username: 'cumberbatch',
    password: 'ghi',
    email: 'cumberbatch@testing.com',
    avg_rating: '4.30',
    rating_count: 6,
    city: 'Baltimore',
    phone_number: '13017413473',
  },
  {
    num: '7176e0e6-864e-45cb-a947-80bf2ae53ea6',
    username: 'curdlesnoot',
    password: 'jkl',
    email: 'curdlesnoot@testing.com',
    avg_rating: '4.9',
    rating_count: 87,
    city: 'Seattle',
    phone_number: '19834128082',
  },
  {
    num: 'a8db40c5-e107-4d9d-a3c2-3743cc1fb066',
    username: 'chuckecheese',
    password: 'mno',
    email: 'chuckecheese@testing.com',
    avg_rating: '4.82',
    rating_count: 8,
    city: 'Fort Collins',
    phone_number: '13085971104',
  },
  {
    num: 'b8a94c56-7adc-44cb-87f3-d816042681b4',
    username: 'cragglethatch',
    password: 'pqr',
    email: 'cragglethatch@testing.com',
    avg_rating: '2.7',
    rating_count: 13,
    city: 'Austin',
    phone_number: '13529298818',
  },
  {
    num: 'ccd32131-9509-4a51-894d-fe481bbbd474',
    username: 'crumplehorn',
    password: 'stu',
    email: 'crumplehorn@testing.com',
    avg_rating: '4.72',
    rating_count: 15,
    city: 'Seattle',
    phone_number: '15404206460',
  },
  {
    num: 'dee11b83-449e-400c-8435-7066d7f6cf40',
    username: 'snorkledink',
    password: 'vwx',
    email: 'snorkledink@testing.com',
    avg_rating: '4.50',
    rating_count: 3,
    city: 'San Francisco',
    phone_number: '14756906974',
  },
  {
    num: 'fe2db660-f092-434d-bb7f-7b192620dcc1',
    username: 'johnnycash',
    password: 'yz1',
    email: 'johnnycash@testing.com',
    avg_rating: '3.6',
    rating_count: 5,
    city: 'New York City',
    phone_number: '14756906974',
  },
];

const categories = [
  'electronics',
  'automotive',
  'handyman',
  'computers',
  'general labour',
  'specialty',
  'electrician',
  'free stuff',
];
const listings = [
  {
    title: 'Quarry workers needed. Top notch healthcare benefits.',
    description: 'Environmentally friendly company, no machines that emit greenhouse gasses are used. 100% human powered projects.',
    category: 'general labour',
    image: 'https://res.cloudinary.com/dwid55cj4/image/upload/v1522971391/aohvbvjral7quym1cewc.png',
  },
  {
    title: 'Pipe burst, I wanna save some money and try to fix it myself.',
    description: 'Small leak coming from the basement of my house and I need someone with experience to help guide me through fixing it',
    category: 'handyman',
    image: 'https://res.cloudinary.com/dwid55cj4/image/upload/v1522964049/xhkzeybcjvqs4tw18zo1.png',
  },
  {
    user_id: '165a5baa-3846-4833-b19a-eba714077acf',
    title: 'Got into a small fender bender, need help fixing my car.',
    description: 'My car is broken halp me',
    category: 'automotive',
    location: 'Denver',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Car_crash_2.jpg',
  },
  {
    user_id: '1406b551-995d-4cba-8734-28a50a4e9f1a',
    title: "Just bought a new VR headset but it's not working as advertised",
    description:
      "I could really use some help upgrading my computer. I don't want to spend an arm and a leg",
    category: 'computers',
    location: 'Vancouver',
    image:
      'https://cdn.theatlantic.com/assets/media/img/mt/2017/09/ComputerLyfe/lead_960.jpg?1505404125',
  },
  {
    user_id: '1406b551-995d-4cba-8734-28a50a4e9f1a',
    title: 'My water bubbler is broke.',
    description: 'There seems to be some kind of leak',
    category: 'specialty',
    location: 'Los Angeles',
    image:
      'https://i5.walmartimages.com/asr/0c7d64a4-f128-4f08-8648-5e69d641d9ad_1.3fbe171d3e76b67fa37eb7cd3acd0f62.jpeg?odnHeight=560&odnWidth=560&odnBg=FFFFFF',
  },
  {
    user_id: '17682716-7c8c-4130-a8c2-692c878110ca',
    title: "Lawnmower died and i'm not sure how to recharge. It didn't come with any cords",
    description:
      "My lawnmower leaks oil. I'm not sure if it's from a hose or something else.",
    category: 'automotive',
    location: 'Miami',
    image: 'https://i.ytimg.com/vi/_10j1Xvl_wY/hqdefault.jpg',
  },
  {
    user_id: '17682716-7c8c-4130-a8c2-692c878110ca',
    title: 'Vacuum cleaner air flows the wrong way, it just makes more of a mess.',
    description:
      "It works for a moment and then shuts off. It doesn't even get very hot.",
    category: 'specialty',
    location: 'San Francisco',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41QTVzKddGL._US500_.jpg',
  },
  {
    user_id: '2baf363a-8285-4d83-92ba-8f5a22bba152',
    title: 'Not sure what I just bought but I want to learn how to use it.',
    description:
      "I'm a DJ and but I want to be.",
    category: 'electronics',
    location: 'Phoenix',
    image:
      'https://ae01.alicdn.com/kf/HTB1Jf1WklDH8KJjSspnq6zNAVXaG/Leicozic-Vi12-Professional-sound-mixer-12-channel-mixing-console-stage-church-mixer-de-audio-digital-recording.jpg_640x640.jpg',
  },
  {
    user_id: '2baf363a-8285-4d83-92ba-8f5a22bba152',
    title: 'Squeaky and stiff garage door',
    description:
      "The door is really stiff when opening. It doesn't open all of the way, and it makes a sound like it's scraping against something.",
    category: 'handyman',
    location: 'El Paso',
    image:
      'https://res.cloudinary.com/dwid55cj4/image/upload/v1522966472/qucz6sbodpq9bjqe9wwp.png',
  },
  {
    user_id: '55bd721d-10c3-4cb8-988f-062780b160a7',
    title: 'Help needed to pick 200,000+ ripe oranges. I will let you keep 5',
    description:
      'Our house has two dozen citrus trees that are ready to be picked. We could use some help bringing in the harvest.',
    category: 'general labour',
    location: 'Orange County',
    image: 'https://www.gardenzeus.com/wp-content/uploads/GZctorange-2.jpg',
  },
  {
    user_id: '682caa79-9313-40fe-ac7a-538aeb4891ba',
    title: 'Oil change needed for my 2005 Toyota Camry',
    description:
      "I think it's time to change the oil in my car. It's a 2005 Toyota Camry.",
    category: 'automotive',
    location: 'San Antonio',
    image:
      'https://d32c3oe4bky4k6.cloudfront.net/articles-videos/-/media/uscamediasite/images/story-images/2018/01/muscle-cars-scottsdale(10).ashx?modified=20180123160002&mw=1000&hash=F2EFE73081A00B6B316AA8663B84A77765E50181',
  },
  {
    user_id: '7176e0e6-864e-45cb-a947-80bf2ae53ea6',
    title: "Refrigerator doesn't keep food cold when I leave the doors open, please help",
    description: 'Have an old fridge. Needs coolant.',
    category: 'handyman',
    location: 'Chicago',
    image:
      'https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/41/246/84869831.jpg',
  },
  {
    user_id: 'a8db40c5-e107-4d9d-a3c2-3743cc1fb066',
    title: 'Found this sideways tree in my yard yesterday. Want it removed ASAP.',
    description:
      'A tall tree fell in my yard. I need someone to cut it up and haul it off.',
    category: 'handyman',
    location: 'Santa Fe',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYDDNE7-lXvMuHLo4lB_h49v6GQBJwr2zhBhKFREtxeyzB597lA',
  },
  {
    user_id: 'b8a94c56-7adc-44cb-87f3-d816042681b4',
    title: 'Pretty much non functional broken watch but if you want it you can have it.',
    description:
      'Pretty much non functional but if you want it you can have it',
    category: 'free stuff',
    location: 'San Diego',
    image:
      'https://www.brainline.org/sites/default/files/styles/full_view_image/public/migrated//IMG_2553.jpg?itok=Dbht9Iwj',
  },
  {
    user_id: 'ccd32131-9509-4a51-894d-fe481bbbd474',
    title: 'Glasses frame falling apart',
    description:
      "I broke the arm on the frame of my glasses. It just needs to be reattached, but I don't have the tools.",
    category: 'specialty',
    location: 'Houston',
    image:
      'https://res.cloudinary.com/dwid55cj4/image/upload/v1522965874/tl1xqeblffm1ghrznye5.png',
  },
  {
    user_id: 'dee11b83-449e-400c-8435-7066d7f6cf40',
    title: 'Small tear in jacket, seems like a really easy fix but I have no experience.',
    description:
      "My hoodie has a tear just under the hood. I'm looking for someone to sew it up for me",
    category: 'specialty',
    location: 'San Antonio',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4K6AhmquePXtXxXUXO18uPi9YVuDNFdse-ZKkCboYW2s9BFJaQ',
  },
  {
    user_id: 'fe2db660-f092-434d-bb7f-7b192620dcc1',
    title: 'Space heater not hot',
    description:
      "If you want a space heater that can keep your house the same temp as outside then you have found what you're looking for",
    category: 'free stuff',
    location: 'Houston',
    image:
      'https://mobileimages.lowes.com/product/converted/693759/6937590200395.jpg',
  },
];

module.exports.users = users;
module.exports.listings = listings;

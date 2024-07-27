import React, { useState } from "react";
import TravelCard from "./TravelCard";
import './TravelList.css';

const initialCards = [
  {
    id: 1,
    title: "Kashmir",
    description:
      'Popularly referred to as the "Paradise on Earth," Kashmir is a breathtaking region in northwestern India. Historically part of the princely state of Jammu and Kashmir, Jammu & Kashmir was declared a Union Territory in 2019. The major cities in the Kashmir Valley include Srinagar, Gulmarg, Anantnag, and Baramulla. Nestled in the  Pir Panjal and Karakoram mountain ranges of the Himalayas, it is known for its scenic splendor, snow-capped mountains, plentiful wildlife, exquisite monuments, hospitable people, and handicrafts.',
      price: "Rs. 28,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsWaadZorrm4nhrj0JbMq5lsYgqswo_cD9w&s"
  },
  {
    id: 2,
    title: "Srinagar",
    description:
      ' Famously known as "Heaven on Earth", Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum. Known for its serene lakes, lush gardens, and Mughal-era architecture, Srinagar is a timeless destination that beckons travelers from around the world. Srinagar is known for the stationary houseboats and gondola-type rowboats- Shikaras on Dal Lake. Adorned with tranquil Dal Lake & Nigeen Lake, Srinagar is the dream destination for honeymoon and family holidays. ',
      price: "Rs. 25,000",
      image: "https://img.traveltriangle.com/apac/attachments/pictures/864127/original/Shikara_ride.jpg"
  },
  {
    id: 3,
    title: "Ladakh",
    description:
      "Ladakh, located in the northernmost region of India, is a high-altitude desert renowned for its breathtaking landscapes, serene monasteries, and unique cultural heritage. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. The region is a riot of intricate murals, fluttering prayer flags, and whitewashed stupas, with red-robed monks adding to its vibrant cultural tapestry. Dominated by dramatic landscapes, Ladakh is known as the worlds coldest desert. ",
      price: "Rs. 32,000",
      image: "https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA="
  },
  {
    id: 4,
    title: "Gangtok",
    description:
      "Incredibly alluring, pleasantly boisterous and wreathed in clouds - Gangtok, the capital of Sikkim, is one of the most popular hill stations in India. Lying at the height of 1650 m above sea level, the town during its bright sunny days offers spectacular views of Mt. Kanchenjunga. Gangtok is a base for adventure enthusiasts comprising of trekkers and campers to the Himalayan mountain ranges. Dzongri Trek, Varsey/Barsey Trek, and Tholung Trek are among the most popular treks departing from Gangtok.",
      price: "Rs. 20,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXsl6bdQKzY2Q0g2uMlYzSbV4l96DcUNFuw&s"
  },
  {
    id: 5,
    title: "Andaman & Nicobar",
    description:
      "Replete with turquoise blue water beaches and a bit of history, Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India. Port Blair, the capital of this union territory, has a major airport and seaport connected with the rest of the country and with various tourist islands via multiple daily ferries. Havelock and Neil Islands are popular among tourists for their white sandy beaches and excellent diving options. ",
      price: "Rs. 40,000",
      image: "https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/39f3727a-9024-4b7f-8560-dd8061cde8c0/INTRO+TO+ANDAMAN+NICOBAR.jpg"
  },
  {
    id: 6,
    title: "Manali",
    description:
      "With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations for Honeymooners. Manali offers magnificent views of the Pir Panjal and the Dhauladhar ranges, covered in a thick blanket of snow for most of the year.",
      price: "Rs. 29,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhTrP2Kf2x6qVDffHS_K7JakibL_QPCtMZQ&s"
  },
  {
    id: 7,
    title: "Gulmarg",
    description:
      "Gulmarg is one of the top honeymoon destinations in India. Gulmarg has also been developed as an adventure hub as the Indian Institute of Skiing, and Mountaineering is located here. A lot of courses on trekking, mountaineering, skiing, and snowboarding are offered by IISM. There are a lot of other private tour operators in Gulmarg as well, which provide similar courses and facilities for skiing and snowboarding. Known for its scenic beauty, Gulmarg has also been a popular destination for shooting various Bollywood films.",
      price: "Rs. 35,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTaXRqjxmd-tkHBukyd4H71msXeJCtmPSOw&s"
  },
  {
    id: 8,
    title: "Goa",
    description:
      "Lying on the western coast, Goa is Indias smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture. Spread across just 3,702 km, Goa lies in the Konkan region. It is a far cry from the hippie haven or a beach getaway, and one of the only few destinations that is open 24x7. The laid-backness (susegad) of Goa attracts as many international tourists as it does Indians, or even more so. The Goans are quite friendly towards tourists and celebrate many festivals throughout the year, the most famous being the New Year and Goa Carnival.",
      price: "Rs. 20,000",
      image: "https://www.agoda.com/wp-content/uploads/2023/02/Goa-overview-things-to-do-in-goa.jpg"
  },
  {
    id: 9,
    title: "Udaipur",
    description:
      'Udaipur, the "City of Lakes," stands as a jewel in the crown of Rajasthan, India. Nestled amidst the Aravalli Range, this city captivates visitors with its regal charm, historic grandeur, and scenic landscapes. Located around stunning water lakes and enveloped by the Aravalli Hills in all directions, Udaipur is known for its azure lakes, magnificent palaces, vibrant culture and delectable food. Along with being a must-visit destination, it is also one of the best places to experience luxury in India.',
      price: "Rs. 22,000",
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/98/97/b3.jpg"
  },
  {
    id: 10,
    title: "Varanasi",
    description:
      "Worlds oldest living city, Varanasi - also known as Kashi (City of Life) and Benaras, is the spiritual capital of India. It is one of Hinduisms seven holy cities. The old city of Varanasi lies along the western banks of the Ganges, spread across a labyrinth of narrow galis. Be prepared to walk on foot and encounter some holy cows! Temples at almost every turn engulf Varanasi but the Kashi Vishwanath Temple is the most visited and the oldest of the lot. Benaras is known as the city of Lord Shiva for a reason, and rightfully so.",
      price: "Rs. 19,000",
      image: "https://static.toiimg.com/photo/msid-107570888,width-96,height-65.cms"
  },
  {
    id: 11,
    title: "Ujjain",
    description:
      "Ujjain, an ancient city in the Indian state of Madhya Pradesh, holds profound historical, cultural, and spiritual significance. Situated on the banks of the sacred Shipra River, Ujjain is one of the seven holiest cities in Hinduism, renowned for its ancient temples and religious sites. The city is home to the Mahakaleshwar Jyotirlinga, one of the twelve Jyotirlingas dedicated to Lord Shiva, attracting devotees from all over the country. Ujjain is also famous for hosting the Kumbh Mela, one of the largest religious gatherings in the world, which takes place every twelve years. The citys rich heritage is evident in its historical architecture, including the majestic Harsiddhi Temple, the intricately carved Kal Bhairav Temple, and the impressive Vedh Shala observatory. With its vibrant festivals, traditional rituals, and timeless charm, Ujjain offers a deep spiritual experience and a glimpse into Indias ancient past.",
      price: "Rs. 15,000",
      image: "https://static.toiimg.com/photo/msid-107570888,width-96,height-65.cms"
  },
  {
    id: 12,
    title: "Lakshadweep",
    description:
      "Lakshadweep is typically accessed from Kochi (Kerala) and a permit is required to visit Lakshadweep for all tourists (including Indians). After permit, foreigners are permitted to just visit Agatti, Bangaram and Kadmat Islands. Permits can be obtained from Kochi itself. Permits are exempted to government officials, armed force members, and their families who are either working or visiting these islands. Additionally, embarking on the Lakshadweep Samudram Cruise aboard MV Kavaratti is a maritime adventure like no other. This 5 day cruise takes you Kavaratti, Minicoy and Kalpeni islands. Another such extraordinary 5-day voyage is from Mumbai to Lakshadweep on the Cordelia Cruise.",
      price: "Rs. 24,500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeczSOHj36Qgq-1FkuWG3UHclkVTnE2AicUQ&s"
  },
];

const TravelList = () => {
  const [cards, setCards] = useState(initialCards);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleRefresh = () => {
    setCards(initialCards);
  };

  return (
    <div className=" bg-gradient-to-r from-[#2980b9] to-[#2c3e50] h-full w-full">
      <div className="card-list">
        {cards.map((card) => (
          <TravelCard key={card.id} {...card} onDelete={handleDelete} />
        ))}
      </div>
      <div className="ref-btn">
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </div>
  );
};

export default TravelList;

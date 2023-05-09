"use strict";
//
const new1 = {
   img : "../img/news/news1.webp",
   content: "Instructions on how to update iOS 16.4 from A to Z",
   type : "News",
   details : "If you have not updated to iOS 16.4 yet, please refer to the instructions in this article!",
  };
  
  const new2 = {
    img : "../img/news/news2.jpg",
   content: "Top 5 games to play with gamepads not to be missed in 2023",
   type : "Game",
   details : "Playing games with a controller always brings a sense of excitement and is highly \"addictive\" to gamers. Not only does it help…",
  };
  
  const new3 = {
    img : "../img/news/news3.png",
   content: "Asus RT-AX1800HP Wifi 6 router transmitter: high speed, broadcast through walls",
   type : "News",
   details : "In the context of rapidly growing network density from phones and laptops, the introduction of Wifi 6 router network equipment ...",
  };
  
  const new4 = {
    img : "../img/news/news4.jpg",
    content: "MSI laptop with the latest configuration 13th generation worth buying 2023",
    type : "News",
    details : "If you are a fan of technology, surely the name MSI laptop is no longer strange to you. Producing manufacturing hardware for…",
  };
  
  const new5 = {
    img : "../img/news/news5.jpg",
    content: "Minimum configuration for playing CS:GO 2 (Counter-Strike 2): core i5, 1060 card played",
    type : "News",
    details : "CS:GO, the legendary first-person shooter is about to get a new version this summer of 2023. Information has been approved…",
  };
  
  const new6 = {
    img : "../img/news/news6.jpg",
    content: "Laptop ASUS Vivobook 14 OLED – laptop for students is too quality",
    type : "News",
    details : "ASUS Vivobook is already familiar to users because of its accessible student price. Not that the quality and ability…",
  };
  
  const new7 = {
    img : "../img/news/news7.jpg",
    content: "ASUS Zenbook 14 OLED laptop (UX3402V) – thin, light, luxurious business ultrabook",
    type : "News",
    details : "ASUS Zenbook is too familiar to users when they need to buy an Ultrabook for business. That is reflected in the design on the side…",
  };
  
  const new8 = {
    img : "../img/news/news8.jpeg",
   content: "Interesting technology news last week (February 27 - March 5, 2023)",
   type : "News",
   details : "Last week also ended with some interesting technology news including information related to the legendary name Nokia…",
  };
  
  const listNews = [
    new1,
    new2,
    new3,
    new4,
    new5,
    new6,
    new7,
    new8,
  ];
//
localStorage.setItem("listNews", JSON.stringify(listNews));
//
const news = document.querySelector(".section-content");
console.log(news)
//
const displayNews = function () {
    news.innerHTML = "";
    const newsList = listNews.forEach((neww) => {
      const html = ` 
      <div class="form">
      <div class="news">
      <a href="#"><img class="news-img" src="${neww.img}" alt=""></a>
      <div class="news-content">
          <p class="type">
              ${neww.type}
          </p>
          <a class="content" href="#">
            <strong>
                ${neww.content}
            </strong>
          </a>
          <p>${neww.details}</p>
      </div>
  </div>
  </div>`;
  
      news.insertAdjacentHTML("afterbegin", html);
    });
  };
  
  displayNews();
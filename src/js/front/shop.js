import clientPlayer from "./clientPlayer";
import { sendBuyMessage } from "../machiCoroGame/front/machiCoroClientMessages";
import { AudioSystem, allSounds } from "./audioSystem";

let currentColor;
const blueCards = [
  { name: "wheatField", url: "../assets/images/ordinaryBuildings/wheatField.jpg" },
  { name: "farm", url: "../assets/images/ordinaryBuildings/farm.jpg" },
  { name: "flowerGarden", url: "../assets/images/ordinaryBuildings/flowerGarden.jpg" },
  { name: "forest", url: "../assets/images/ordinaryBuildings/forest.jpg" },
  { name: "longboat", url: "../assets/images/ordinaryBuildings/longboat.jpg" },
  { name: "mine", url: "../assets/images/ordinaryBuildings/mine.jpg" },
  { name: "appleOrchard", url: "../assets/images/ordinaryBuildings/appleOrchard.jpg" },
  { name: "trawler", url: "../assets/images/ordinaryBuildings/trawler.jpg" },
];
const greenCards = [
  { name: "bakery", url: "../assets/images/ordinaryBuildings/bakery.jpg" },
  { name: "store", url: "../assets/images/ordinaryBuildings/store.jpg" },
  { name: "flowerStore", url: "../assets/images/ordinaryBuildings/flowerStore.jpg" },
  { name: "cheeseDairy", url: "../assets/images/ordinaryBuildings/cheeseDairy.jpg" },
  { name: "furnitureFactory", url: "../assets/images/ordinaryBuildings/furnitureFactory.jpg" },
  { name: "vegetableMarket", url: "../assets/images/ordinaryBuildings/vegetableMarket.jpg" },
  { name: "groceryWarehouse", url: "../assets/images/ordinaryBuildings/groceryWarehouse.jpg" },
];
const redCards = [
  { name: "sushiBar", url: "../assets/images/ordinaryBuildings/sushiBar.jpg" },
  { name: "cafe", url: "../assets/images/ordinaryBuildings/cafe.jpg" },
  { name: "pizzeria", url: "../assets/images/ordinaryBuildings/pizzeria.jpg" },
  { name: "diner", url: "../assets/images/ordinaryBuildings/diner.jpg" },
  { name: "restaurant", url: "../assets/images/ordinaryBuildings/restaurant.jpg" },
];
const purpleCards = [
  { name: "businessCenter", url: "../assets/images/uniqueBuildings/businessCenter.jpg" },
  { name: "stadium", url: "../assets/images/uniqueBuildings/stadium.jpg" },
  { name: "telecentre", url: "../assets/images/uniqueBuildings/telecentre.jpg" },
  { name: "publishingHouse", url: "../assets/images/uniqueBuildings/publishingHouse.jpg" },
  { name: "tax", url: "../assets/images/uniqueBuildings/tax.jpg" },
];
const attractionCards = [
  { name: "port", url: "../assets/images/attractions/port.jpg" },
  { name: "railwayStation", url: "../assets/images/attractions/railwayStation.jpg" },
  { name: "shoppingCenter", url: "../assets/images/attractions/shoppingCenter.jpg" },
  { name: "amusementPark", url: "../assets/images/attractions/amusementPark.jpg" },
  { name: "radioTower", url: "../assets/images/attractions/radioTower.jpg" },
  { name: "airport", url: "../assets/images/attractions/airport.jpg" },
];

export default function createShop(color) {
  currentColor = color;
  let countCards;
  switch (currentColor) {
    case ".picture-blue":
      countCards = 8;
      break;
    case ".picture-green":
      countCards = 7;
      break;
    case ".picture-red":
      countCards = 5;
      break;
    case ".picture-purple":
      countCards = 5;
      break;
    case ".picture-attractions":
      countCards = 6;
      break;
    default:
      countCards = 8;
  }
  const shopContent = document.querySelector(".shop-content");
  if (document.querySelector(".canvas-shop")) {
    shopContent.removeChild(document.querySelector(".canvas-shop"));
  }
  const shop = document.querySelector(".shop");
  const canvasShop = document.createElement("canvas");
  canvasShop.classList.add("canvas-shop");
  shopContent.appendChild(canvasShop);
  const ctx = canvasShop.getContext("2d");
  const padding = 20;
  const border = 7;
  const elements = [];
  const widthShop = shopContent.offsetWidth - (border * 2 + padding * 2);
  const images = document.querySelectorAll(color);
  const arrayImages = Array.from(images);
  const widthImg = 180;
  const heightImg = 275;
  let countImgBlock = Math.floor((widthShop - 60) / widthImg);
  let margin = (widthShop - countImgBlock * widthImg) / (countImgBlock + 1);

  if (widthShop < 240) {
    margin = 20;
    countImgBlock = 1;
  }
  const countImgLine = Math.ceil(countCards / countImgBlock);
  let heightShop;

  switch (countImgLine) {
    case 2:
      heightShop = heightImg * countImgLine + padding + padding * 3;
      break;
    case 3:
      heightShop = heightImg * countImgLine + padding * 2 + padding * 3;
      break;
    case 4:
      heightShop = heightImg * countImgLine + padding * 3 + padding * 3;
      break;
    case 5:
      heightShop = heightImg * countImgLine + padding * 4 + padding * 3;
      break;
    case 6:
      heightShop = heightImg * countImgLine + padding * 5 + padding * 3;
      break;
    case 7:
      heightShop = heightImg * countImgLine + padding * 6 + padding * 3;
      break;
    case 8:
      heightShop = heightImg * countImgLine + padding * 7 + padding * 3;
      break;
    default:
      heightShop = heightImg + padding * 3;
  }

  canvasShop.setAttribute("width", widthShop);
  canvasShop.setAttribute("height", heightShop);

  ctx.clearRect(0, 0, canvasShop.width, canvasShop.height);

  function drawShop() {
    let x = margin;
    let y = 0;
    for (let i = 0; i < arrayImages.length; i += 1) {
      switch (currentColor) {
        case ".picture-blue":
          elements.push({
            name: blueCards[i].name,
            url: blueCards[i].url,
            left: x,
            top: y,
            width: 180,
            height: 275,
          });
          break;
        case ".picture-green":
          elements.push({
            name: greenCards[i].name,
            url: greenCards[i].url,
            left: x,
            top: y,
            width: 180,
            height: 275,
          });
          break;
        case ".picture-red":
          elements.push({
            name: redCards[i].name,
            url: redCards[i].url,
            left: x,
            top: y,
            width: 180,
            height: 275,
          });
          break;
        case ".picture-purple":
          elements.push({
            name: purpleCards[i].name,
            url: purpleCards[i].url,
            left: x,
            top: y,
            width: 180,
            height: 275,
          });
          break;
        case ".picture-attractions":
          elements.push({
            name: attractionCards[i].name,
            url: attractionCards[i].url,
            left: x,
            top: y,
            width: 180,
            height: 275,
          });
          break;
        default:
          elements.push({
            name: blueCards[i].name,
            url: blueCards[i].url,
            left: x,
            top: y,
            width: 180,
            height: 275,
          });
      }
      ctx.drawImage(arrayImages[i], x, y, 180, 275);
      x += widthImg + margin;
      if (widthShop - x < margin + widthImg) {
        x = margin;
        y = y + heightImg + padding;
      }
    }
  }

  drawShop();

  canvasShop.addEventListener("click", (event) => {
    const box = canvasShop.getBoundingClientRect();

    const x = event.clientX - box.left;
    const y = event.clientY - box.top;

    elements.forEach((element) => {
      if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
        shop.classList.add("hidden");
        const ws = clientPlayer.getWs();
        const roomID = clientPlayer.getRoomID();
        sendBuyMessage(ws, roomID, element.name);
        const song = new AudioSystem(allSounds.click);
        song.playAudio();
      }
    });
  });
}

window.addEventListener("resize", () => {
  createShop(currentColor);
});

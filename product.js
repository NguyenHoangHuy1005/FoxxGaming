"use strict";

//======================================================================DATA===================================================================================================
const product1 = {
  local: "DELL",
  name: "Laptop Dell Vostro 3510 (i5-1135G7/RAM 8GB/512GB SSD/ Windows 11 + Office)",
  type: "TOPS",
  sale: 759,
  price: 700,
  image: "../img/listProduct/img1.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i5",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Intel UHD Graphics 730",
  weight: 2.5,
};

const product2 = {
  local: "DELL",
  name: "Laptop Dell Inspiron 3520 (i5-1235U/RAM 8GB/256GB SSD/ Windows 11 + Office)",
  type: "TOPS",
  sale: 800,
  price: 759,
  image: "../img/listProduct/img2.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i5",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single LanguageWindows 11 Home SL + Office Home & Student 2021 Windows 11 + Office",
  Chip: "ntel Iris Xe Graphics",
  weight: 1.9,
};

const product3 = {
  local: "DELL",
  name: "Laptop Dell Vostro 15 3520 (i5-1235U/RAM 8GB/512GB SSD/ Windows 11 + Office)",
  type: "TOPS",
  sale: 790,
  price: 699,
  image: "../img/listProduct/img3.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Core i5",
  RAM: "1 x 8GB DDR4 3200MHz (2 Khe cắm)",
  operatingsystem: "Windows 11 Home SL + Office Home & Student 2021 Windows 11 + Office",
  Chip: "Onboard Intel Iris Xe Graphics",
  weight: 1.7,
};

const product4 = {
  local: "DELL",
  name: "Laptop Dell Inspiron 14 5420 (i5-1235U/RAM 8GB/512GB SSD/ Windows 11 + Office)",
  type: "TOPS",
  sale: 600,
  price: 559,
  image: "../img/listProduct/img4.webp",
  guarantee: 12,
  color: "Silver",
  CPU: "Core i5",
  RAM: "1 x 8GB DDR4 3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )",
  operatingsystem: "Windows 11 Home SL + Office Home & Student 2021 Windows 11 + Office",
  Chip: "Intel UHD Graphics 730",
  weight: 1.5,
};

const product5 = {
  local: "DELL",
  name: "Laptop Dell Vostro 5620 (i5-1240P/RAM 8GB/512GB SSD/ Windows 11 + Office)",
  type: "TOPS",
  sale: 650,
  price: 559,
  image: "../img/listProduct/img5.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i5",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "GeForce MX570 2GB GDDR6 / Intel Iris Xe Graphics",
  weight: 1.8,
};

const product6 = {
  local: "DELL",
  name: "Laptop Dell Inspiron 16 5620 (i7-1255U/RAM 8GB/512GB SSD/ Windows 11 + Office)",
  type: "TOPS",
  sale: 999,
  price: 899,
  image: "../img/listProduct/img6.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i7 , Intel Core thế hệ thứ 12",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home SL + Office Home & Student 2021 Windows 11 + Office",
  Chip: "Intel UHD Graphics 730",
  weight: 1.9,
};

const product7 = {
  local: "DELL",
  name: "Laptop Dell Inspiron 7420 INS14 (i7-1255U/RAM 16GB/512GB SSD/ Windows 11 + Office)",
  type: "TOPS",
  sale: 1459,
  price: 1359,
  image: "../img/listProduct/img7.webp",
  guarantee: 12,
  color: "Silver",
  CPU: "Core iCore i7 , Intel Core thế hệ thứ 12",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home SL + Office Home & Student 2021 Windows 11 + Office",
  Chip: "GeForce MX550 2GB GDDR6 / Intel Iris Xe Graphics",
  weight: 1.7,
};

const product8 = {
  local: "DELL",
  name: "Laptop Dell Inspiron 15 5625 (Ryzen 7 5825U/RAM 8GB/512GB SSD/ Windows 11 + Office)",
  type: "TOPS",
  sale: 1190,
  price: 1099,
  image: "../img/listProduct/img8.webp",
  guarantee: 12,
  color: "Silver",
  CPU: "Core i5",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home SL + Office Home & Student 2021 Windows 11 + Office",
  Chip: "Onboard AMD Radeon Graphics",
  weight: 1.9,
};

const listProduct1 = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
];
// list 2
const product9 = {
  local: "ASUS",
  name: "Laptop ASUS TUF Gaming FX506HC-HN144W",
  type: "TOPS",
  sale: 1100,
  price: 1059,
  image: "../img/listProduct/img9.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i5 , Intel Core thế hệ thứ 11",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Windows 11",
  Chip: "Intel UHD Graphics 730",
  weight: 2.3,
};

const product10 = {
  local: "ASUS",
  name: "Laptop ASUS Vivobook X1502ZA-BQ127W (i5-1240P/RAM 8GB/512GB SSD/ Windows 11)",
  type: "TOPS",
  sale: 750,
  price: 719,
  image: "../img/listProduct/img10.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i5 , Intel Core thế hệ thứ 12",
  RAM: "8GB Onboard DDR4 ( 1 Khe cắm / Hỗ trợ tối đa 24GB )",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Intel UHD Graphics 730",
  weight: 1.7,
};

const product11 = {
  local: "ASUS",
  name: "Laptop ASUS TUF Gaming FA506ICB-HN355W",
  type: "TOPS",
  sale: 900,
  price: 869,
  image: "../img/listProduct/img11.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Core i5",
  RAM: "1 x 8GB DDR4 4800MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "RTX 3050 4GB GDDR6 / AMD Radeon Graphics",
  weight: 2.3,
};

const product12 = {
  local: "ASUS",
  name: "Laptop Asus Zenbook 14 OLED UX3402Z UX3402ZA-KM218W",
  type: "TOPS",
  sale: 1050,
  price: 999,
  image: "../img/listProduct/img12.webp",
  guarantee: 12,
  color: "Blue",
  CPU: "Core i5 , Intel Core thế hệ thứ 12 , Intel EVO",
  RAM: "8GB Onboard LPDDR5",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "Onboard Intel Iris Xe Graphics",
  weight: 1.8,
};

const product13 = {
  local: "ASUS",
  name: "Laptop ASUS TUF Gaming FX507ZC-HN124W",
  type: "TOPS",
  sale: 1200,
  price: 1099,
  image: "../img/listProduct/img13.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Intel Core i7-12700H ( 2.3 GHz - 4.7GHz / 24MB / 14 nhân, 20 luồng ) i7-12700H",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "RTX 3050 4GB GDDR6 / Intel Iris Xe Graphics",
  weight: 2.1,
};

const product14 = {
  local: "ASUS",
  name: "Laptop ASUS TUF Gaming FX706HC-HX579W",
  type: "TOPS",
  sale: 1190,
  price: 1099,
  image: "../img/listProduct/img14.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Intel Core i5-11400H ( 2.7 GHz - 4.5 GHz / 12MB / 6 nhân, 12 luồng ) i5-11400H",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "RTX 3050 4GB GDDR6 / Intel UHD Graphics",
  weight: 2.4,
};

const product15 = {
  local: "ASUS",
  name: "Laptop Asus VivoBook Pro 14X OLED M7400QC-KM013W",
  type: "TOPS",
  sale: 1150,
  price: 899,
  image: "../img/listProduct/img15.webp",
  guarantee: 12,
  color: "Black",
  CPU: "AMD Ryzen 5 5600H ( 3.3 GHz - 4.2 GHz / 16MB / 6 nhân, 12 luồng ) Ryzen 5 5600H",
  RAM: "1 x 8GB DDR4 29M3ZZ",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "RTX 3050 4GB GDDR6 / AMD Radeon Graphics",
  weight: 2.2,
};

const product16 = {
  local: "ASUS",
  name: "Laptop ASUS ROG Strix SCAR G533ZM-LN013W (i7-12700H/RAM 16GB/1TB SSD)",
  type: "TOPS",
  sale: 2100,
  price: 1999,
  image: "../img/listProduct/img16.webp",
  guarantee: 12,
  color: "Black",
  CPU: "ntel Core i7-12700H ( 2.3 GHz - 4.7GHz / 24MB / 14 nhân, 20 luồng ) i7-12700H",
  RAM: "2 x 8GB DDR5 ( 2 Khe cắm / Hỗ trợ tối đa 64GB )",
  operatingsystem: "Windows 11 Home Single Language",
  Chip: "RTX 3060 6GB GDDR6 / Intel Iris Xe Graphics",
  weight: 2.4,
};

const listProduct2 = [
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
];

// list 3
const product17 = {
  local: "MACBOOK",
  name: "MacBook Air 2020 13.3 inch MGN63SA/A (M1/8GB/SSD256GB)",
  type: "TOPS",
  sale: 1100,
  price: 1059,
  image: "../img/listProduct/img17.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Apple M1 Apple M1",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.3,
};

const product18 = {
  local: "MACBOOK",
  name: "MacBook Pro 2022 13.3 inch MNEJ3SA/A (M2/ 8GB/ SSD 512GB)",
  type: "TOPS",
  sale: 2500,
  price: 2459,
  image: "../img/listProduct/img18.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Apple M2 chip Apple M2",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.4,
};

const product19 = {
  local: "MACBOOK",
  name: "MacBook Air 2022 13.6 inch MLXY3SA/A (M2/ 8GB/ SSD 256GB)",
  type: "TOPS",
  sale: 2400,
  price: 2299,
  image: "../img/listProduct/img19.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Apple M2 Apple M2",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.5,
};

const product20 = {
  local: "MACBOOK",
  name: "MacBook Air 2022 13.6 inch MLXW3SA/A (M2/ 8GB/ SSD 256GB)",
  type: "TOPS",
  sale: 899,
  price: 859,
  image: "../img/listProduct/img20.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Apple M2 Apple M2",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.3,
};

const product21 = {
  local: "MACBOOK",
  name: "MacBook Pro 2020 13.3 inch MYDC2SA/A (M1/8GB/SSD512GB)",
  type: "TOPS",
  sale: 859,
  price: 839,
  image: "../img/listProduct/img21.webp",
  guarantee: 12,
  color: "Silver",
  CPU: "Apple M1 Apple M1",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.3,
};

const product22 = {
  local: "MACBOOK",
  name: "MacBook Air 2019 MVFN2SA/A",
  type: "TOPS",
  sale: 1599,
  price: 1519,
  image: "../img/listProduct/img22.webp",
  guarantee: 12,
  color: "",
  CPU: "Intel Core i5 ( 1.6 GHz - 3.6 GHz / 4MB / 2 nhân, 4 luồng ) Core i5",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.3,
};

const product23 = {
  local: "MACBOOK",
  name: "MacBook Pro 2021 14 inch MKGR3SA/A (M1 Pro/16GB/SSD512GB)",
  type: "TOPS",
  sale: 2510,
  price: 2499,
  image: "../img/listProduct/img23.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Apple M1 Apple M1",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.3,
};

const product24 = {
  local: "MACBOOK",
  name: "Laptop APPLE MacBook Pro 16 (Apple M2/RAM 16GB/1TB SSD/ macOS)",
  type: "TOPS",
  sale: 3400,
  price: 3699,
  image: "../img/listProduct/img24.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Apple M2 Apple M2",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.3,
};

const listProduct3 = [
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
];

// list 4 PC
const product25 = {
  local: "PC",
  name: "PC Dell Precision 3650 Tower (D24M005) 70272981 (Intel Core i7-11700K/16GB",
  type: "TOPS",
  sale: 2050,
  price: 1999,
  image: "../img/listProduct/img25.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Intel Core i7-11700K ( 3.60 GHz - 5.00 GHz / 16MB / 8 nhân, 16 luồng )",
  RAM: "2 x 8GB DDR4 2933MHz ( 4 Khe cắm Hỗ trợ tối đa 128GB )",
  operatingsystem: "No OS",
  Chip: "Intel UHD Graphics 750 / Quadro P2000 5GB GDDR5",
  weight: 8.5,
};

const product26 = {
  local: "PC",
  name: "PC Dell XPS8950 HMXKY (Intel Core i7-12700/16GB/512GB SSD/1TB",
  type: "TOPS",
  sale: 2000,
  price: 1950,
  image: "../img/listProduct/img26.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Intel Core i7-12700 ( 3.3 GHz - 4.9 GHz / 25MB / 12 nhân, 20 luồng )",
  RAM: "2 x 8GB DDR4 2933MHz ( 4 Khe cắm Hỗ trợ tối đa 128GB )",
  operatingsystem: "No OS",
  Chip: "Intel UHD Graphics 750 / Quadro P2000 5GB GDDR5",
  weight: 9,
};

const product27 = {
  local: "PC",
  name: "PC Dell XPS8940 FXW79 (Intel Core i7-11700/8GB/512GB SSD/1TB HDD/GeForce)",
  type: "TOPS",
  sale: 1600,
  price: 1559,
  image: "../img/listProduct/img27.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Intel Core i7-11700 ( 2.50 GHz - 4.90 GHz / 16MB / 8 nhân, 16 luồng )",
  RAM: "2 x 8GB DDR4 2933MHz ( 4 Khe cắm Hỗ trợ tối đa 128GB )",
  operatingsystem: "No OS",
  Chip: "Intel UHD Graphics 750 / Quadro P2000 5GB GDDR5",
  weight: 9.5,
};

const product28 = {
  local: "PC",
  name: "PC Dell Vostro 3681 STI71510W1-8G-512G (Intel Core i7-10700/8GB/512GB",
  type: "TOPS",
  sale: 1199,
  price: 1100,
  image: "../img/listProduct/img28.webp",
  guarantee: 12,
  color: "Black",
  CPU: " Intel Core i7-10700 (2.90 GHz - 4.80 GHz/16MB/8 nhân, 16 luồng)",
  RAM: "1 x 8GB DDR4 2933MHz (2 Khe cắm, Hỗ trợ tối đa 64GB)",
  operatingsystem: "No OS",
  Chip: "Intel UHD Graphics 630",
  weight: 9.3,
};

const product29 = {
  local: "PC",
  name: "Màn Hình Dell 19.5 E2016HV (1600x900/5ms)",
  type: "TOPS",
  sale: 179,
  price: 159,
  image: "../img/listProduct/img29.webp",
  guarantee: 12,
  color: "Black",
  CPU: "",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "NO OS",
  Chip: "Onboard",
  weight: 3.2,
};

const product30 = {
  local: "MACBOOK",
  name: "MacBook Air 2019 MVFN2SA/A",
  type: "TOPS",
  sale: 1599,
  price: 1519,
  image: "../img/listProduct/img22.webp",
  guarantee: 12,
  color: "",
  CPU: "Intel Core i5 ( 1.6 GHz - 3.6 GHz / 4MB / 2 nhân, 4 luồng ) Core i5",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.3,
};

const product31 = {
  local: "MACBOOK",
  name: "MacBook Pro 2021 14 inch MKGR3SA/A (M1 Pro/16GB/SSD512GB)",
  type: "TOPS",
  sale: 2510,
  price: 2499,
  image: "../img/listProduct/img23.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Apple M1 Apple M1",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.3,
};

const product32 = {
  local: "MACBOOK",
  name: "Laptop APPLE MacBook Pro 16 (Apple M2/RAM 16GB/1TB SSD/ macOS)",
  type: "TOPS",
  sale: 3400,
  price: 3699,
  image: "../img/listProduct/img24.webp",
  guarantee: 12,
  color: "Gray",
  CPU: "Apple M2 Apple M2",
  RAM: "8GB Onboard LPDDR4 3733MHz",
  operatingsystem: "macOS macOS",
  Chip: "Onboard",
  weight: 1.3,
};

const listProduct4 = [
  product25,
  product26,
  product27,
  product28,
  product29,
  product30,
  product31,
  product32,
];
// LIST 5 PC
const product33 = {
  local: "PC",
  name: "PC Dell Precision 3650 Tower (D24M005) 70272981 (Intel Core i7-11700K/16GB",
  type: "TOPS",
  sale: 2050,
  price: 1999,
  image: "../img/listProduct/img25.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Intel Core i7-11700K ( 3.60 GHz - 5.00 GHz / 16MB / 8 nhân, 16 luồng )",
  RAM: "2 x 8GB DDR4 2933MHz ( 4 Khe cắm Hỗ trợ tối đa 128GB )",
  operatingsystem: "No OS",
  Chip: "Intel UHD Graphics 750 / Quadro P2000 5GB GDDR5",
  weight: 8.5,
};

const product34 = {
  local: "PC",
  name: "PC Dell XPS8950 HMXKY (Intel Core i7-12700/16GB/512GB SSD/1TB",
  type: "TOPS",
  sale: 2000,
  price: 1950,
  image: "../img/listProduct/img26.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Intel Core i7-12700 ( 3.3 GHz - 4.9 GHz / 25MB / 12 nhân, 20 luồng )",
  RAM: "2 x 8GB DDR4 2933MHz ( 4 Khe cắm Hỗ trợ tối đa 128GB )",
  operatingsystem: "No OS",
  Chip: "Intel UHD Graphics 750 / Quadro P2000 5GB GDDR5",
  weight: 9,
};

const product35 = {
  local: "PC",
  name: "PC Dell XPS8940 FXW79 (Intel Core i7-11700/8GB/512GB SSD/1TB HDD/GeForce)",
  type: "TOPS",
  sale: 1600,
  price: 1559,
  image: "../img/listProduct/img27.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Intel Core i7-11700 ( 2.50 GHz - 4.90 GHz / 16MB / 8 nhân, 16 luồng )",
  RAM: "2 x 8GB DDR4 2933MHz ( 4 Khe cắm Hỗ trợ tối đa 128GB )",
  operatingsystem: "No OS",
  Chip: "Intel UHD Graphics 750 / Quadro P2000 5GB GDDR5",
  weight: 9.5,
};

const product36 = {
  local: "PC",
  name: "PC Dell Vostro 3681 STI71510W1-8G-512G (Intel Core i7-10700/8GB/512GB",
  type: "TOPS",
  sale: 1199,
  price: 1100,
  image: "../img/listProduct/img28.webp",
  guarantee: 12,
  color: "Black",
  CPU: " Intel Core i7-10700 (2.90 GHz - 4.80 GHz/16MB/8 nhân, 16 luồng)",
  RAM: "1 x 8GB DDR4 2933MHz (2 Khe cắm, Hỗ trợ tối đa 64GB)",
  operatingsystem: "No OS",
  Chip: "Intel UHD Graphics 630",
  weight: 9.3,
};

const product37 = {
  local: "PC",
  name: "PC ASUS S501MD S501MD-512400079W (Intel Core i5)",
  type: "TOPS",
  sale: 700,
  price: 679,
  image: "../img/listProduct/img37.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Intel Core i5-12400 (2.5 GHz - 4.4 GHz/18MB/6 nhân, 12 luồng)",
  RAM: "RAM: 1 x 8GB DDR4 3200MHz (2 Khe cắm)",
  operatingsystem: "Windows 11 Home SL 64-bit",
  Chip: "Intel UHD Graphics 730",
  weight: 5.9,
};

const product38 = {
  local: "PC",
  name: "PC ASUS S500SC-310105039W 90PF02K2-M006F0 (Intel Core i3)",
  type: "TOPS",
  sale: 490,
  price: 469,
  image: "../img/listProduct/img38.webp",
  guarantee: 12,
  color: "Black",
  CPU: " Intel Core i3-10105 (3.70 GHz - 4.40 GHz/6MB/4 nhân, 8 luồng)",
  RAM: "RAM: 1 x 4GB DDR4 (2 Khe cắm, Hỗ trợ tối đa 32GB)",
  operatingsystem: "Windows 11 Home SL 64-bit",
  Chip: "Intel UHD Graphics 630",
  weight: 6.7,
};

const product39 = {
  local: "PC",
  name: "PC ASUS S501MD S501MD-312100044W",
  type: "TOPS",
  sale: 500,
  price: 479,
  image: "../img/listProduct/img39.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Intel Core i3-12100 (3.30 GHz - 4.3 GHz/12MB/4 nhân, 8 luồng)",
  RAM: "RAM: 1 x 8GB DDR4 3200MHz (2 Khe cắm)",
  operatingsystem: "Windows 11 Home SL 64-bit",
  Chip: "Intel UHD Graphics 730",
  weight: 7.8,
};

const product40 = {
  local: "PC",
  name: "PC ASUS S500SD S500SD-312100029W ",
  type: "TOPS",
  sale: 479,
  price: 459,
  image: "../img/listProduct/img40.webp",
  guarantee: 12,
  color: "Black",
  CPU: "Intel Core i3-12100 (3.30 GHz - 4.3 GHz/12MB/4 nhân, 8 luồng)",
  RAM: "RAM: 1 x 8GB DDR4 3200MHz (2 Khe cắm)",
  operatingsystem: "Windows 11 Home SL 64-bit",
  Chip: "Intel UHD Graphics 730",
  weight: 5.9,
};

const listProduct5 = [
  product33,
  product34,
  product35,
  product36,
  product37,
  product38,
  product39,
  product40,
];
// console.log(listProduct);

localStorage.setItem("listProduct1", JSON.stringify(listProduct1));
localStorage.setItem("listProduct2", JSON.stringify(listProduct2));
localStorage.setItem("listProduct3", JSON.stringify(listProduct3));
localStorage.setItem("listProduct4", JSON.stringify(listProduct4));
localStorage.setItem("listProduct5", JSON.stringify(listProduct5));;

//==========================================================================================================================================================================

const products = document.querySelector(".product-list");
const products2 = document.querySelector(".product-list-2");
const products3 = document.querySelector(".product-list-3");
const products4 = document.querySelector(".product-list-4");
const products5 = document.querySelector(".product-list-5");
// Load list product 1
const displayProduct = function () {
  products.innerHTML = "";
  const productList = listProduct1.forEach((product) => {
    const html = ` 

      <div class="product-box">
        <a href="detail-products.html" class="product-link">
        <img
          class="product-img"
          src="${product.image}"
          alt=""
        />
        <h4>${product.local}</h4>
        <h5>
          ${product.name}
        </h5>
        <p>$${product.sale}</p>
        <div class="product-cost">
          <span class="product-price">$${product.price}</span>
        </div>
      </a>
      <div class="product-link-item" href="">
              <i class="product-add-cart fa-solid fa-cart-plus"></i>
            </div>
      <div class = "information">
      <p class="guarantee">${product.guarantee}</p>
      <p class="color">${product.color}</p>
      <p class="cpu">${product.CPU}</p>
      <p class="ram">${product.RAM}</p>
      <p class="operatingsystem">${product.operatingsystem}</p> 
      <p class="chip">${product.Chip}</p>
      <p class="weight">${product.weight}</p>
      </div>
  </div>`;

    products.insertAdjacentHTML("afterbegin", html);
  });
};

displayProduct();
// load list products 2
const displayProduct2 = function () {
  products2.innerHTML = "";
  const productList = listProduct2.forEach((product) => {
    const html = ` 

      <div class="product-box">
        <a href="detail-products.html" class="product-link">
        <img
          class="product-img"
          src="${product.image}"
          alt=""
        />
        <h4>${product.local}</h4>
        <h5>
          ${product.name}
        </h5>
        <p>${product.sale}$</p>
        <div class="product-cost">
          <span class="product-price">${product.price}$</span>
        </div>
      </a>
      <div class="product-link-item" href="">
              <i class="product-add-cart fa-solid fa-cart-plus"></i>
            </div>
            <div class = "information">
            <p class="guarantee">${product.guarantee}</p>
            <p class="color">${product.color}</p>
            <p class="cpu">${product.CPU}</p>
            <p class="ram">${product.RAM}</p>
            <p class="operatingsystem">${product.operatingsystem}</p> 
            <p class="chip">${product.Chip}</p>
            <p class="weight">${product.weight}</p>
      </div>
  </div>`;

    products2.insertAdjacentHTML("afterbegin", html);
  });
};

displayProduct2();
// load list products 3
const displayProduct3 = function () {
  products3.innerHTML = "";
  const productList = listProduct3.forEach((product) => {
    const html = ` 

      <div class="product-box">
        <a href="detail-products.html" class="product-link">
        <img
          class="product-img"
          src="${product.image}"
          alt=""
        />
        <h4>${product.local}</h4>
        <h5>
          ${product.name}
        </h5>
        <p>${product.sale}$</p>
        <div class="product-cost">
          <span class="product-price">${product.price}$</span>
        </div>
      </a>
      <div class="product-link-item" href="">
              <i class="product-add-cart fa-solid fa-cart-plus"></i>
            </div>
            <div class = "information">
            <p class="guarantee">${product.guarantee}</p>
            <p class="color">${product.color}</p>
            <p class="cpu">${product.CPU}</p>
            <p class="ram">${product.RAM}</p>
            <p class="operatingsystem">${product.operatingsystem}</p> 
            <p class="chip">${product.Chip}</p>
            <p class="weight">${product.weight}</p>
      </div>
  </div>`;

    products3.insertAdjacentHTML("afterbegin", html);
  });
};

displayProduct3();

// load list products 4
const displayProduct4 = function () {
  products4.innerHTML = "";
  const productList = listProduct4.forEach((product) => {
    const html = ` 

      <div class="product-box">
        <a href="detail-products.html" class="product-link">
        <img
          class="product-img"
          src="${product.image}"
          alt=""
        />
        <h4>${product.local}</h4>
        <h5>
          ${product.name}
        </h5>
        <p>${product.sale}$</p>
        <div class="product-cost">
          <span class="product-price">${product.price}$</span>
        </div>
      </a>
      <div class="product-link-item" href="">
              <i class="product-add-cart fa-solid fa-cart-plus"></i>
            </div>
            <div class = "information">
            <p class="guarantee">${product.guarantee}</p>
            <p class="color">${product.color}</p>
            <p class="cpu">${product.CPU}</p>
            <p class="ram">${product.RAM}</p>
            <p class="operatingsystem">${product.operatingsystem}</p> 
            <p class="chip">${product.Chip}</p>
            <p class="weight">${product.weight}</p>
      </div>
  </div>`;

    products4.insertAdjacentHTML("afterbegin", html);
  });
};

displayProduct4();
// load list products 4
const displayProduct5 = function () {
  products5.innerHTML = "";
  const productList = listProduct5.forEach((product) => {
    const html = ` 

      <div class="product-box">
        <a href="detail-products.html" class="product-link">
        <img
          class="product-img"
          src="${product.image}"
          alt=""
        />
        <h4>${product.local}</h4>
        <h5>
          ${product.name}
        </h5>
        <p>${product.sale}$</p>
        <div class="product-cost">
          <span class="product-price">${product.price}$</span>
        </div>
      </a>
      <div class="product-link-item" href="">
              <i class="product-add-cart fa-solid fa-cart-plus"></i>
            </div>
            <div class = "information">
            <p class="guarantee">${product.guarantee}</p>
            <p class="color">${product.color}</p>
            <p class="cpu">${product.CPU}</p>
            <p class="ram">${product.RAM}</p>
            <p class="operatingsystem">${product.operatingsystem}</p> 
            <p class="chip">${product.Chip}</p>
            <p class="weight">${product.weight}</p>
      </div>
  </div>`;

    products5.insertAdjacentHTML("afterbegin", html);
  });
};

displayProduct5();
////
const product__list = document.querySelector(".product-list");
const product__item = document.querySelectorAll(".product-box");
const product__name = document.querySelector("h5");
const product__price = document.querySelector(".product-price");

const selectedProduct = {};

product__item.forEach((product) => {
  product.addEventListener("click", function () {
    selectedProduct.name = product.querySelector("h5").innerHTML;
    selectedProduct.price = product.querySelector(".product-price").innerHTML;
    selectedProduct.image = product
      .querySelector(".product-img")
      .getAttribute("src");
    selectedProduct.guarantee = product.querySelector(".guarantee").innerHTML;
    selectedProduct.color = product.querySelector(".color").innerHTML;
    selectedProduct.CPU = product.querySelector(".cpu").innerHTML;
    selectedProduct.RAM = product.querySelector(".ram").innerHTML;
    selectedProduct.operatingsystem =
      product.querySelector(".operatingsystem").innerHTML;
    selectedProduct.Chip = product.querySelector(".chip").innerHTML;
    selectedProduct.weight = product.querySelector(".weight").innerHTML;
    saveData();
  });
});
console.log(selectedProduct.name);
function saveData() {
  localStorage.setItem("name", selectedProduct.name);
  localStorage.setItem("image", selectedProduct.image);
  localStorage.setItem("price", selectedProduct.price);
  localStorage.setItem("guarantee", selectedProduct.guarantee);
  localStorage.setItem("color", selectedProduct.color);
  localStorage.setItem("CPU", selectedProduct.CPU);
  localStorage.setItem("RAM", selectedProduct.RAM);
  localStorage.setItem("operatingsystem", selectedProduct.operatingsystem);
  localStorage.setItem("Chip", selectedProduct.Chip);
  localStorage.setItem("weight", selectedProduct.weight);
}
///
console.log(localStorage.getItem("name"));
const btnAddToCart = document.querySelectorAll(".product-link-item");
let cartList = JSON.parse(localStorage.getItem("Cart"));
if (cartList == null) {
  cartList = [];
}
console.log(cartList);

btnAddToCart.forEach((btn) => {
  btn.addEventListener("click", addToCartClicked);
});

function checkCartProduct(productItem) {
  for (let i = 0; i < cartList.length; i++) {
    if (
      cartList[i].name == String(productItem.name) &&
      cartList[i].price == Number(productItem.price) &&
      String(cartList[i].img) == String(productItem.img)
    ) {
      return false;
    }
  }
  return true;
}

function addToCartClicked(event) {
  var btn = event.target;
  var productItem = btn.parentElement.parentElement;
  var productName = productItem.querySelector("h5").innerHTML;
  var productPrice = productItem
    .querySelector(".product-price")
    .innerHTML.slice(1);
  var productImg = productItem
    .querySelector(".product-img")
    .getAttribute("src");
  var cartProduct = productInformation(productName, productPrice, productImg);
  if (cartList.length == 0) {
    cartList.push(cartProduct);
    localStorage.setItem("Cart", JSON.stringify(cartList));
    alert("Add suscessfully");
    return true;
  }
  checkCartProduct(cartProduct);
  let check = checkCartProduct(cartProduct);
  console.log(checkCartProduct(cartProduct));
  if (checkCartProduct(cartProduct) == false) { 
    alert("You have added this product already");
  } else {
    alert("Added sucessfully");
    cartList.push(cartProduct);
    localStorage.setItem("Cart", JSON.stringify(cartList));
  }
}

function productInformation(productName, productPrice, productImg) {
  var productCart = {};
  productCart.name = productName;
  productCart.price = productPrice;
  productCart.img = productImg;
  return productCart;
}

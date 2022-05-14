import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

let mock_adapter = new MockAdapter(axios);
mock_adapter.onGet('/goods/list').reply(config => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([200, [{
      "id": "034db61a861345f9bb681b7f283dd1e1",
      "name": "宏碁(acer) V3-572G ",
      "price": "3499.0",
      "pthumbnail": "goodsimage/bfd2008fcbfb4cfcafc95983cf57dfec.jpg"
    },
    {
      "id": "04ec26885efc45bd9537711f7db8fabe",
      "name": "黑爵锋尚X3000 ",
      "price": "110.0",
      "pthumbnail": "goodsimage/1e75a9a69c654af48d4446e0135e92f4.jpg"
    },
    {
      "id": "0866079a93de4f99a83660abf3d41ddd",
      "name": "三星（SAMSUNG）270E5K-X05 ",
      "price": "3855.0",
      "pthumbnail": "goodsimage/38229862cf384c2dac4a01b9bf2a4c50.jpg"
    },
    {
      "id": "09099d7e183349669e3596462bd8846d",
      "name": "松下 Lumix DMC-FZ1000 ",
      "price": "4999.0",
      "pthumbnail": "goodsimage/6b2f511a856d4e40aebb0a58f4f66773.jpg"
    },
    {
      "id": "0ec9fcdc54e94189aa554135617828ce",
      "name": "华硕（ASUS）ZenPad10 Z300C ",
      "price": "1400.0",
      "pthumbnail": "goodsimage/93f09e04495e4c20adc4b733e9b6ffa3.jpg"
    },
    {
      "id": "174fe448869b45c9890b43f24793ff1d",
      "name": "酷比魔方 iwork10旗舰本 ",
      "price": "1109.0",
      "pthumbnail": "goodsimage/abbfcb460a874202988f77a8e49fe281.jpg"
    },
    {
      "id": "22395b73210745a9b6c4d5f4d1d5a12a",
      "name": "奥林巴斯（OLYMPUS）",
      "price": "1999.0",
      "pthumbnail": "goodsimage/eef007cb8fde4004a17bd04d6ddef974.jpg"
    },
    {
      "id": "317c22ea2269464a9ff8270e202f9c4d",
      "name": "卡西欧（CASIO）",
      "price": "6522.0",
      "pthumbnail": "goodsimage/7acafbfda91948eb89f510ccebb08508.jpg"
    },
    {
      "id": "435347e5e72a4afa89d5b72f7e502d11",
      "name": "炫光X-A9500无线套装 ",
      "price": "136.0",
      "pthumbnail": "goodsimage/d2f2f23e500c40cdb15f24d9f3edeba1.jpg"
    },
    {
      "id": "43bfced6539d49a4963bbb676c002934",
      "name": "中兴 AXON天机 A2015 ",
      "price": "2860.0",
      "pthumbnail": "goodsimage/30357763a9d54e6b910549d3ff10e148.jpg"
    },
    {
      "id": "46a44ed81d4c4616afd151a05da7cd8b",
      "name": "华硕（ASUS）K30BD-A3854M5 ",
      "price": "2855.0",
      "pthumbnail": "goodsimage/8768784b052146b39923028cbe8b21a8.jpg"
    },
    {
      "id": "4ec00eb43855403aa81dde1d8a05d538",
      "name": "联想（Lenovo）H3000 ",
      "price": "3422.0",
      "pthumbnail": "goodsimage/d26ec22fd43d4d3cb7144276f907ee36.jpg"
    },
    {
      "id": "6953f3fdd7c24254a0b3f36c58cad168",
      "name": "联想（Lenovo）KM4902 ",
      "price": "179.0",
      "pthumbnail": "goodsimage/7fb25199a7244b7bb1323c3c66f323a2.jpg"
    },
    {
      "id": "b4d486b01f464bde8acf10072917a2d3",
      "name": "台电（Teclast）X16 Pro ",
      "price": "1520.0",
      "pthumbnail": "goodsimage/75cdb85cfab645eda015c3b6870b1e0f.jpg"
    },
    {
      "id": "b7335156b250443284bcc2f33461befd",
      "name": "三星 Galaxy Note 3 Lite (N7508v) ",
      "price": "1400.0",
      "pthumbnail": "goodsimage/fdc1486b9c08425a9804aeacc840480a.jpg"
    },
    {
      "id": "bcdf6fa2606649498e415fe100cfac0a",
      "name": "海尔（Haier）天越Y3-Z353i",
      "price": "2200.0",
      "pthumbnail": "goodsimage/0210379971d04bfbb72fffd4c057f5d7.jpg"
    },
    {
      "id": "c1aea0f70ba74f1cb6fb117252db8b7c",
      "name": " 魅蓝note2 ",
      "price": "900.0",
      "pthumbnail": "goodsimage/7332b01a45c8401a9949ff8a0ed191d3.jpg"
    },
    {
      "id": "cd9e1d650c7545158eb89ccdd9d61394",
      "name": "双飞燕（A4TECH）6300F ",
      "price": "140.0",
      "pthumbnail": "goodsimage/9ef94aab96fe4dd2abfc69f0427385be.jpg"
    },
    {
      "id": "d375d22a8eab4b7a9ff8982085b297a8",
      "name": "Apple iPad mini 2 ",
      "price": "1900.0",
      "pthumbnail": "goodsimage/5236001479314e7089015d6dd7d09ab4.jpg"
    },
    {
      "id": "d5552aa19b154661a339f8a7ae3c5f26",
      "name": "小米（MI）",
      "price": "1550.0",
      "pthumbnail": "goodsimage/5275665e56c7423fa997f6810b97979d.jpg"
    },
    {
      "id": "d95968ea2f384d37b2953b43718535bb",
      "name": "乐视（Letv）乐1S（X500）",
      "price": "1199.0",
      "pthumbnail": "goodsimage/5b8992df2aa3481a9e458d3fc1c2871b.jpg"
    },
    {
      "id": "e082e3c8708c4eef9b30c9ee7b8924f0",
      "name": "罗技（Logitech）MK260",
      "price": "130.0",
      "pthumbnail": "goodsimage/e87efc71db024bda9a7ce5808a580fed.jpg"
    },
    {
      "id": "f343e13006884a2a9c721ed18e67f275",
      "name": "诺基亚N1平板电脑",
      "price": "1450.0",
      "pthumbnail": "goodsimage/4b49b65c151040918e1dbeab1a4aa7c5.jpg"
    }
  ]]), 0)
  })
});


//El hermoso array de productos

const motos = [
  {
    marca: "Honda",
    paisOrigen: "Japón",
    modelos: [
      {
        modelo: "CBR500R",
        cilindrada: 471,
        año: 2020,
        kilometraje: 32000,
        tipo: "Deportivas",
        precio: 7500,
        imagen:
          "https://images.topgear.com.ph/topgear/images/2018/10/11/cbr500r-main1-1539220163.jpg",
      },
      {
        modelo: "CBR650R",
        cilindrada: 649,
        año: 2022,
        kilometraje: 25000,
        tipo: "Deportivas",
        precio: 9500,
        imagen: "https://650f.bike/showcase/2022-cbr650r.148/cover-image",
      },
      {
        modelo: "CBR1000RR",
        cilindrada: 999,
        año: 2018,
        kilometraje: 40000,
        tipo: "Deportivas",
        precio: 15000,
        imagen: "https://i.redd.it/r9yrz6dpj0vb1.jpg",
      },
    ],
  },
  {
    marca: "Yamaha",
    paisOrigen: "Japón",
    modelos: [
      {
        modelo: "YZF-R6",
        cilindrada: 599,
        año: 2019,
        kilometraje: 28000,
        tipo: "Deportivas",
        precio: 11000,
        imagen: "https://i.redd.it/3qk5go54q0181.jpg",
      },
      {
        modelo: "YZF-R1",
        cilindrada: 998,
        año: 2021,
        kilometraje: 35000,
        tipo: "Deportivas",
        precio: 16000,
        imagen:
          "https://bikes.motobank.co.uk/fp/27230/yamaha-yzf-r1-2021-midnight-black_351569.jpg",
      },
      {
        modelo: "MT-09",
        cilindrada: 847,
        año: 2017,
        kilometraje: 30000,
        tipo: "Naked",
        precio: 9000,
        imagen:
          "https://www.thebikemarket.co.uk/media/2652061/yamaha-mt-09-2017-ch.jpg?width=640",
      },
      {
        modelo: "MT-07",
        cilindrada: 689,
        año: 2020,
        kilometraje: 18000,
        tipo: "Naked",
        precio: 7500,
        imagen:
          "https://akmotorcycles.com/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-03-at-12.55.56-PM.jpeg",
      },
      {
        modelo: "Tenere 700",
        cilindrada: 689,
        año: 2022,
        kilometraje: 12000,
        tipo: "Adventure",
        precio: 12000,
        imagen:
          "https://roaddirt.tv/wp-content/uploads/2022/05/IMG_0223-1100x640.jpg",
      },
      {
        modelo: "XSR900",
        cilindrada: 847,
        año: 2018,
        kilometraje: 25000,
        tipo: "Retro",
        precio: 10000,
        imagen:
          "https://preview.redd.it/xsr-900-2018-v0-37qtzb4orrmb1.jpg?width=640&crop=smart&auto=webp&s=4485848b057209fca3f14fa0ff5e4c17c146cb53",
      },
    ],
  },
  {
    marca: "Kawasaki",
    paisOrigen: "Japón",
    modelos: [
      {
        modelo: "Ninja ZX-6R",
        cilindrada: 636,
        año: 2023,
        kilometraje: 15000,
        tipo: "Deportivas",
        precio: 11500,
        imagen:
          "https://cloudfront-us-east-1.images.arcpublishing.com/octane/Z4UIHWRP6FASFKM4USBK7LXSTY.jpg",
      },
      {
        modelo: "Ninja 650",
        cilindrada: 649,
        año: 2020,
        kilometraje: 22000,
        tipo: "Deportivas",
        precio: 8500,
        imagen:
          "https://www.cyclenews.com/wp-content/uploads/2020/03/2020-Kawasaki-Ninja-650-MSRP.jpg",
      },
      {
        modelo: "Z900",
        cilindrada: 948,
        año: 2019,
        kilometraje: 28000,
        tipo: "Naked",
        precio: 9500,
        imagen:
          "https://i0.wp.com/canadamotoguide.com/wp-content/uploads/2019/07/DSC_0591.jpg?resize=696%2C462&ssl=1",
      },
      {
        modelo: "Ninja 400",
        cilindrada: 399,
        año: 2021,
        kilometraje: 10000,
        tipo: "Deportivas",
        precio: 6000,
        imagen:
          "https://5.imimg.com/data5/SELLER/Default/2023/4/301191977/DJ/NE/XW/188093224/61a072471984ce11427edcc2.jpg",
      },
      {
        modelo: "Versys 650",
        cilindrada: 649,
        año: 2018,
        kilometraje: 35000,
        tipo: "Adventure",
        precio: 8000,
        imagen:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWn9uG9xwRnGN1eQqNwy7sEwwUcyk1lK-xA&s",
      },
      {
        modelo: "Vulcan S",
        cilindrada: 649,
        año: 2017,
        kilometraje: 40000,
        tipo: "Cruiser",
        precio: 7500,
        imagen:
          "https://res.cloudinary.com/twisted-road/image/upload/c_fill,g_auto,h_600,w_900,q_auto,f_auto/v1676951191/twisted_api/production/vehicles/ejsy4ugmo86imns7uqwm.jpg",
      },
    ],
  },
  {
    marca: "Suzuki",
    paisOrigen: "Japón",
    modelos: [
      {
        modelo: "GSX-R600",
        cilindrada: 599,
        año: 2018,
        kilometraje: 30000,
        tipo: "Deportivas",
        precio: 8500,
        imagen:
          "https://mcn-images.bauersecure.com/wp-images/4009/1440x960/suzuki_gsx-r600_8.jpg?mode=max&quality=90&scale=down",
      },
      {
        modelo: "GSX-R750",
        cilindrada: 750,
        año: 2020,
        kilometraje: 25000,
        tipo: "Deportivas",
        precio: 9500,
        imagen:
          "https://i.redd.it/3snl3zju3jr91.jpg",
      },
      {
        modelo: "GSX-S750",
        cilindrada: 749,
        año: 2019,
        kilometraje: 18000,
        tipo: "Naked",
        precio: 8000,
        imagen:
          "https://bike.net/res/media/img/oy800/ref/807/84542.jpg",
      },
      {
        modelo: "V-Strom 650",
        cilindrada: 645,
        año: 2022,
        kilometraje: 20000,
        tipo: "Adventure",
        precio: 9000,
        imagen:
          "https://www.zabikers.co.za/wp-content/uploads/2022/07/IMG_0085.jpg",
      },
      {
        modelo: "Boulevard M109R",
        cilindrada: 1783,
        año: 2017,
        kilometraje: 35000,
        tipo: "Cruiser",
        precio: 12000,
        imagen:
          "https://images.offerup.com/aSQqGfTzgWG6Ugr2EyOCkdfsrvQ=/1280x959/00f0/00f05dd7f9ee42d6885939c1bc51769c.jpg",
      },
      {
        modelo: "Hayabusa",
        cilindrada: 1340,
        año: 2021,
        kilometraje: 15000,
        tipo: "Sport Touring",
        precio: 14000,
        imagen:
          "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/07/2021-Suzuki-Hayabusa-Profile.jpg",
      },
    ],
  },
  {
    marca: "Ducati",
    paisOrigen: "Italia",
    modelos: [
      {
        modelo: "Panigale V4",
        cilindrada: 1103,
        año: 2020,
        kilometraje: 20000,
        tipo: "Superbike",
        precio: 22000,
        imagen:
          "https://res.cloudinary.com/twisted-road/image/upload/c_fill,g_auto,h_600,w_900,q_auto,f_auto/v1628982352/twisted_api/production/vehicles/udbys8w9qd0ludhomuen.jpg",
      },
      {
        modelo: "Monster 821",
        cilindrada: 821,
        año: 2019,
        kilometraje: 22000,
        tipo: "Naked",
        precio: 15000,
        imagen:
          "https://bikesales.pxcrush.net/bikesales/cars/dealer/s3ptg694lvwp55ybphii5grb.jpg?pxc_width=900&pxc_height=600&pxc_method=crop&pxc_format=auto",
      },
      {
        modelo: "Multistrada V4",
        cilindrada: 1158,
        año: 2021,
        kilometraje: 15000,
        tipo: "Adventure",
        precio: 18000,
        imagen:
          "https://www.motorcyclenews.com/wp-images/4962/_2022_multistrada_v4.jpg",
      },
      {
        modelo: "Scrambler 1100",
        cilindrada: 1079,
        año: 2018,
        kilometraje: 28000,
        tipo: "Scrambler",
        precio: 13000,
        imagen:
          "https://cloudfront-us-east-1.images.arcpublishing.com/octane/2JBBU3NVKTW65RZFRLVNIVFCIY.jpg",
      },
      {
        modelo: "Diavel 1260",
        cilindrada: 1262,
        año: 2022,
        kilometraje: 10000,
        tipo: "Cruiser",
        precio: 19000,
        imagen:
          "https://www.motoplanete.com/ducati/zoom-700px/Ducati-1260-Diavel-S-2022-700-px.webp",
      },
      {
        modelo: "Streetfighter V4",
        cilindrada: 1103,
        año: 2023,
        kilometraje: 8000,
        tipo: "Naked",
        precio: 20000,
        imagen:
          "https://www.webbikeworld.com/wp-content/uploads/2023/10/mainimage.jpg",
      },
    ],
  },
  {
    marca: "BMW",
    paisOrigen: "Alemania",
    modelos: [
      {
        modelo: "S1000RR",
        cilindrada: 999,
        año: 2020,
        kilometraje: 18000,
        tipo: "Superbike",
        precio: 23000,
        imagen:
          "https://www.s1000rrforum.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down//attachments/91ec134a-ee73-4505-8921-f1e5adb24b31-jpeg.222321/",
      },
      {
        modelo: "R1250GS",
        cilindrada: 1254,
        año: 2021,
        kilometraje: 25000,
        tipo: "Adventure",
        precio: 20000,
        imagen:
          "https://cloudfront-us-east-1.images.arcpublishing.com/octane/ICZZKBQKQFHNNNJFE5S657LHLI.jpg",
      },
      {
        modelo: "F900R",
        cilindrada: 895,
        año: 2019,
        kilometraje: 30000,
        tipo: "Naked",
        precio: 12000,
        imagen:
          "https://www.supermoto8.net/images/data/2_DSCF8263.jpg",
      },
      {
        modelo: "G310GS",
        cilindrada: 313,
        año: 2018,
        kilometraje: 35000,
        tipo: "Adventure",
        precio: 8000,
        imagen:
          "https://www.sernac.cl/portal/619/articles-57775_imagen_01.jpg",
      },
      {
        modelo: "R nineT",
        cilindrada: 1170,
        año: 2017,
        kilometraje: 40000,
        tipo: "Retro",
        precio: 15000,
        imagen:
          "https://cdn-fastly.motorcycle.com/media/2023/02/23/8869771/2017-bmw-r-ninet-pure-review.jpg?size=720x845&nocrop=1",
      },
      {
        modelo: "C400X",
        cilindrada: 350,
        año: 2022,
        kilometraje: 15000,
        tipo: "Scooter",
        precio: 7000,
        imagen:
          "https://fotografias.larazon.es/clipping/cmsimages01/2021/08/05/AA0A7251-A376-4731-BBDE-E3E0A454CF72/69.jpg?crop=3277,1843,x0,y307&width=1280&height=720&optimize=low&format=jpg",
      },
    ],
  },
  {
    marca: "Triumph",
    paisOrigen: "Reino Unido",
    modelos: [
      {
        modelo: "Street Triple RS",
        cilindrada: 765,
        año: 2023,
        kilometraje: 12000,
        tipo: "Naked",
        precio: 14000,
        imagen:
          "https://www.motorcyclenews.com/wp-images/194543/triumph-street-triple-765-r-01.jpg",
      },
      {
        modelo: "Tiger 800",
        cilindrada: 800,
        año: 2018,
        kilometraje: 28000,
        tipo: "Adventure",
        precio: 11000,
        imagen:
          "https://ridermagazinereviews.com/wp-content/uploads/2019/12/2018-Triumph-Tiger-800-XCA.jpg",
      },
      {
        modelo: "Speed Triple RS",
        cilindrada: 1050,
        año: 2020,
        kilometraje: 22000,
        tipo: "Naked",
        precio: 13000,
        imagen:
          "https://bikesales.pxcrush.net/bikesales/cars/dealer/cwqtgxghgdu7151ol8sxiiubb.jpg?pxc_method=fitfill&pxc_bgtype=self&height=725&width=1087",
      },
      {
        modelo: "Bonneville T120",
        cilindrada: 1200,
        año: 2019,
        kilometraje: 20000,
        tipo: "Retro",
        precio: 12000,
        imagen:
          "https://preview.redd.it/3xnks9dp87791.jpg?width=1080&crop=smart&auto=webp&s=5cc77fa72d7ac6c14e6071b52a9404b7aa709731",
      },
      {
        modelo: "Rocket 3",
        cilindrada: 2458,
        año: 2021,
        kilometraje: 15000,
        tipo: "Cruiser",
        precio: 18000,
        imagen:
          "https://da4dkroembtou.cloudfront.net/wp-content/uploads/2021/11/Rocket_1C.jpg",
      },
      {
        modelo: "Scrambler 1200",
        cilindrada: 1200,
        año: 2022,
        kilometraje: 18000,
        tipo: "Scrambler",
        precio: 14000,
        imagen:
          "https://cdnmedia.endeavorsuite.com/images/organizations/4faeba79-0e61-45a7-a97e-928d620070c5/inventory/11470341/Image%20(3)%20(1).jpeg?v=1670974739997",
      },
    ],
  },
  {
    marca: "Harley-Davidson",
    paisOrigen: "Estados Unidos",
    modelos: [
      {
        modelo: "Sportster Iron 883",
        cilindrada: 883,
        año: 2017,
        kilometraje: 35000,
        tipo: "Cruiser",
        precio: 12000,
        imagen:
          "https://ultimatemotorcycling.com/wp-content/uploads/2016/12/2017-Harley-Davidson-Sportster-Iron-883-motorcycle-review-7.jpg",
      },
      {
        modelo: "Street Glide",
        cilindrada: 1868,
        año: 2020,
        kilometraje: 25000,
        tipo: "Touring",
        precio: 18000,
        imagen:
          "https://cloudfront-us-east-1.images.arcpublishing.com/octane/4FHYLU6P2FH4BEV364B2BGHY5Q.jpg",
      },
      {
        modelo: "Fat Bob 114",
        cilindrada: 1868,
        año: 2019,
        kilometraje: 22000,
        tipo: "Cruiser",
        precio: 16000,
        imagen:
          "https://d2bywgumb0o70j.cloudfront.net/2021/01/12/07e7df1614c89bba646b52e3bd10aed0_058874f2527b7f96.jpg",
      },
      {
        modelo: "Road King",
        cilindrada: 1746,
        año: 2021,
        kilometraje: 18000,
        tipo: "Touring",
        precio: 20000,
        imagen:
          "https://cdn.motor1.com/images/mgl/gZj0m/s1/2021-harley-davidson-road-king-special---side-left.jpg",
      },
      {
        modelo: "Low Rider S",
        cilindrada: 1868,
        año: 2018,
        kilometraje: 30000,
        tipo: "Cruiser",
        precio: 15000,
        imagen:
          "https://cdn-fastly.motorcycle.com/media/2023/02/23/8876392/2018-harley-davidson-low-rider-review-first-ride.jpg?size=720x845&nocrop=1",
      },
      {
        modelo: "Pan America 1250",
        cilindrada: 1252,
        año: 2022,
        kilometraje: 15000,
        tipo: "Adventure",
        precio: 22000,
        imagen:
          "https://www.harley-davidson.com/content/dam/h-d/images/category-images/2022/short-hero/customized/2022-customized-pan-american-short-hero.jpg?impolicy=myresize&rw=1100",
      },
    ],
  },
  {
    marca: "Aprilia",
    paisOrigen: "Italia",
    modelos: [
      {
        modelo: "RSV4",
        cilindrada: 1078,
        año: 2020,
        kilometraje: 15000,
        tipo: "Superbike",
        precio: 18000,
        imagen:
          "https://imgcdn.zigwheels.my/large/gallery/exterior/52/777/aprilia-rsv4-slant-rear-view-full-image-771417.jpg",
      },
      {
        modelo: "Tuono V4 1100",
        cilindrada: 1077,
        año: 2021,
        kilometraje: 18000,
        tipo: "Naked",
        precio: 17000,
        imagen:
          "https://www.motorcyclenews.com/wp-images/5023/aprilia_tuono_v4_fac_01.jpg",
      },
      {
        modelo: "Shiver 900",
        cilindrada: 896,
        año: 2019,
        kilometraje: 22000,
        tipo: "Naked",
        precio: 12000,
        imagen:
          "https://images5.1000ps.net/b-f_W3005511-aprilia-shiver-900-test-2019-636910940901895256.jpg",
      },
      {
        modelo: "RS 660",
        cilindrada: 659,
        año: 2022,
        kilometraje: 10000,
        tipo: "Sport",
        precio: 14000,
        imagen:
          "https://i.redd.it/so-excited-to-own-my-brand-new-2022-aprilia-rs660-apex-v0-kbhygugf09w81.jpg?width=4032&format=pjpg&auto=webp&s=e3630339be7d438b93f459d2957f40cb56dfbd64",
      },
      {
        modelo: "Dorsoduro 900",
        cilindrada: 896,
        año: 2018,
        kilometraje: 28000,
        tipo: "Supermotard",
        precio: 11000,
        imagen:
          "https://www.revzilla.com/blog_content_image/image/45674/Aprilia_Dorsoduro_right_KW.jpg",
      },
      {
        modelo: "SR 125",
        cilindrada: 124,
        año: 2023,
        kilometraje: 8000,
        tipo: "Scooter",
        precio: 4000,
        imagen:
          "https://www.motociclismo.es/uploads/s1/12/39/56/74/voge-sr1-125-18.jpeg",
      },
    ],
  },
  {
    marca: "KTM",
    paisOrigen: "Austria",
    modelos: [
      {
        modelo: "RC 390",
        cilindrada: 373,
        año: 2021,
        kilometraje: 10000,
        tipo: "Deportivas",
        precio: 7500,
        imagen:
          "https://i.ytimg.com/vi/IiCSJ9K0t5k/maxresdefault.jpg",
      },
      {
        modelo: "Duke 390",
        cilindrada: 373,
        año: 2020,
        kilometraje: 15000,
        tipo: "Naked",
        precio: 7000,
        imagen:
          "https://preview.redd.it/for-sale-2020-ktm-390-duke-5-800-v0-7s490siida991.jpg?width=1080&crop=smart&auto=webp&s=f728539779ba60ffed507be5930a9dd41a7af74e",
      },
      {
        modelo: "Adventure 390",
        cilindrada: 373,
        año: 2022,
        kilometraje: 8000,
        tipo: "Adventure",
        precio: 8500,
        imagen:
          "https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/1_34.jpeg",
      },
      {
        modelo: "Super Duke R",
        cilindrada: 1290,
        año: 2019,
        kilometraje: 25000,
        tipo: "Naked",
        precio: 12000,
        imagen:
          "https://i.redd.it/161p3we7h7w41.jpg",
      },
      {
        modelo: "390 Adventure",
        cilindrada: 373,
        año: 2023,
        kilometraje: 12000,
        tipo: "Adventure",
        precio: 9000,
        imagen:
          "https://carupdater.com/carlibrary/mciverandveitch/large/999726896_1.jpg",
      },
      {
        modelo: "RC 200",
        cilindrada: 199,
        año: 2018,
        kilometraje: 30000,
        tipo: "Deportivas",
        precio: 5500,
        imagen:
          "https://media.karousell.com/media/photos/products/2021/10/23/2018_ktm_rc200_for_sale_1634999299_8a15c211_progressive.jpg",
      },
    ],
  },
  {
    marca: "MV Agusta",
    paisOrigen: "Italia",
    modelos: [
      {
        modelo: "F4",
        cilindrada: 998,
        año: 2017,
        kilometraje: 40000,
        tipo: "Superbike",
        precio: 25000,
      },
      {
        modelo: "Brutale 800",
        cilindrada: 798,
        año: 2018,
        kilometraje: 35000,
        tipo: "Naked",
        precio: 18000,
      },
      {
        modelo: "Turismo Veloce 800",
        cilindrada: 798,
        año: 2020,
        kilometraje: 22000,
        tipo: "Sport Touring",
        precio: 20000,
      },
      {
        modelo: "Dragster 800 RR",
        cilindrada: 798,
        año: 2021,
        kilometraje: 18000,
        tipo: "Naked",
        precio: 19000,
      },
      {
        modelo: "Rivale 800",
        cilindrada: 798,
        año: 2019,
        kilometraje: 25000,
        tipo: "Adventure",
        precio: 21000,
      },
      {
        modelo: "F3 675",
        cilindrada: 675,
        año: 2022,
        kilometraje: 15000,
        tipo: "Superbike",
        precio: 17000,
      },
    ],
  },
  {
    marca: "Moto Guzzi",
    paisOrigen: "Italia",
    modelos: [
      {
        modelo: "V7 III",
        cilindrada: 744,
        año: 2018,
        kilometraje: 28000,
        tipo: "Retro",
        precio: 10000,
      },
      {
        modelo: "V85 TT",
        cilindrada: 853,
        año: 2019,
        kilometraje: 25000,
        tipo: "Adventure",
        precio: 13000,
      },
      {
        modelo: "Audace",
        cilindrada: 1380,
        año: 2017,
        kilometraje: 30000,
        tipo: "Cruiser",
        precio: 15000,
      },
      {
        modelo: "California 1400 Touring",
        cilindrada: 1380,
        año: 2021,
        kilometraje: 20000,
        tipo: "Touring",
        precio: 16000,
      },
      {
        modelo: "Eldorado",
        cilindrada: 1380,
        año: 2022,
        kilometraje: 15000,
        tipo: "Cruiser",
        precio: 17000,
      },
      {
        modelo: "V9 Bobber",
        cilindrada: 853,
        año: 2023,
        kilometraje: 10000,
        tipo: "Custom",
        precio: 12000,
      },
    ],
  },
  {
    marca: "Royal Enfield",
    paisOrigen: "India",
    modelos: [
      {
        modelo: "Interceptor 650",
        cilindrada: 648,
        año: 2020,
        kilometraje: 15000,
        tipo: "Retro",
        precio: 8000,
      },
      {
        modelo: "Himalayan",
        cilindrada: 411,
        año: 2021,
        kilometraje: 18000,
        tipo: "Adventure",
        precio: 6000,
      },
      {
        modelo: "Continental GT 650",
        cilindrada: 648,
        año: 2019,
        kilometraje: 22000,
        tipo: "Café Racer",
        precio: 8500,
      },
      {
        modelo: "Classic 350",
        cilindrada: 346,
        año: 2018,
        kilometraje: 25000,
        tipo: "Classic",
        precio: 5000,
      },
      {
        modelo: "Meteor 350",
        cilindrada: 349,
        año: 2022,
        kilometraje: 12000,
        tipo: "Cruiser",
        precio: 7000,
      },
      {
        modelo: "Bullet 350",
        cilindrada: 346,
        año: 2017,
        kilometraje: 30000,
        tipo: "Classic",
        precio: 5500,
      },
    ],
  },
  {
    marca: "Benelli",
    paisOrigen: "Italia",
    modelos: [
      {
        modelo: "Leoncino 500",
        cilindrada: 500,
        año: 2019,
        kilometraje: 22000,
        tipo: "Naked",
        precio: 7000,
      },
      {
        modelo: "TRK 502",
        cilindrada: 500,
        año: 2020,
        kilometraje: 18000,
        tipo: "Adventure",
        precio: 6500,
      },
      {
        modelo: "502C",
        cilindrada: 500,
        año: 2021,
        kilometraje: 15000,
        tipo: "Cruiser",
        precio: 6000,
      },
      {
        modelo: "Imperiale 400",
        cilindrada: 374,
        año: 2018,
        kilometraje: 28000,
        tipo: "Classic",
        precio: 5500,
      },
      {
        modelo: "Leoncino 800",
        cilindrada: 754,
        año: 2022,
        kilometraje: 10000,
        tipo: "Naked",
        precio: 10000,
      },
      {
        modelo: "TRK 800",
        cilindrada: 754,
        año: 2023,
        kilometraje: 8000,
        tipo: "Adventure",
        precio: 12000,
      },
    ],
  },
  {
    marca: "Indian",
    paisOrigen: "Estados Unidos",
    modelos: [
      {
        modelo: "Scout Bobber",
        cilindrada: 1133,
        año: 2017,
        kilometraje: 30000,
        tipo: "Cruiser",
        precio: 14000,
      },
      {
        modelo: "FTR 1200",
        cilindrada: 1203,
        año: 2019,
        kilometraje: 25000,
        tipo: "Naked",
        precio: 16000,
      },
      {
        modelo: "Chieftain",
        cilindrada: 1811,
        año: 2020,
        kilometraje: 18000,
        tipo: "Touring",
        precio: 18000,
      },
      {
        modelo: "Springfield",
        cilindrada: 1811,
        año: 2021,
        kilometraje: 15000,
        tipo: "Touring",
        precio: 19000,
      },
      {
        modelo: "Roadmaster",
        cilindrada: 1890,
        año: 2018,
        kilometraje: 28000,
        tipo: "Touring",
        precio: 20000,
      },
      {
        modelo: "Chief Dark Horse",
        cilindrada: 1890,
        año: 2022,
        kilometraje: 12000,
        tipo: "Cruiser",
        precio: 22000,
      },
    ],
  },
  {
    marca: "Zero Motorcycles",
    paisOrigen: "Estados Unidos",
    modelos: [
      {
        modelo: "SR/F",
        cilindrada: 0,
        año: 2020,
        kilometraje: 8000,
        tipo: "Eléctrica",
        precio: 18000,
      },
      {
        modelo: "SR/S",
        cilindrada: 0,
        año: 2021,
        kilometraje: 10000,
        tipo: "Eléctrica",
        precio: 20000,
      },
      {
        modelo: "DSR",
        cilindrada: 0,
        año: 2019,
        kilometraje: 12000,
        tipo: "Eléctrica",
        precio: 16000,
      },
      {
        modelo: "FXS",
        cilindrada: 0,
        año: 2018,
        kilometraje: 15000,
        tipo: "Eléctrica",
        precio: 14000,
      },
      {
        modelo: "SRF Premium",
        cilindrada: 0,
        año: 2022,
        kilometraje: 6000,
        tipo: "Eléctrica",
        precio: 22000,
      },
      {
        modelo: "DS",
        cilindrada: 0,
        año: 2023,
        kilometraje: 4000,
        tipo: "Eléctrica",
        precio: 24000,
      },
    ],
  },
  {
    marca: "Husqvarna",
    paisOrigen: "Suecia",
    modelos: [
      {
        modelo: "Vitpilen 701",
        cilindrada: 692,
        año: 2018,
        kilometraje: 28000,
        tipo: "Café Racer",
        precio: 11000,
      },
      {
        modelo: "Svartpilen 401",
        cilindrada: 373,
        año: 2019,
        kilometraje: 25000,
        tipo: "Scrambler",
        precio: 9000,
      },
      {
        modelo: "701 Enduro",
        cilindrada: 692,
        año: 2020,
        kilometraje: 18000,
        tipo: "Adventure",
        precio: 12000,
      },
      {
        modelo: "FE 501s",
        cilindrada: 510,
        año: 2021,
        kilometraje: 22000,
        tipo: "Enduro",
        precio: 13000,
      },
      {
        modelo: "TE 300i",
        cilindrada: 293,
        año: 2022,
        kilometraje: 15000,
        tipo: "Off-Road",
        precio: 11000,
      },
      {
        modelo: "701 Supermoto",
        cilindrada: 692,
        año: 2023,
        kilometraje: 12000,
        tipo: "Supermoto",
        precio: 12500,
      },
    ],
  },
  {
    marca: "Bimota",
    paisOrigen: "Italia",
    modelos: [
      {
        modelo: "KB4",
        cilindrada: 1000,
        año: 2022,
        kilometraje: 10000,
        tipo: "Superbike",
        precio: 25000,
      },
      {
        modelo: "Tesio",
        cilindrada: 1200,
        año: 2021,
        kilometraje: 12000,
        tipo: "Naked",
        precio: 23000,
      },
      {
        modelo: "KB3",
        cilindrada: 1100,
        año: 2020,
        kilometraje: 15000,
        tipo: "Sport",
        precio: 22000,
      },
      {
        modelo: "Tesi H2",
        cilindrada: 998,
        año: 2019,
        kilometraje: 18000,
        tipo: "Superbike",
        precio: 24000,
      },
      {
        modelo: "DB11 VLX",
        cilindrada: 1100,
        año: 2018,
        kilometraje: 20000,
        tipo: "Naked",
        precio: 21000,
      },
      {
        modelo: "KB1",
        cilindrada: 1000,
        año: 2017,
        kilometraje: 25000,
        tipo: "Sport",
        precio: 20000,
      },
    ],
  },
  {
    marca: "Kymco",
    paisOrigen: "Taiwán",
    modelos: [
      {
        modelo: "AK 550",
        cilindrada: 550,
        año: 2019,
        kilometraje: 20000,
        tipo: "Scooter",
        precio: 9000,
      },
      {
        modelo: "XCITING S 400",
        cilindrada: 400,
        año: 2020,
        kilometraje: 18000,
        tipo: "Scooter",
        precio: 8000,
      },
      {
        modelo: "People S 125",
        cilindrada: 125,
        año: 2018,
        kilometraje: 25000,
        tipo: "Scooter",
        precio: 3000,
      },
      {
        modelo: "Super Dink 350",
        cilindrada: 350,
        año: 2021,
        kilometraje: 15000,
        tipo: "Scooter",
        precio: 6000,
      },
      {
        modelo: "Xciting 300 R",
        cilindrada: 300,
        año: 2022,
        kilometraje: 12000,
        tipo: "Scooter",
        precio: 5000,
      },
      {
        modelo: "Filly 125",
        cilindrada: 125,
        año: 2017,
        kilometraje: 28000,
        tipo: "Scooter",
        precio: 2500,
      },
    ],
  },
  {
    marca: "SYM",
    paisOrigen: "Taiwán",
    modelos: [
      {
        modelo: "Wolf CR300i",
        cilindrada: 278,
        año: 2021,
        kilometraje: 22000,
        tipo: "Naked",
        precio: 5000,
      },
      {
        modelo: "Maxsym TL",
        cilindrada: 465,
        año: 2020,
        kilometraje: 18000,
        tipo: "Scooter",
        precio: 6000,
      },
      {
        modelo: "NH-Trazer 300",
        cilindrada: 278,
        año: 2019,
        kilometraje: 25000,
        tipo: "Naked",
        precio: 4500,
      },
      {
        modelo: "Jet X 125",
        cilindrada: 124,
        año: 2018,
        kilometraje: 30000,
        tipo: "Scooter",
        precio: 3000,
      },
      {
        modelo: "HD2 200",
        cilindrada: 171,
        año: 2022,
        kilometraje: 15000,
        tipo: "Scooter",
        precio: 3500,
      },
      {
        modelo: "CroX 125",
        cilindrada: 124,
        año: 2017,
        kilometraje: 28000,
        tipo: "Scooter",
        precio: 2800,
      },
    ],
  },
  {
    marca: "Vespa",
    paisOrigen: "Italia",
    modelos: [
      {
        modelo: "Primavera 125",
        cilindrada: 125,
        año: 2020,
        kilometraje: 15000,
        tipo: "Scooter",
        precio: 4000,
      },
      {
        modelo: "GTS Super 300",
        cilindrada: 278,
        año: 2019,
        kilometraje: 18000,
        tipo: "Scooter",
        precio: 6000,
      },
      {
        modelo: "946 Red",
        cilindrada: 155,
        año: 2018,
        kilometraje: 22000,
        tipo: "Scooter",
        precio: 7000,
      },
      {
        modelo: "Primavera 50",
        cilindrada: 50,
        año: 2021,
        kilometraje: 12000,
        tipo: "Scooter",
        precio: 3000,
      },
      {
        modelo: "Elettrica",
        cilindrada: 0,
        año: 2022,
        kilometraje: 10000,
        tipo: "Eléctrica",
        precio: 5000,
      },
      {
        modelo: "Sprint 150",
        cilindrada: 154,
        año: 2017,
        kilometraje: 28000,
        tipo: "Scooter",
        precio: 4500,
        imagen:
          "https://www.reinaintlauto.com/galleria_images/2090/2090_main_f.jpg",
      },
    ],
  },
];
/* 
let carro = [];
let total = 0;

//Ahora se viene lo bueno

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".boton-agregar");

function cargarProductos() {
  motos.forEach((moto) => {
    moto.modelos.forEach((modelo) => {
      const div = document.createElement("div");
      div.classList.add("moto");
      div.innerHTML = `
        <img class="imagen-producto" src="${modelo.imagen}" alt="${modelo.modelo}" />
        <div class="info-producto">
          <h3 class="titulo-producto">${modelo.modelo}</h3>
          <p class="marca-producto">Marca: ${moto.marca}</p>
          <p class="ano-producto">Año: ${modelo.año}</p>
          <p class="cilindrada-producto">Cilindrada: ${modelo.cilindrada}</p>
          <p class="kilometraje-producto">Kilometraje: ${modelo.kilometraje}</p>
          <p class="tipo-producto">Tipo: ${modelo.tipo}</p>
          <p class="precio-producto">Precio: $ ${modelo.precio}</p>
          <button class="boton-agregar">Agregar</button>
        </div>
      `;
      contenedorProductos.append(div);
    });
  });
}
cargarProductos(); */

//Agregamos los productos al carrito cada vez que se presione el boton de "Agregar"

/* botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    const moto = e.target.parentElement.parentElement;
    const modelo = {
      modelo: moto.querySelector(".titulo-producto").textContent,
      precio: parseInt(
        moto.querySelector(".precio-producto").textContent.replace("$ ", "")
      ),
    };
    carro.push(modelo);
    actualizarCarrito();
    console.log("click");
  });
}); */

let carro = [];
let total = 0;
// Ahora se viene lo bueno
const contenedorProductos = document.querySelector("#contenedor-productos");
function cargarProductos() {
  motos.forEach((moto) => {
    moto.modelos.forEach((modelo) => {
      const div = document.createElement("div");
      div.classList.add("moto");
      div.innerHTML = `
        <img class="imagen-producto" src="${modelo.imagen}" alt="${modelo.modelo}" />
        <div class="info-producto">
          <h3 class="titulo-producto">${modelo.modelo}</h3>
          <p class="marca-producto">Marca: ${moto.marca}</p>
          <p class="ano-producto">Año: ${modelo.año}</p>
          <p class="cilindrada-producto">Cilindrada: ${modelo.cilindrada}</p>
          <p class="kilometraje-producto">Kilometraje: ${modelo.kilometraje}</p>
          <p class="tipo-producto">Tipo: ${modelo.tipo}</p>
          <p class="precio-producto">Precio: $ ${modelo.precio}</p>
          <button class="boton-agregar">Agregar</button>
        </div>
      `;
      contenedorProductos.append(div);
    });
  });
  agregarEventListeners();
}
cargarProductos();
// Agregamos los productos al carrito cada vez que se presione el botón de "Agregar"
function agregarEventListeners() {
  let botonesAgregar = document.querySelectorAll(".boton-agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const moto = e.target.parentElement.parentElement;
      const modelo = {
        modelo: moto.querySelector(".titulo-producto").textContent,
        precio: moto.querySelector(".precio-producto").textContent,
        imagen: moto.querySelector(".imagen-producto").src,
      };
      carro.push(modelo);
      actualizarCarrito();
    });
  });
}
function actualizarCarrito() {

  // Código para actualizar el contador de productos en el carrito
  var span = document.getElementById('item-carrito'); span.textContent = carro.length;

  // Código para actualizar el carrito
  console.log(carro);
}



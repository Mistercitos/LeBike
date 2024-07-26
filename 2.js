//Array con la lista de marcas y modelos

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
      },
      {
        modelo: "CBR650R",
        cilindrada: 649,
        año: 2022,
        kilometraje: 25000,
        tipo: "Deportivas",
        precio: 9500,
      },
      {
        modelo: "CBR1000RR",
        cilindrada: 999,
        año: 2018,
        kilometraje: 40000,
        tipo: "Deportivas",
        precio: 15000,
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
      },
      {
        modelo: "YZF-R1",
        cilindrada: 998,
        año: 2021,
        kilometraje: 35000,
        tipo: "Deportivas",
        precio: 16000,
      },
      {
        modelo: "MT-09",
        cilindrada: 847,
        año: 2017,
        kilometraje: 30000,
        tipo: "Naked",
        precio: 9000,
      },
      {
        modelo: "MT-07",
        cilindrada: 689,
        año: 2020,
        kilometraje: 18000,
        tipo: "Naked",
        precio: 7500,
      },
      {
        modelo: "Tenere 700",
        cilindrada: 689,
        año: 2022,
        kilometraje: 12000,
        tipo: "Adventure",
        precio: 12000,
      },
      {
        modelo: "XSR900",
        cilindrada: 847,
        año: 2018,
        kilometraje: 25000,
        tipo: "Retro",
        precio: 10000,
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
      },
      {
        modelo: "Ninja 650",
        cilindrada: 649,
        año: 2020,
        kilometraje: 22000,
        tipo: "Deportivas",
        precio: 8500,
      },
      {
        modelo: "Z900",
        cilindrada: 948,
        año: 2019,
        kilometraje: 28000,
        tipo: "Naked",
        precio: 9500,
      },
      {
        modelo: "Ninja 400",
        cilindrada: 399,
        año: 2021,
        kilometraje: 10000,
        tipo: "Deportivas",
        precio: 6000,
      },
      {
        modelo: "Versys 650",
        cilindrada: 649,
        año: 2018,
        kilometraje: 35000,
        tipo: "Adventure",
        precio: 8000,
      },
      {
        modelo: "Vulcan S",
        cilindrada: 649,
        año: 2017,
        kilometraje: 40000,
        tipo: "Cruiser",
        precio: 7500,
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
      },
      {
        modelo: "GSX-R750",
        cilindrada: 750,
        año: 2020,
        kilometraje: 25000,
        tipo: "Deportivas",
        precio: 9500,
      },
      {
        modelo: "GSX-S750",
        cilindrada: 749,
        año: 2019,
        kilometraje: 18000,
        tipo: "Naked",
        precio: 8000,
      },
      {
        modelo: "V-Strom 650",
        cilindrada: 645,
        año: 2022,
        kilometraje: 20000,
        tipo: "Adventure",
        precio: 9000,
      },
      {
        modelo: "Boulevard M109R",
        cilindrada: 1783,
        año: 2017,
        kilometraje: 35000,
        tipo: "Cruiser",
        precio: 12000,
      },
      {
        modelo: "Hayabusa",
        cilindrada: 1340,
        año: 2021,
        kilometraje: 15000,
        tipo: "Sport Touring",
        precio: 14000,
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
      },
      {
        modelo: "Monster 821",
        cilindrada: 821,
        año: 2019,
        kilometraje: 22000,
        tipo: "Naked",
        precio: 15000,
      },
      {
        modelo: "Multistrada V4",
        cilindrada: 1158,
        año: 2021,
        kilometraje: 15000,
        tipo: "Adventure",
        precio: 18000,
      },
      {
        modelo: "Scrambler 1100",
        cilindrada: 1079,
        año: 2018,
        kilometraje: 28000,
        tipo: "Scrambler",
        precio: 13000,
      },
      {
        modelo: "Diavel 1260",
        cilindrada: 1262,
        año: 2022,
        kilometraje: 10000,
        tipo: "Cruiser",
        precio: 19000,
      },
      {
        modelo: "Streetfighter V4",
        cilindrada: 1103,
        año: 2023,
        kilometraje: 8000,
        tipo: "Naked",
        precio: 20000,
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
      },
      {
        modelo: "R1250GS",
        cilindrada: 1254,
        año: 2021,
        kilometraje: 25000,
        tipo: "Adventure",
        precio: 20000,
      },
      {
        modelo: "F900R",
        cilindrada: 895,
        año: 2019,
        kilometraje: 30000,
        tipo: "Naked",
        precio: 12000,
      },
      {
        modelo: "G310GS",
        cilindrada: 313,
        año: 2018,
        kilometraje: 35000,
        tipo: "Adventure",
        precio: 8000,
      },
      {
        modelo: "R nineT",
        cilindrada: 1170,
        año: 2017,
        kilometraje: 40000,
        tipo: "Retro",
        precio: 15000,
      },
      {
        modelo: "C400X",
        cilindrada: 350,
        año: 2022,
        kilometraje: 15000,
        tipo: "Scooter",
        precio: 7000,
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
      },
      {
        modelo: "Tiger 800",
        cilindrada: 800,
        año: 2018,
        kilometraje: 28000,
        tipo: "Adventure",
        precio: 11000,
      },
      {
        modelo: "Speed Triple RS",
        cilindrada: 1050,
        año: 2020,
        kilometraje: 22000,
        tipo: "Naked",
        precio: 13000,
      },
      {
        modelo: "Bonneville T120",
        cilindrada: 1200,
        año: 2019,
        kilometraje: 20000,
        tipo: "Retro",
        precio: 12000,
      },
      {
        modelo: "Rocket 3",
        cilindrada: 2458,
        año: 2021,
        kilometraje: 15000,
        tipo: "Cruiser",
        precio: 18000,
      },
      {
        modelo: "Scrambler 1200",
        cilindrada: 1200,
        año: 2022,
        kilometraje: 18000,
        tipo: "Scrambler",
        precio: 14000,
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
      },
      {
        modelo: "Street Glide",
        cilindrada: 1868,
        año: 2020,
        kilometraje: 25000,
        tipo: "Touring",
        precio: 18000,
      },
      {
        modelo: "Fat Bob 114",
        cilindrada: 1868,
        año: 2019,
        kilometraje: 22000,
        tipo: "Cruiser",
        precio: 16000,
      },
      {
        modelo: "Road King",
        cilindrada: 1746,
        año: 2021,
        kilometraje: 18000,
        tipo: "Touring",
        precio: 20000,
      },
      {
        modelo: "Low Rider S",
        cilindrada: 1868,
        año: 2018,
        kilometraje: 30000,
        tipo: "Cruiser",
        precio: 15000,
      },
      {
        modelo: "Pan America 1250",
        cilindrada: 1252,
        año: 2022,
        kilometraje: 15000,
        tipo: "Adventure",
        precio: 22000,
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
      },
      {
        modelo: "Tuono V4 1100",
        cilindrada: 1077,
        año: 2021,
        kilometraje: 18000,
        tipo: "Naked",
        precio: 17000,
      },
      {
        modelo: "Shiver 900",
        cilindrada: 896,
        año: 2019,
        kilometraje: 22000,
        tipo: "Naked",
        precio: 12000,
      },
      {
        modelo: "RS 660",
        cilindrada: 659,
        año: 2022,
        kilometraje: 10000,
        tipo: "Sport",
        precio: 14000,
      },
      {
        modelo: "Dorsoduro 900",
        cilindrada: 896,
        año: 2018,
        kilometraje: 28000,
        tipo: "Supermotard",
        precio: 11000,
      },
      {
        modelo: "SR 125",
        cilindrada: 124,
        año: 2023,
        kilometraje: 8000,
        tipo: "Scooter",
        precio: 4000,
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
      },
      {
        modelo: "Duke 390",
        cilindrada: 373,
        año: 2020,
        kilometraje: 15000,
        tipo: "Naked",
        precio: 7000,
      },
      {
        modelo: "Adventure 390",
        cilindrada: 373,
        año: 2022,
        kilometraje: 8000,
        tipo: "Adventure",
        precio: 8500,
      },
      {
        modelo: "Super Duke R",
        cilindrada: 1290,
        año: 2019,
        kilometraje: 25000,
        tipo: "Naked",
        precio: 12000,
      },
      {
        modelo: "390 Adventure",
        cilindrada: 373,
        año: 2023,
        kilometraje: 12000,
        tipo: "Adventure",
        precio: 9000,
      },
      {
        modelo: "RC 200",
        cilindrada: 199,
        año: 2018,
        kilometraje: 30000,
        tipo: "Deportivas",
        precio: 5500,
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
      },
    ],
  },
];

console.log(motos);

// Variables de Carro y Total

let carro = [];
let total = 0;

//Paso 1: Se inicia la compra

function iniciarCompra() {
    let opcion = prompt('Bienvenido a LeBike Motorcycles, es el momento de comprar tu moto. \n\nPrimero ingresa el número de la opción que desas realizar: \n \n 1. Iniciar Compra \n \n 2. Cancelar Compra \n \n ').toUpperCase();

    if (opcion === '1' || opcion === 'Iniciar Compra') {
        seleccionarMarca();
    } else if (opcion === '2' || opcion === 'Cancelar Compra') {
        alert('Compra cancelada');
    } else {
        alert('Opción no válida');
        iniciarCompra();
    }
}

//Paso 2: Selección de marca y de modelo

function seleccionarMarca() {
    let listaMarcas = 'Ingresa el número de la marca que deseas ver: \n \n ';
    motos.forEach((moto, index) => {
        listaMarcas += `${index + 1} . ${moto.marca} (${moto.paisOrigen})\n\n`;
    });
    listaMarcas += `Puedes ver tu carro o cancelar la compra escribiendo las siguientes opciones: \n\n- CARRO\n- CANCELAR`;

    let opcion = prompt(listaMarcas).toUpperCase();

    if (opcion === 'CARRO') {
        verCarro();
    } else if (opcion === 'CANCELAR') {
        alert('Compra cancelada');
    } else {
        let marcaSeleccionada = motos[parseInt(opcion) - 1];
        if (marcaSeleccionada) {
            seleccionarModelo(marcaSeleccionada);
        } else {
            alert('Opción no válida');
            seleccionarMarca();
        }
    }
}

function seleccionarModelo(marca) {
    let listaModelos = `Modelos de ${marca.marca}, ingresa el número del modelo que deseas para agregarlo a tu carrito de compras: \n \n`;
    marca.modelos.forEach((modelo, index) => {
        listaModelos += `${index + 1}. ${modelo.modelo} - ${modelo.cilindrada}cc, ${modelo.año}, ${modelo.kilometraje}km, ${modelo.tipo}, $${modelo.precio}\n\n`;
    });
    listaModelos += `Puedes ver tu carro o volver a la selección de marcas escribiendo las siguientes opciones:\n\n- CARRO\n- VOLVER`;

    let opcion = prompt(listaModelos).toUpperCase();

    if (opcion === 'CARRO') {
        verCarro();
    } else if (opcion === 'VOLVER') {
        seleccionarMarca();
    } else {
        let modeloSeleccionado = marca.modelos[parseInt(opcion) - 1];
        if (modeloSeleccionado) {
            carro.push(modeloSeleccionado);
            total += modeloSeleccionado.precio;
            alert(`Se agregó ${marca.marca} ${modeloSeleccionado.modelo} satisfactoriamente al carro`);
            seleccionarMarca();
        } else {
            alert('Opción no válida');
            seleccionarModelo(marca);
        }
    }
}

//Paso 3: Ver carro

function verCarro() {
    let listaCarro = 'Motos agregadas:\n\n';
    carro.forEach((item, index) => {
        listaCarro += `${index + 1}. ${item.modelo} - $${item.precio}\n\n`;
    });
    listaCarro += `Monto Total: $${total}\n\nIngresa la opción de la acción que deseas realizar \n\n- COMPRAR (Para finalizar la compra)\n- VOLVER (Para seguir comprando)`;

    let opcion = prompt(listaCarro).toUpperCase();

    if (opcion === 'COMPRAR') {
        alert('Has realizado tu compra con éxito!\n\nGracias por comprar en LeBike Motorcycles! ');
    } else if (opcion === 'VOLVER') {
        seleccionarMarca();
    } else {
        alert('Opción no válida');
        verCarro();
    }
}

//Iniciamos el proceso de compra

iniciarCompra();
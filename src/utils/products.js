const productos = [
    {
        id: 1,
        title: "Zapatillas adidas Running Duramo 10",
        stock: 15,
        type: "Zapatillas deportivas",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_680367-MLA69880911567_062023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_838219-MLA69880911565_062023-O.webp"
        },
        price: 34000,
    },

    {
        id: 2,
        title: "Zapatillas Showtheway 2.0 adidas",
        stock: 7,
        type: "Zapatillas deportivas",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_897602-MLA69673932008_052023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_815848-MLA69673932002_052023-O.webp"
        },
        price: 29999,
    },

    {
        id: 3,
        title: "Zapatillas adidas Running Duramo 10",
        stock: 20,
        type: "Zapatillas deportivas",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_681978-MLA70070327909_062023-O.webp",
            secondImage: "http://http2.mlstatic.com/D_NQ_NP_659528-MLA70070327907_062023-O.webp"
        },
        price: 41999,
    },

    {
        id: 4,
        title: "Zapatillas adidas Moda X9000l4 U",
        stock: 6,
        type: "Zapatillas deportivas",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_761013-MLA69915970050_062023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_777377-MLA69915970042_062023-O.webp"
        },
        price: 47980,      
    },

    {
        id: 5,
        title: "Zapatillas adidas Moda Breaknet 2.0",
        stock: 6,
        type: "Zapatillas urbanas",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_834599-MLA70268192248_072023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_639835-MLA70268192234_072023-O.webp"
        },
        price: 33999,      
    },

    {
        id: 6,
        title: "Zapatillas adidas Grand Court adidas",
        stock: 3,
        type: "Zapatillas urbanas",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_906443-MLA70559706255_072023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_920075-MLA70559706263_072023-O.webp"
        },
        price: 54000,      
    },

    {
        id: 7,
        title: "Zapatillas adidas Moda Run 70s",
        stock: 1,
        type: "Zapatillas urbanas",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_884925-MLA70268141720_072023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_731505-MLA70268141736_072023-O.webp"
        },
        price: 39999,      
    },

    {
        id: 8,
        title: "Zapatillas adidas Moda Racer Tr21",
        stock: 5,
        type: "Zapatillas urbanas",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_770366-MLA70290915095_072023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_786703-MLA70290915103_072023-O.webp"
        },
        price: 44999,      
    },

    {
        id: 9,
        title: "Campera adidas Running Own The Run",
        stock: 7,
        type: "Indumentaria",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_859371-MLA70401102668_072023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_713094-MLA70401102660_072023-O.webp"
        },
        price: 29000,      
    },

    {
        id: 10,
        title: "Remera Future Icons adidas",
        stock: 7,
        type: "Indumentaria",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_857375-MLA69550619290_052023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_636977-MLA69550619288_052023-O.webp"
        },
        price: 17999,      
    },

    {
        id: 11,
        title: "Pantalón adidas Moda Essentials Logo",
        stock: 7,
        type: "Indumentaria",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_773006-MLA70643180553_072023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_846735-MLA70643180561_072023-O.webp"
        },
        price: 43999,      
    },

    {
        id: 12,
        title: "Calzas adidas Essentials Brandlove",
        stock: 7,
        type: "Indumentaria",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_955223-MLA69243674381_052023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_983549-MLA69243674389_052023-O.webp"
        },
        price: 12299,      
    },

    {
        id: 13,
        title: "Campera adidas Running Own The Run",
        stock: 7,
        type: "Indumentaria",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_985049-MLA70359018860_072023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_657602-MLA70359018862_072023-O.webp"
        },
        price: 39999,      
    },

    {
        id: 14,
        title: "Top Deportivo adidas X You For You",
        stock: 7,
        type: "Indumentaria",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_840473-MLA69243670197_052023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_705193-MLA69243670203_052023-O.webp"
        },
        price: 13939,      
    },

    {
        id: 15,
        title: "Conjunto Deportivo adidas Essentials",
        stock: 7,
        type: "Indumentaria",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_637803-MLA69237264356_052023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_708292-MLA69237264358_052023-O.webp"
        },
        price: 27879,      
    },

    {
        id: 16,
        title: "Short adidas Training Pacer Mujer-newsport",
        stock: 7,
        type: "Indumentaria",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_879446-MLA69860320913_062023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_787400-MLA69860320901_062023-O.webp"
        },
        price: 17600,      
    },

    {
        id: 17,
        title: "Mochila Linear Classic Daily",
        stock: 7,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_971596-MLA46559196260_062021-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_698304-MLA46559196262_062021-O.webp"
        },
        price: 15980,      
    },

    {
        id: 18,
        title: "Mochila Classic 3",
        stock: 7,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_611883-MLA54364282200_032023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_803635-MLA54364282204_032023-O.webp"
        },
        price: 13400,      
    },

    {
        id: 19,
        title: "Cinturón Running adidas",
        stock: 7,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_933578-MLA50732688305_072022-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_701190-MLA50732688302_072022-O.webp"
        },
        price: 11200,      
    },

    {
        id: 20,
        title: "Bolso adidas Yoga",
        stock: 7,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_809413-MLA69237285842_052023-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_777926-MLA69237285850_052023-O.webp"
        },
        price: 27879,      
    }
]

export default productos;

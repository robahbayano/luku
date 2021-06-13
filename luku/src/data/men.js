const products = [
    {
        id: 1,
        name: "VaporMax Moc",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1499,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Nike",
        rating: 4,
        img: "img/product-1.png",
        altImg: ['img/left-1.png', 'img/right-1.png', 'img/front-1.png', 'img/back-1.png' ],
    },
    {
        id: 3,
        name: "Nike Sepatu",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1299,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Nike",
        rating: 4,
        img: "img/product-3.png",
        altImg: ['img/left-3.png', 'img/right-3.png', 'img/front-3.png', 'img/back-3.png' ],
    },
    {
        id: 4,
        name: "Adidas Jordan",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1199,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Adidas",
        rating: 4,
        img: "img/product-4.png",
        altImg: ['img/left-4.png', 'img/right-4.png', 'img/front-4.png', 'img/back-4.png' ],
    },
    {
        id: 5,
        name: "Adidas Run",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1499,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Adidas",
        rating: 4,
        img: "img/product-5.png",
        altImg: ['img/left-5.png', 'img/right-5.png', 'img/front-5.png', 'img/back-5.png' ],
    },
    {
        id: 6,
        name: "Nike Air",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1699,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Nike",
        rating: 4,
        img: "img/product-6.png",
        altImg: ['img/left-6.png', 'img/right-6.png', 'img/front-6.png', 'img/back-6.png' ],
    },
    {
        id: 8,
        name: "Adidas Tubular",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1499,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Adidas",
        rating: 4,
        img: "img/product-8.png",
        altImg: ['img/left-8.png', 'img/right-8.png', 'img/front-8.png', 'img/back-8.png' ],
    },
    {
        id: 9,
        name: "SPLY 350",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1899,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Yeezy",
        rating: 4,
        img: "img/product-9.png",
        altImg: ['img/left-9.png', 'img/right-9.png', 'img/front-9.png', 'img/back-9.png' ],
    },
    {
        id: 10,
        name: "Summer Shoes",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1199,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Mr Shoes",
        rating: 4,
        img: "img/product-10.png",
        altImg: ['img/left-10.png', 'img/right-10.png', 'img/front-10.png', 'img/back-10.png' ],
    },
    {
        id: 11,
        name: "Nike Run",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1499,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Nike",
        rating: 4,
        img: "img/product-11.png",
        altImg: ['img/left-11.png', 'img/right-11.png', 'img/front-11.png', 'img/back-11.png' ],
    },
    {
        id: 12,
        name: "Tremare Nike",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1099,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Nike",
        rating: 4,
        img: "img/product-12.png",
        altImg: ['img/left-12.png', 'img/right-12.png', 'img/front-12.png', 'img/back-12.png' ],
    },
    {
        id: 13,
        name: "Nike Airforce",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 1499,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Nike",
        rating: 4,
        img: "img/product-13.png",
        altImg: ['img/left-13.png', 'img/right-13.png', 'img/front-13.png', 'img/back-13.png' ],
    },
    {
        id: 14,
        name: "Fashion Shoes",
        title: "Mens stylish sneakers",
        description: "The men nike shoe is back and true to its iconic 3-starp design. The leather and woven upper delivers stylish confort while the mesh forefoot enhances ventilation.",
        price: 999,
        category: "mens",
        color: "red",
        size: 40,
        brand: "Mr Shoes",
        rating: 4,
        img: "img/product-14.png",
        altImg: ['img/left-14.png', 'img/right-14.png', 'img/front-14.png', 'img/back-14.png' ],
    }
        
]


export default products;
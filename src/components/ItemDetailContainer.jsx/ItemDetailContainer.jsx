import { ItemDetail } from "../ItemDetail.jsx/ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const films = [
    { id: 1, price: 520.504, image: "https://eringpro.com/wp-content/uploads/2021/12/iphone-13-pro-max-gold-select.png",category: "iphone" ,title: "iPhone 13 Pro Max" },
    { id: 2, price: 331.999, image: "https://doto.vtexassets.com/arquivos/ids/188905/samsung-galaxy-s22-ultra-256gb-negro-dotomexico-ambas-vistas.jpg?v=637807378913100000",category: "samsung" , title: "Samsung Galaxy S22 Ultra"},
    { id: 3, price: 53.999, image: "https://holacompras.com/wp-content/uploads/2022/08/CBXT2231AZ100BK-2.jpg",category: "motorola" , title: "Motorola G22" },
    { id: 4, price: 206.400, image: "http://www.vicionet.com/Vel/418-large_default/apple-iphone-11-128gb-.jpg",category: "iphone" , title: "iPhone 11" },
    { id: 5, price: 41.759, image: "https://pixelstore.com.ar/wp-content/uploads/2020/10/samsung-a51.jpg",category: "samsung" , title: "Samsung a51" },
    { id: 6, price: 108.480, image:"https://ae01.alicdn.com/kf/S97294ab539cc477ab139fbd2e8eb9e53u/Funda-para-Moto-G200-5G-a-prueba-de-golpes-ultrafina-Flexible-TPU-de-silicona-suave-antica.jpg_Q90.jpg_.webp",category: "motorola" , title: "Moto G200" },
];


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });

        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [])
    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;
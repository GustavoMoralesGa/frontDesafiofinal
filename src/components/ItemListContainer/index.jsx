import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList'

const packages = [
    {
        id:1, price:80000, image:"https://jorgeendigital.com/wp-content/uploads/2023/03/Torres-del-Paine.png", title: "Trekking Manquehuito", description: "trekking de dificultad intermedia perfecto para desafiarte", groupMin: "8 personas", groupMax:"15 personas", packageValue: 80000, valuePerPerson: 10000, duration: "3 horas", conditions: "sin condiciones", locationLat: "xxx", locationLong: "yyy", active: false, schedules: "24 horas"
    },
    {
        id:2, price:50000, image:"https://jorgeendigital.com/wp-content/uploads/2023/03/Cajon-del-Maipo.png", title: "Trekking la virgen", description: "trekking de dificultad alta", groupMin: "5 personas", groupMax:"10 personas", packageValue: 50000, valuePerPerson: 10000, duration: "2 horas", conditions: "sin condiciones", locationLat: "fff", locationLong: "ggg", active: false, schedules: "24 horas"
    },
    {
        id:3, price:30000, image:"https://jorgeendigital.com/wp-content/uploads/2023/03/Valle-de-la-Luna.png", title: "Trekking prat", description: "trekking de dificultad media", groupMin: "3 personas", groupMax:"6 personas", packageValue: 30000, valuePerPerson: 10000, duration: "6 horas", conditions: "sin condiciones", locationLat: "zzz", locationLong: "aaa", active: false, schedules: "24 horas"
    }
]


export const ItemListContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(packages)
            }, 1000)
        })
        getData.then(res => setData(res))

    }, [])

    

    return(
        <> 
        <ItemList data={data} />           
        </>
    )
}

export default ItemListContainer;

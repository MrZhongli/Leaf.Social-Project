export const items = [
    {
    id:1,
    title:"5 Estilos de Bolsos de Moda Hechos con Silobolsas Reciclados",
    content: "Los bolsos hechos con materiales reciclados de silobolsas tienen el potencial de ser a la vez originales, sin comprometer la moda y el estilo. Los bolsos reciclados de silobolsas ofrecen una serie de estilos enfocados en material genuino y duradero, permitiendo satisfacer tus necesidades diarias con una inversión sostenible. Estos son algunos de los 10 estilos de bolsos de moda hechos con material de reciclaje de silobolsas:",
    firstContent :" 1. Bolso de mano: Este bolso es perfecto para usar en el trabajo o en reuniones. Está hecho con materiales reciclados resistentes y ligeros. Perfecto para moverse con prisa.",
    secondContent :"2. Bolso de compras: Estos bolsos grandes y versátiles están hechos con materiales reciclados y son ideales para cuando tienes que hacer una gran compra.",
    thirdContent : "3. Bolso bandolera: El bolso bandolera es perfecto para usarlo junto a tu vestido favorito. Está hecho con material reciclado resistente y te mantendrá organizada.",
    forthContent :"9. Bolsos de viaje: Estos bolsos de viaje hechos con materiales reciclados son ligeros y resistentes. Están diseñados para adaptarse a cualquier situación.",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSom0_06Uopbas49mrz0LCPj5Ab34bAjZxidWEX2Qon_5Tl0tJhSYWC7Fv4PjMXDha5aU&usqp=CAU'
    },
    {
        id:2,
        title:"5 Estilos de Bolsos de Moda Hechos con Silobolsas Reciclados",
        content: "Los bolsos hechos con materiales reciclados de silobolsas tienen el potencial de ser a la vez originales, sin comprometer la moda y el estilo. Los bolsos reciclados de silobolsas ofrecen una serie de estilos enfocados en material genuino y duradero, permitiendo satisfacer tus necesidades diarias con una inversión sostenible. Estos son algunos de los 10 estilos de bolsos de moda hechos con material de reciclaje de silobolsas:",
        firstContent :" 1. Bolso de mano: Este bolso es perfecto para usar en el trabajo o en reuniones. Está hecho con materiales reciclados resistentes y ligeros. Perfecto para moverse con prisa.",
        secondContent :"2. Bolso de compras: Estos bolsos grandes y versátiles están hechos con materiales reciclados y son ideales para cuando tienes que hacer una gran compra.",
        thirdContent : "3. Bolso bandolera: El bolso bandolera es perfecto para usarlo junto a tu vestido favorito. Está hecho con material reciclado resistente y te mantendrá organizada.",
        forthContent :"9. Bolsos de viaje: Estos bolsos de viaje hechos con materiales reciclados son ligeros y resistentes. Están diseñados para adaptarse a cualquier situación.",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSom0_06Uopbas49mrz0LCPj5Ab34bAjZxidWEX2Qon_5Tl0tJhSYWC7Fv4PjMXDha5aU&usqp=CAU'
        },
        {
            id:3,
            title:"5 Estilos de Bolsos de Moda Hechos con Silobolsas Reciclados",
            content: "Los bolsos hechos con materiales reciclados de silobolsas tienen el potencial de ser a la vez originales, sin comprometer la moda y el estilo. Los bolsos reciclados de silobolsas ofrecen una serie de estilos enfocados en material genuino y duradero, permitiendo satisfacer tus necesidades diarias con una inversión sostenible. Estos son algunos de los 10 estilos de bolsos de moda hechos con material de reciclaje de silobolsas:",
            firstContent :" 1. Bolso de mano: Este bolso es perfecto para usar en el trabajo o en reuniones. Está hecho con materiales reciclados resistentes y ligeros. Perfecto para moverse con prisa.",
            secondContent :"2. Bolso de compras: Estos bolsos grandes y versátiles están hechos con materiales reciclados y son ideales para cuando tienes que hacer una gran compra.",
            thirdContent : "3. Bolso bandolera: El bolso bandolera es perfecto para usarlo junto a tu vestido favorito. Está hecho con material reciclado resistente y te mantendrá organizada.",
            forthContent :"9. Bolsos de viaje: Estos bolsos de viaje hechos con materiales reciclados son ligeros y resistentes. Están diseñados para adaptarse a cualquier situación.",
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSom0_06Uopbas49mrz0LCPj5Ab34bAjZxidWEX2Qon_5Tl0tJhSYWC7Fv4PjMXDha5aU&usqp=CAU'
            }
]

const task = new Promise ((resp)=>{
    resp(items)
},2000)

export const  getItemData=()=>{
    return task
}
const proyects = [{
    id: 1, name: "Ecommerce", description: "Ecommerce para ModemSoft con una ui diseñada para realizar operaciones facilmente y una db con todo lo necesario para que la empresa pueda trabajar sin apuros"
    , url: "https://colorlib.com/wp/wp-content/uploads/sites/2/ecommerce-website-builder.jpg"
}, {
    id: 2, name: "Clothing Store", description: "Ecommerce para ModemSoft con una ui diseñada para realizar operaciones facilmente y una db con todo lo necesario para que la empresa pueda trabajar sin apuros"
    , url: "https://cdn.shopify.com/s/files/1/0210/2968/3222/articles/how_to_start_online_clothing_store.jpg?v=1652164894"
}, {
    id: 3, name: "CRM", description: "Ecommerce para ModemSoft con una ui diseñada para realizar operaciones facilmente y una db con todo lo necesario para que la empresa pueda trabajar sin apuros"
    , url: "https://www.zohowebstatic.com/sites/zweb/images/ogimage/crm-logo.png"
}, {
    id: 4, name: "Store car", description: "Ecommerce para ModemSoft con una ui diseñada para realizar operaciones facilmente y una db con todo lo necesario para que la empresa pueda trabajar sin apuros"
    , url: "https://paultan.org/image/2020/10/Sime-Darby-Auto-Selection-Website-Launch-V2.jpg"
}]

//Exportamos los proyectos a traves de una función, para
//simular una api
export default function getProyects() {
    //Retornamos promesa que solo tenga cumplido ya que 
    //es una simulación de api, esta se cumple y retorna los 
    //proyectos
    return new Promise((cumplido) => {
        //Le decimos que tenga una espera de 2 seg.
        setTimeout(() => {
            cumplido(proyects)
        }, 1000)
    })

}
import Precio from "./precio.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import ClienteFrecuente from "./clientefrecuente.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementopedido.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"

const cliente1 = new Cliente ({
    nombre: "Alberto Esparza Gomez Rodriguez",
    direccion: new Direccion("Laguna del Calabozo","442","", "Villas Bugambilia", "28956", "Villa de Alvarez", "Colima"),
    telefono: "312224341"
})
export default class Main {

    constructor(){
        
    }

    pruebaTiempo(){
        let horas = new Tiempo(5,44,"pm")
        console.log("---------Tiempo--------")
        console.log(horas.getFormato12())
        console.log(horas.getFormato24())
    }

    pruebaFecha(){
        let fecha = new Fecha(1,2,2000)
        console.log("----------Fecha---------")
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha())
    }

    pruebaPrecio(){
        let precio = new Precio(43200.54)
        console.log("----------Precio----------")
        console.log(precio.getPrecio())
    }

    pruebaDireccion(){
        let calle = "Hacienda el Cortijo"
        let numExt = "601"
        let numInt = "200"
        let colonia = "Real Centenario"
        let CP = "28984"
        let municipio = "Villa de Alvarez"
        let ciudad = "Colima"
        let direccion = new Direccion(calle,numExt,numInt,colonia,CP,municipio,ciudad)
        console.log("--------Direccion---------")
        console.log(direccion.getFormatoCorto())
        console.log(direccion.getFormatoExtendido())
    }

    pruebaCliente(){
        let cliente = new Cliente ({
            nombre: "Alberto Esparza Gomez Rodriguez",
            direccion: new Direccion("Laguna del Calabozo","442","", "Villas Bugambilia", "28956", "Villa de Alvarez", "Colima"),
            telefono: "312224341"
        })
        console.log("----------Cliente---------")
        console.log(cliente.getPerfil())
    }

    pruebaClienteFrecuente(){
        let clienteFrecuente1 = new ClienteFrecuente({
            numeroCliente: 321,
            fechaRegistro: new Fecha(2,4,2010),
            nombre: ("Alfonso Robles Farias"),
            direccion: new Direccion ("Hacienda el Cortijo", "601", "1","Real Colima","298765","Villa de Alvarez", "Colima"),
            telefono: "312333141"
        })
        console.log('-----Cliente Frecuente-----')
        console.log(clienteFrecuente1.getPerfil())
    }

    pruebaProducto(){
        let nombre = "Risotto con champiñones"
        let precio = new Precio(150)
        let producto = new Producto(nombre,precio)
        console.log("--------Producto---------")
        console.log(producto.getDescripcion())
    }

    pruebaElementoPedido(){
        let elementoPedido = new ElementoPedido({
            cantidad:2,
            producto: new Producto("Pasta Con Allioli", new Precio(130))
        })
        console.log("--------Elemento Pedido--------")
        console.log(elementoPedido.getDescripcionB())
    }
    
    pruebaPedido(){
        let pedido1 = new Pedido({
            fecha: new Fecha(1,3,2020),
            hora: new Tiempo(1,44,"pm"),
            cliente: cliente1
        })
        let elementoPedido1 = new ElementoPedido({
            cantidad:2,
            producto: new Producto("Pasta Con Allioli", new Precio(130))
        })
        let elementoPedido2 = new ElementoPedido({
            cantidad:3,
            producto: new Producto("Filete Mignon", new Precio(200))
        })
        console.log("-------Pedido-------")
        pedido1.agregarElemento(elementoPedido1)
        pedido1.agregarElemento(elementoPedido2)
        console.log("Hay una cantidad de " + pedido1.getNumeroElementos() + " productos distintos")
        console.log("Hay un total de " + pedido1.getNumeroProductos()+ " productos") 
        pedido1.listarElementos()
        console.log(pedido1.getResumen())
        console.log("El costo total es de: " + pedido1.getCostoTotal())
    }

    pruebaRestaurante(){
        let elementoPedido1 = new ElementoPedido({
            cantidad:2,
            producto: new Producto("Pasta Con Allioli", new Precio(130))
        })
        let elementoPedido2 = new ElementoPedido({
            cantidad:3,
            producto: new Producto("Filete Mignon", new Precio(200))
        })
        let pedido1 = new Pedido({
            fecha: new Fecha(1,3,2020),
            hora: new Tiempo(1,44,"pm"),
            cliente: cliente1
        })
        let restaurante = new Restaurante ({
            nombre:"Ristorante L'eterna cima",
            telefono:"312454467",
            direccion: new Direccion("Lapiz Lazuli","567","","Calabozo","294578","Guadalajara", "Jalisco")
        })
        
        restaurante.registrarProducto(elementoPedido1)
        restaurante.registrarProducto(elementoPedido2)
        pedido1.agregarElemento(elementoPedido1)
        pedido1.agregarElemento(elementoPedido2)
        restaurante.registrarPedido(pedido1)
        console.log('------Restaurante------')
        restaurante.listarProductos()
        restaurante.listarPedidos()
        
        
    }
}

let tester = new Main()
tester.pruebaTiempo();
tester.pruebaFecha();
tester.pruebaPrecio();
tester.pruebaDireccion();
tester.pruebaCliente();
tester.pruebaClienteFrecuente();
tester.pruebaProducto();
tester.pruebaElementoPedido();
tester.pruebaPedido();
tester.pruebaRestaurante();
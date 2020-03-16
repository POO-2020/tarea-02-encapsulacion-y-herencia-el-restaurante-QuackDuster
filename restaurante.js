import Direccion from "./direccion.js"
import Pedido from "./pedido.js"
export default class Restaurante{

    constructor(nombre,telefono,direccion){
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._productos = []
        this._pedidos = []

    }
    
    registrarProducto(producto){  
        this._productos.push(producto)
    }

    registrarPedido(pedido){
        this._pedidos.push(pedido)

    }
    
    listarPedidos(){
        this._pedidos.forEach((pedido,i) =>{
            console.log(`Pedido (${i+1}) ${pedido.getResumen()}`)
        })
    }

    listarProductos(){
        this._productos.forEach((producto) =>{
            console.log('Producto:', producto.getDescripcionB())
        })
    }
       
}
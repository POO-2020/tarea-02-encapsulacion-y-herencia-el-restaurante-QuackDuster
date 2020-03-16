import Cliente from "./cliente"
export default class ClienteFrecuente extends Cliente{

    constructor(numeroCliente,fechaRegistro){
        this._numeroCliente = numeroCliente;
        this._fechaRegistro = fechaRegistro;
    }
}
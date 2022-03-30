import { useState } from "react"
import './contador.css'

function Contador ({ stock }) {
    const initial = 1; //El número inicial de un contador, por sentido común tiene que ser mayor o igual a 1
    const cantidad = stock; //Limita el count, pensado en el stock de un producto
    //hook de estado
    const [qty, setQty] = useState(initial);
    const agregarProducto = (num) => {
    setQty(qty + num);
    };
    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
      };
    return (
        <div className="contador">
            <div className="contador-container">
                <button type="button" onClick={() => agregarProducto(-1)} disabled={qty === initial ? true : null}>-</button>
                <p>{qty}</p>
                <button type="button" onClick={() => agregarProducto(+1)} disabled={qty === cantidad ? true : null}>+</button>
            </div>
            <div className="contador-agregar">
                <button className="button-primary" onClick={() => onAdd(qty)} disabled={cantidad === 0 ? true : null}>Agregar</button>
            </div>
        </div>

        
    )
}

export default Contador
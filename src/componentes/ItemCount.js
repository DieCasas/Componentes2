import React, {useState} from 'react'
import Swal from 'sweetalert2';


const Counter = () => {

    const [counter, setCounter] = useState(0);

    const up = () => {
        if(counter <= 5){
            setCounter(counter + 1)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'No hay stock',
                text: 'No poseemos stock suficiente para agregar al carrito'
              })
        }

        
      };

    const down = () => {
        if(counter >= 1){
            setCounter(counter - 1)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'No se pueden mostrar numeros negativos',
              })
        }
        
    }

    return(

        

        <div className='containerButton'>
            <button className='buttonMenos' onClick={down}>-</button>
            <div>
                <p>
                    {counter}
                </p>
            </div>
            <button className='buttonMas' onClick={up}>+</button>
        </div>
        


    )


}

export default Counter;
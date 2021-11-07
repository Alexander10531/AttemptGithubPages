// La primera importacion es para usar un cicleHook que sirve para 
// revisar parametros que pueden estar cambiando. 
// Proptypes para definir el tipado de los parametros que recibe un componente.
import { useState } from "react";
import PropTypes from 'prop-types';

// Creacion del componente, recordemos que este tiene que ir la primera letra en mayuscula
// cuando se declara y cuando se utiliza el componente. 
export function AddCategory({ setCategories } : {setCategories : any }){
    
    // Creacion y uso de un useState, revisemos que en esta parte el retorna 2
    // valores que mediante decostruccion de un arreglo estamos haciendo, 
    // el valore inicial del cycleHook es ''
    const [inputValue, setInputValue] = useState('')
    
    //Creacion de una funcion que recibe como parametro un evento, en este caso 
    // el tipado asignado es de any.  
    function handleInputChange(e : any){
        // Si se revisa la linea numero 14 podemos observar que estamos usando la funcion 
        // declarada en el cycleHook para modificar el valor inputValue. 
        setInputValue(e.target.value);
    }

    // Declaracion de una funcion que se hara cuando se haga enter dentro del componente HTML 
    // que deseemos.
    function handleSubmit(e : any){
        // Usamos el evento y llammamos a la funcion preventDefault para evitar que 
        // que este recargue la pagina cada vez que se haga submitt sobre el elemento HMTL
        e.preventDefault()

        // Declaracion de un if que recibe que el valor del input value sea mayor que 2 eliminando
        // los espacios al final del input value usando la funcion trim
        if( inputValue.trim().length > 2 ){
            // Se modifica los valores con setCagorie
            setCategories((cats: any) => [inputValue, ...cats])
            // Se reinicia el valor del input value a una cadena vacia. 
            setInputValue('');
        }
        // Console solo para depuracion
    }
    // Retorno de elementos JSX   
    return (
        <form
            onSubmit={ handleSubmit }>
            <h1>{ inputValue }</h1>
            <input 
                type="text"
                value={ inputValue }
                onChange={ (e)=>{ handleInputChange(e) } }/>
        </form>
    )
}

// Aqui es donde se declara el tipado que se usara, es un simil del @Input() que se usa en angular
AddCategory.prototype = {
    setCategories : PropTypes.func.isRequired
}
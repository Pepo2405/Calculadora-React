import React from "react";
import "../stylesheets/button.css";
function Boton({handleClick,children}) {
  const esOperador = (valor) => 
  {return isNaN(valor) && valor !== "." && valor !== "=";};

  return (
    <div onClick={()=>{handleClick(children) }}
      className={`boton-contenedor ${
        esOperador(children) ? "operador" : null
      }`}
    >
      {children}
    </div>
  );
}

const ClearButton = ({children,handleClick}) => {
  return <div onClick={handleClick} className="clear-button">{children}</div>;
};

export { Boton, ClearButton };

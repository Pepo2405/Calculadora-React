import "./App.css";
import {Boton} from "./components/Button";
import Pantalla from "./components/Pantalla";
import LogoTrans from "./logo.png";
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const addInput = value =>{
    setInput(input + value);
  }
  const calculateResult = ()=>{
    try {
      if(input){
        setInput(evaluate(input).toString());
      }
      
    } catch (error) {setInput('Syntax Error')    }
   
  };
  const removeInput = ()=>{
    if(input){
      setInput(input.slice(0,-1));
    }
  };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div  className='fila'>
        <Boton handleClick={()=>setInput('')} >AC</Boton>
        <Boton handleClick={addInput} >%</Boton>
        <Boton handleClick={removeInput} > ← </Boton>
        <Boton handleClick={addInput} >pi</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={addInput} >7</Boton>
          <Boton handleClick={addInput} >8</Boton>
          <Boton handleClick={addInput} >9</Boton>
          <Boton handleClick={addInput} >+</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={addInput} >4</Boton>
          <Boton handleClick={addInput} >5</Boton>
          <Boton handleClick={addInput} >6</Boton>
          <Boton handleClick={addInput} >-</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={addInput} >1</Boton>
          <Boton handleClick={addInput} >2</Boton>
          <Boton handleClick={addInput} >3</Boton>
          <Boton handleClick={addInput} >*</Boton>
        </div>
        <div className="fila">
          {/* <ClearButton handleClick={()=>setInput('')}>Clear</ClearButton> */}
          <Boton handleClick={addInput} >0</Boton>
          <Boton handleClick={addInput} >.</Boton>
          <Boton handleClick={calculateResult} >=</Boton>
          <Boton handleClick={addInput} >/</Boton>
        </div>
        <div className="fila">
        </div>
      </div>
    </div>
  );
}

export default App;

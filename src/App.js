import React,{useState} from 'react';
import './App.css';

function App() {
  const [result,setResult]=useState("");
  const input=(e)=>{
    setResult(result.concat(e.target.value));
    console.log(e.target.value)
  }

  const reset=()=>{
    setResult("");
  }

  const total_val=()=>{
    setResult(eval(result).toString())
  }
  return (
    <div className='container'>
    <div className='screen'>
      <input type='text' placeholder='0' className='input_box' value={result} />
    </div>
    <div className='buttons'>
    <button className='btn' onClick={reset}>C</button>
    <button className='btn' onClick={reset}>+/-</button>
    <button className='btn' onClick={input} value='%'>%</button>
    <button className='btn orange' onClick={input} value='/'>/</button>
    <button className='btn' onClick={input} value='7'>7</button>
    <button className='btn' onClick={input} value='8'>8</button>
    <button className='btn' onClick={input} value='9'>9</button>
    <button className='btn orange' onClick={input} value='*'>X</button>
    <button className='btn' onClick={input} value='4'>4</button>
    <button className='btn' onClick={input} value='5'>5</button>
    <button className='btn' onClick={input} value='6'>6</button>
    <button className='btn orange' onClick={input} value='-'>-</button>
    <button className='btn' onClick={input} value='1'>1</button>
    <button className='btn' onClick={input} value='2'>2</button>
    <button className='btn' onClick={input} value='3'>3</button>
    <button className='btn orange' onClick={input} value='+'>+</button>
    <button className='btn zero' onClick={input} value='0'>0</button>
    <button className='btn' onClick={input} value='.'>.</button>
    <button className='btn orange' onClick={total_val}>=</button>

  </div>
  </div>
  );
}

export default App;

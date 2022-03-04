import React, { useEffect, useState } from 'react'

function TicTacToe() {
    const[count, setCount]=useState(0);
    const[stateX, setStateX]=useState('X')
    const[stateO, setStateO]=useState('O')
    const[status, setStatus]=useState(JSON.parse(localStorage.getItem('one'))||[])
    const Clicks=(i)=>{
          setStateX('X')
          setStatus(...stateX) 
          
          // const result=!status[i]?(setStatus(...status[i]),setStateX('X')):(setStatus(...status[i]),setStateO('O'))
          // const result=status[i]?setStateX('X'):setStateO('O')
          // setStatus(status[i])
          setCount(prev=>prev+1)
         console.log(status)
      }
      useEffect(()=>{
        
             },[count])
  return (
    <div>
        <div className='container2'>
        <div className='row'></div>
        <button value='1' onClick={()=>Clicks(0)} className='btn'></button>
        <button value='2' onClick={()=>Clicks(1)} className='btn'></button>
        <button value='3' onClick={()=>Clicks()} className='btn'> </button>
        <div className='row'></div>
        <button value='4' onClick={()=>Clicks()} className='btn'></button>
        <button value='5' onClick={()=>Clicks()} className='btn'></button>
        <button value='6' onClick={()=>Clicks()} className='btn'></button>
        <div className='row'></div>
        <button value='7' onClick={()=>Clicks()} className='btn'></button>
        <button value='8' onClick={()=>Clicks()} className='btn'></button>
        <button value='9' onClick={()=>Clicks()} className='btn'></button>
        </div>
    </div>
  )
}

export default TicTacToe
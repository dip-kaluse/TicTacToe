import React, { useEffect, useState } from 'react'
// import uuid from "uuid";
const Win=(status)=>{
    if(status[0]&&status[1]&&status[2]=='X'||
    status[3]&&status[4]&&status[5]=='X'||
    status[6]&&status[7]&&status[8]=='X'
    ||status[0]&&status[3]&&status[6]==='X'||
    status[1]&&status[4]&&status[7]==='X'||
    status[2]&&status[5]&&status[8]==='X'||
    status[0]&&status[4]&&status[8]==='X'||
    status[2]&&status[4]&&status[6]==='X'
    ){
       alert("your Win")
    }
    // else if(status[0]&&status[1]&&status[2]=='O'||
    // status[3]&&status[4]&&status[5]=='O'||
    // status[6]&&status[7]&&status[8]=='O'
    // ||
    // status[0]&&status[3]&&status[6]==='O'||
    // status[1]&&status[4]&&status[7]==='O'||
    // status[2]&&status[5]&&status[8]==='O'||
    // status[0]&&status[4]&&status[8]==='O'||
    // status[2]&&status[4]&&status[6]==='O'
    // ){
    //     alert("your Win")
    // }
}
function TicTacToe1() {
    const[count, setCount]=useState(0);
    const[vals, setVals]=useState('');
    const[stateX, setStateX]=useState('X')
    const[stateO, setStateO]=useState('O')
    const[status, setStatus]=useState(['','','','','','','','','',])
    const clickPlay=(obj,i)=>{
        if(obj){
            setVals(true)
            let items = [...status];
            // console.log(items)
            let item = {...items[i]};
            item=stateX
            items[i] = item;
            setStatus(items)
            // let fil=status.filter((obj,j)=>i==j)
            // console.log(fil)
            // status.splice(i,0,stateX)
            console.log(count)
            console.log(status)
            setCount(prev=>prev+1)
        }
        else{
            setVals(false)
            let items = [...status];
            // console.log(items)
            let item = {...items[i]};
            item=stateO
            items[i] = item;
            setStatus(items)
        // status.push(stateO)
        // let fil=status.filter((obj,j)=>i==j)
        // console.log(fil)
        // status.splice(i,0,stateO)
        console.log(count)
         console.log(status)
        setCount(prev=>prev+1)
        }
        
    }
    useEffect(()=>{
        if (count>9){
            console.log("first")
            setCount(0)
            Win(status)
            return
        }
        if (count%2===0) {
            Win(status)
            setVals(false)
        }
        else{
            Win(status)
            setVals(true)
        }
    },[count])
  return (
    <div>
        <div className='container2'>
            <div className='row'>
                <div onClick={()=>{clickPlay(vals,0)}} className='btn'>{status[0]}</div>
                <div onClick={()=>{clickPlay(vals,1)}} className='btn'>{status[1]}</div>
                <div onClick={()=>{clickPlay(vals,2)}} className='btn'>{status[2]}</div>
            </div>
            <div className='row'>
                <div onClick={()=>{clickPlay(vals,3)}} className='btn'>{status[3]}</div>
                <div onClick={()=>{clickPlay(vals,4)}} className='btn'>{status[4]}</div>
                <div onClick={()=>{clickPlay(vals,5)}} className='btn'>{status[5]}</div>
            </div>
            <div className='row'>
                <div onClick={()=>{clickPlay(vals,6)}} className='btn'>{status[6]}</div>
                <div onClick={()=>{clickPlay(vals,7)}} className='btn'>{status[7]}</div>
                <div onClick={()=>{clickPlay(vals,8)}} className='btn'>{status[8]}</div>
            </div>
        </div>
    </div>
  )
}

export default TicTacToe1
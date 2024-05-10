import { useState } from "react";
import "./Planner.css"

const Planner  = () =>{
    const [state,setState] = useState([]);
    const [text,setText] = useState("");
    const [time, setTime] = useState("");

    function handleClick(text,time){
        setState([...state, 
            {
              id:Date.now(), text , time 
            }])
    }

    function incrementTime(id){
        setState(prevState => prevState.map(data=>
            data.id === id ? {...data,time:Number(data.time)+1} : data)
        )
    }
    
    function decrementTime(id){
        setState(prevState => prevState.map(data => data.id === id && data.time > 0? {...data,time:Number(data.time)-1}:data)
        )
    }
    
    return(
        <div >
            <h1 >Geekster Education Planner</h1>
            <div className="m-2">
                <input 
                type="text" onChange={(e)=> setText(e.target.value)} value={text}
                 placeholder="text here"/>
                <input  value={time}
                type="number" min={0} max={100} onChange={(e)=> setTime(e.target.value)}
                 placeholder="Hour" />
                <button 
                 onClick={()=>handleClick(text,time)}>Add Btn</button>
            </div>
            <div>
                {state.map((data)=> (
                    <div className="display">
                        <p key={data.id}  className="taxt"> {data.text}</p>
                        <p key={data.id} className="taxt">{data.time}time</p>
                        <p 
                        
                        onClick={()=>incrementTime(data.id)}
                        >➕</p>
                        <p 
                        
                        onClick={()=>decrementTime(data.id)}
                        >➖</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Planner;
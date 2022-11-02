import React, { useEffect, useState } from "react";
import axios from "axios";

const ComA = () =>{
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(()=> {
        // alert("hi");
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }

        getData();
    })

    return (<>
    <h1>You Choose<span style={{color:'red'}}> {num} Value </span> </h1>
    <h1>My Name is <span style={{color:'red'}}>{name} </span></h1>
    <h1>I have <span style={{color:'red'}}>{moves} Moves </span></h1>
        <select 
        value={num} 
        onChange={(event)=>{
            setNum(event.target.value)
        }}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
            <option value='21'>21</option>
            <option value='22'>22</option>
            <option value='23'>23</option>
            <option value='24'>24</option>
            <option value='25'>25</option>
            <option value='26'>26</option>
            <option value='27'>27</option>
        </select>
    </>
    )
}

export default ComA;
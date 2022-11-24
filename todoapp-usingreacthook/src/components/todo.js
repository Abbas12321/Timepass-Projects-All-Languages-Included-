import React, { useState } from "react";
import "../App.css";
import todo from "../images/todo.png";

const Todo = () =>{

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () =>{
            if(!inputData){
        }else{
            setItems([...items, inputData]);
            setInputData('')
        }
    }

    const deleteItem = (id) =>{
        console.log(id);
        const updateditems = items.filter((elem, index)=>{
            return index !== id;
        });

        setItems(updateditems);
    }

    const removeAll = ()=>{
        setItems([]);
    }

    return(
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="todologo"/>
                    <figcaption>Add Your List Here 🖐️</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="✍️ Add Items..." id=""
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
                </div>

                <div className="showItems">

                {
                    items.map((elem, index) =>{
                        return(
                            <div className="eachItem" key={index}>
                            <h3>{elem}</h3>
                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(index)}></i>
                            </div>
                        )
                    })
                }
                </div>

                {/* clear all button */}
                <div className="showItems">
                <button className="btn effect04" data-sm-link-text="remove All" onClick={() => removeAll()}><span>CheckList</span></button>
                </div>
            </div>
        </div>
        </>
    )
};

export default Todo;
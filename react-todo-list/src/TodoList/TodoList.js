import React, {createRef, useState} from 'react';

const TodoList = () => {
const inputRef = React.createRef();
const [inputText, setInputText] = useState('');    
const [items, setItems] = useState([]);

const changeHandler = event => {
  let  inputValue = event.target.value;
  setInputText(inputValue)
  
};

const clickHnadler = () => {
  let inputStaticValue = inputRef.current.value;
  let listItems = [...items, inputStaticValue];
  setItems(listItems)
  inputRef.current.value = '';
};

const removeHandler = (e) =>{
  e.target.parentElement.remove()
}

    return(
        <div className="wrapper">
            <div className="wrapper_container">
             <h1 className="wrapper_title">{inputText}</h1>
              <input ref={inputRef} className="wrapper_input" onChange={changeHandler} type="text" placeholder="enter your todo" maxLength="25"></input>
              <button className= "wrapper_button" onClick={clickHnadler}>Addlist</button>
              
              <div className="wrapper_menu_list_div">
                <ul>
                {
                  items.map((item, index)=><li key={index}><span className="list_content">{item}</span><span className="close_tag" onClick={removeHandler}>&times;</span></li>)
                }
                </ul>
              </div>
            </div>
        </div>
    )
}


export default TodoList;
import { useState, useCallback } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [inputText, setInputText] = useState(undefined);
  const [updatedObject, setUpdatedObject] = useState(undefined);
  const [list, setList] = useState([]);

  const addNewItem = () => {
    if (!inputText) return;

    const updatedList = list && list.length > 0 ? [...list, { id: list.length + 1, value: inputText }] : [{ id: list.length + 1, value: inputText }];
    setList(updatedList);
    setInputText(undefined);
  };

  const changeItemValue = useCallback(id => {
    if (!updatedObject) return;

    const updatedList = list.reduce((accumulator, currentValue) => {
      if (currentValue.id === id) {
        currentValue.value = updatedObject[id]
      }
      return [ ...accumulator, { ...currentValue } ]
    }, [])

    setList(updatedList);
    setUpdatedObject(undefined);
  }, [list, updatedObject]);

  return (
    <div className="container">
      <div className="wrapper">
        <h2>REGISTER FORM</h2>
        <input value={inputText} onChange={e => setInputText(e.currentTarget.value)} placeholder="Enter something." />
        <button onClick={addNewItem}>SUBMIT</button>
        <hr />
        <h2>LIST</h2>
        {list && list.map(({ id, value }, index) => (
          <div key={`item-${index}`} className="list">
            <span className="item">ID: {id}</span>
            <span className="item">
              VALUE: <input id={id} value={updatedObject ? updatedObject[id] : value} onChange={e => setUpdatedObject({ [id]: e.currentTarget.value })} />
            </span>
            <button onClick={() => changeItemValue(id)}>UPDATE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

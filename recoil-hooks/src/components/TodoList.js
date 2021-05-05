import { useState, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import inputForm from '../atoms/inputForm';
import './TodoList.css';

const TodoList = () => {
  const [updatedObject, setUpdatedObject] = useState(undefined);
  const [list] = useRecoilState(inputForm);

  const setInputForm = useSetRecoilState(inputForm);

  const initInputForm = useCallback(() => {
    setInputForm(state => [...state, { id: state.length + 1, value: '' }])
  }, [setInputForm])

  const changeItemValue = useCallback(e => {
    const { id, value } = e.target;

    const updatedList = list.reduce((accumulator, currentValue) => {
      if (currentValue.id === Number(id)) {
        return [ ...accumulator, { id: Number(id), value } ]
      }
      return [ ...accumulator, { ...currentValue } ]
    }, []);

    setInputForm(() => updatedList);
    setUpdatedObject(undefined);
  }, [list, setInputForm]);

  return (
    <div className="container">
      <div className="wrapper">
        <h2>REGISTER FORM</h2>
        <button onClick={initInputForm}>ADD NEW ITEM</button>
        <hr />
        <h2>LIST</h2>
        {list && list.map(({ id, value }, index) => (
          <div key={`item-${index}`} className="list">
            <span className="item">ID: {id}</span>
            <span className="item">
              VALUE:&nbsp;
              <input
                id={id}
                value={updatedObject ? updatedObject[id] : value}
                onChange={e => setUpdatedObject({ [id]: e.currentTarget.value })}
                onBlur={changeItemValue}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

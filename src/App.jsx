import { useState } from 'react';
import './App.css'
import In_exList from './components/In_exList/In_exList';
import NewIn_exItem from './components/NewIn_exItem/NewIn_exItem';
let lastId = 3;
const INITIAL_INEXLIST = [
  {
    id: 1,
    InEx: true,
    category: "Food",
    amount: 200,
    Payment: true
  },
  {
    id: 2,
    InEx: false,
    category: "Travel",
    amount: 1500,
    Payment: false
  },
  {
    id: 3,
    InEx: true,
    category: "Cloth",
    amount: 20000,
    Payment: true
  }
];
function App() {
  const [inexList, setInexList] = useState(INITIAL_INEXLIST);
  const addInexListHandler = (newInexData) => {
    const newInex = {
      ...newInexData,
      id: ++lastId,
    };
    setInexList([newInex, ...inexList]);
  };
  const [isShow, setIsShow] = useState(false);
  const deleteHandler = (id) => {
    const newInexList = inexList.filter((e)=> e.id !== id);
    setInexList(newInexList);
  }

  const editHandler = (id, inex) => {
    //clone new list
    const newInexList = [...inexList]
    //find and update target student
    const idx = inexList.findIndex((e) => e.id===id);
    newInexList[idx] = {...inex}
    //set state
    setInexList(newInexList);
  }

  return (
    <div className="row">
      <div className="column1">
      {isShow ? (
        <NewIn_exItem setIsShow={setIsShow} onAddInex={addInexListHandler}/>
      ) : (
        <div className="add-button-container">
          <button className="add-button" onClick={() => setIsShow(true)}>Add New Record</button>
        </div>
      )}
      </div>
      <div className="column2">
      <In_exList in_exList = {inexList} deleteHandler={deleteHandler} editHandler={editHandler}/>
      </div>
    </div>
  )
}

export default App

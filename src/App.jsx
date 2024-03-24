import { useEffect, useReducer, useState} from "react";
import "./App.css";
import In_exList from "./components/In_exList/In_exList";
import NewIn_exItem from "./components/NewIn_exItem/NewIn_exItem";
import { reducer } from "./reducers/ListChanged-reducer";
import { HandlerContext } from "./context/handler-context";
let lastId = 3;
const INITIAL_INEXLIST = [
  {
    id: 1,
    InEx: true,
    category: "Food",
    amount: 200,
    Payment: true,
  },
  {
    id: 2,
    InEx: false,
    category: "Travel",
    amount: 1500,
    Payment: false,
  },
  {
    id: 3,
    InEx: true,
    category: "Cloth",
    amount: 20000,
    Payment: true,
  },
];

function App() {
  const [inexList, dispatch] = useReducer(reducer, {}, () => {
    const localInex = localStorage.getItem("list");
    if (localInex === null) {
      return INITIAL_INEXLIST;
    }
    return JSON.parse(localInex);
  });

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(inexList));
  }, [inexList]);

  const addInexListHandler = (newInexData) => {
    const newInex = {
      ...newInexData,
      id: ++lastId,
    };
    dispatch({
      type: "add_Inex",
      newInex: newInex,
    });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "delete_Inex",
      deleteId: id
    })
  };

  const editHandler = (id, inex) => {
    dispatch({
      type: "editInex",
      editId: id,
      inex: inex
    })
  };

  return (
    <HandlerContext.Provider value={{
      addInexListHandler: addInexListHandler,
      editHandler: editHandler,
      deleteHandler: deleteHandler
    }}>
    <div className="row">
      <div className="column1">
        {isShow ? (
          <div className="NewIn_exItem">
            <NewIn_exItem
              setIsShow={setIsShow}
            />
          </div>
        ) : (
          <div className="add-button-container">
            <button className="add-button" onClick={() => setIsShow(true)}>
              Add New Record
            </button>
          </div>
        )}
      </div>
      <div className="column2">
        <In_exList
          in_exList={inexList}
        />
      </div>
    </div>
    </HandlerContext.Provider>
  );
}

export default App;

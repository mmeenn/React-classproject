import React, { useContext, useState } from "react";
import "./In_exItem.css";
import { HandlerContext } from "../../context/handler-context";

function In_exItem(props) {
  const ctx = useContext(HandlerContext);
  const [isEdit, setIsEdit] = useState(false);
  const [curInEx, setCurInEx] = useState("");
  const [curCat, setCurCat] = useState("");
  const [curAmount, setCurAmount] = useState("");
  const [curPayment, setCurPayment] = useState("");
  const onClickEdit = () => {
    setIsEdit(true);
    setCurInEx(props.InEx);
    setCurCat(props.category);
    setCurAmount(props.amount);
    setCurPayment(props.Payment);
  };
  const onClickDone = () => {
    const editValues = {
      InEx: curInEx,
      category: curCat,
      amount: curAmount,
      Payment: curPayment,
    };
    ctx.editHandler(props.id, editValues);
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <div className="In_exItem">
        <select
          className="edit-select"
          value={curInEx}
          onChange={(e) => setCurInEx(e.target.value === "true")}
        >
          <option value={true}>Income</option>
          <option value={false}>Expense</option>
        </select>
        <select
          className="edit-select"
          value={curCat}
          onChange={(e) => setCurCat(e.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Cloth">Cloth</option>
          <option value="Other">Other</option>
        </select>
        <input
        className="edit-amount"
          type="number"
          min="1"
          max="1000000"
          step="1"
          onChange={(e) => setCurAmount(e.target.value)}
          value={curAmount}
        />
        <select
        className="edit-select"
          onChange={(e) => setCurPayment(e.target.value === "true")}
          value={curPayment}
        >
          <option value={true}>Cash</option>
          <option value={false}>Credit Card</option>
        </select>
        <button onClick={onClickDone} className="done-btn">
          Done
        </button>
        <button onClick={() => setIsEdit(false)} className="edt-cancel-btn">
          Cancle
        </button>
      </div>
    );
  }

  return (
    <div className="In_exItem">
      <div className={props.InEx ? "Tag Blue" : "Tag Red"}>
        {props.InEx ? "Income" : "Expense"}
      </div>
      <div>{props.category}</div>
      <div>{props.amount}</div>
      <div>{props.Payment ? "Cash" : "Credit Card"}</div>
      <button className="edit-btn" onClick={onClickEdit}>
        Edit
      </button>
      <button
        className="delete-btn"
        onClick={() => {
          ctx.deleteHandler(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default In_exItem;

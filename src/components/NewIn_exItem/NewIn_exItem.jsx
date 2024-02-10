import React, { useState } from "react";

function NewIn_exItem(props) {
    const [curInEx, setCurInEx] = useState(true)
    const [curCat, setCurCat] = useState("Food");
    const [curAmount, setCurAmount] = useState("");
    const [curPayment, setCurPayment] = useState(true)
    const inexChangeHandler = (event) => {
        setCurInEx(event.target.value === "true")
    }
    const catChangeHandler = (event) => {
        setCurCat(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setCurAmount(event.target.value)
    }
    const paymentChangeHandler = (event) => {
        setCurPayment(event.target.value === "true")
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newRecord = {
            InEx: curInEx,
            category: curCat,
            amount: curAmount,
            Payment: curPayment
        };
        props.onAddInex(newRecord)
        setCurInEx("");
        setCurCat("");
        setCurAmount("");
        setCurPayment("");
        props.setIsShow(false);
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="NewIn_excontainer">
        <div className="In_exInput">
          <label>Income/Expense</label>
          <select onChange={inexChangeHandler} value={curInEx}>
            <option value={true}>Income</option>
            <option value={false}>Expense</option>
          </select>
        </div>
        <div className="In_exInput">
          <label>Category</label>
          <select onChange={catChangeHandler} value={curCat}>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Cloth">Cloth</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="In_exInput">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            max="1000000"
            step="1"
            onChange={amountChangeHandler}
            value={curAmount}
          />
        </div>
        <div className="In_exInput">
            <label>Payment</label>
            <select onChange={paymentChangeHandler} value={curPayment}>
                <option value={true}>Cash</option>
                <option value={false}>Credit Card</option>
            </select>
        </div>
        <hr/>
        <div>
            <button type="submit">Add</button>
        </div>
        <div>
            <button type="button" onClick={()=>(props.setIsShow(false))}>Cancle</button>
        </div>
      </div>
    </form>
  );
}

export default NewIn_exItem;

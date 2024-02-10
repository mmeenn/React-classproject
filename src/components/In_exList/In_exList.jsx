import React, { useState } from "react";
import In_exItem from "../In_exItem/In_exItem";
import "./In_exList.css";

function In_exList(props) {
  const in_exList = props.in_exList;
  const [curCat, setCurCat] = useState("Food");
  const fillterdCat = in_exList.filter((s) => s.category === curCat);
  return (
    <div className="grid-container">
      <div className="selectdiv">
        <label>
          <select value={curCat} onChange={(e) => setCurCat(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Cloth">Cloth</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <div className="InExList">
        {fillterdCat.length === 0 ? (
          <div>Not Found</div>
        ) : (
          fillterdCat.map((e) => (
            <In_exItem
              key={e.id}
              id={e.id}
              InEx={e.InEx}
              category={e.category}
              amount={e.amount}
              Payment={e.Payment}
              deleteHandler={props.deleteHandler}
              editHandler={props.editHandler}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default In_exList;

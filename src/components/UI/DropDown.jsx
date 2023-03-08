import React, { useState } from "react";

const DropDown = (props) => {
  const [selected, setSelected] = useState(props.default);
  const [expandedList, setExpandedList] = useState(false);
  const list = props.list.map((li) => {
    return (
      <li
        className="px-2"
        onClick={() => {
          setSelected(li);
          setExpandedList(false);
        }}
      >
        {li}
      </li>
    );
  });
  return (
    <div
      className={`${props.className} border m-auto`}
      style={{ width: props.width || "" }}
    >
      <div className={expandedList && "border-b"}>
        <span className="p-2">{selected}</span>
        <span onClick={() => setExpandedList(!expandedList)}>{">"}</span>
      </div>

      <ul>{expandedList && list}</ul>
    </div>
  );
};

export default DropDown;

import React from 'react'
import { Plus, RotateCcw } from "lucide-react";


function TableHeader({handleOpen}) {

  const   add = () => {
    handleOpen();
    }
  return (
    <>
          <div className="header-container">
      <span className="titletableheader"></span>
      <div className="buttons">
        <button className="icon-button-header" onClick={add}>
          <Plus size={30} />
        </button>
        {/* <button className="icon-button">
          <RotateCcw size={20} />
        </button> */}
      </div>
    </div>
    </>
  )
}

export default TableHeader

const styles = `
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dde3f0;
  padding: 10px 15px;width: 90%;
  border-radius: 6px 6px 0 0;
}

.titletableheader {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.buttons {
  display: flex;
  gap: 8px;
}

.icon-button-header{
box-shadow: 1px 1px 2px rgba(86, 86, 86, 0.1),-0.2px -0.7px 2px silver;
  border: none;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;  padding:5px;
  transition: background 0.2s;
  background-color: rgb(165, 239, 223);
}
.icon-button-header:hover {
background-color:rgb(235, 235, 235);
}

 @media screen and (max-width: 768px) {
.header-container {
width: 100%;

}

}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

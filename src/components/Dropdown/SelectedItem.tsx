import React, { FC } from "react"
import { ItemsInterface } from "./ItemsInterface"
import "./styles.scss";

export const SelectedItem:FC<ItemsInterface> = ({item, setState}) => {
    return (
        <div className="selected">{item} <button onClick={() => setState(item)}>delete</button> </div>
    )
}
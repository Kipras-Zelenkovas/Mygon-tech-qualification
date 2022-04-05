import React, { FC } from "react"
import { ItemsInterface } from "./ItemsInterface"

export const SelectedItem:FC<ItemsInterface> = ({item, setState}) => {
    return (
        <button onClick={() => setState(item)}>{item}</button>
    )
}